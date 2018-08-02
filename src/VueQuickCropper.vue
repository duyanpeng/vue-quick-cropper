<!--  -->
<template>
  <div class="vquick-cropper">
    <!-- <img ref="img" alt=""> -->

    <canvas ref="canvas"></canvas>
    <!-- <canvas ref="canvas2" width="300" height="300"></canvas> -->
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {}
  },
  data() {
    return {
      imgSrcs:
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532688589528&di=9cbedf775f773bd21d13c2ef737663b4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H1756_sNuWa.thumb.700_0.jpeg",
        require("../static/touxiang.jpeg"),
      ctx: {}, // canvas实例
      img: {}, // img实例
      width: 0, // canvas宽
      height: 0, // canvas高
      imgWidth: 0,
      imgHeight: 0,
      startScreen: undefined, // 触摸点坐标
      moveScreen: { x: 0, y: 0 }, // 移动中点坐标
      endScreen: undefined, // 结束触摸点坐标
      posImg: { x: 0, y: 0 }, // 照片移动的距离
      imageData: {}, // 裁剪区域的canvas信息值
      base64: "", // 头像的base64
      isMove: true, // 是否能拖动图片
      scaleStart: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      scaleMove: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      widthRate: 1,
      endImgWidth:0,
      endImgHeight:0,
    };
  },

  components: {},

  computed: {},
  watch: {},
  mounted() {
    // this.init();
  },

  methods: {
    confirm() {
      const rectWidth = this.width * 0.8;
      const rectHeight = this.height * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.drawHeader(
        this.ctx,
        this.img,
        -this.posImg.x + rectX,
        -this.posImg.y + rectY
      );
    },
    // 初始化canvas
    initCanvas() {
      this.$nextTick(() => {
        const C = this.$refs.canvas;
        // 宽高等于容器宽高
        C.width = this.$el.getBoundingClientRect().width;
        C.height = this.$el.getBoundingClientRect().height;

        const ctx = C.getContext("2d");
        // ctx.globalAlpha = 0.8

        const img = new Image();

        img.src = this.imgSrc;
        this.ctx = ctx;
        this.img = img;
        this.width = C.width;
        this.height = C.height;
        let rate = 1;

        img.onload = () => {
          if (img.width / C.width > 1) {
            rate = img.width / C.width;
          }
          this.imgWidth = img.width / rate;
          this.imgHeight = img.height / rate;
          this.drawImg(ctx, img, 0, 0, this.imgWidth, this.imgHeight);
          // 裁剪框
          this.drawRect();
        };
      });
    },
    // 画头像
    drawImg(ctx, img, x, y, width, height) {
      this.drawClear();
      ctx.drawImage(img, x, y, width, height);

      ctx.fillStyle = "rgba(0,0,0,.1)";
      ctx.fillRect(0, 0, this.width, this.height);
      this.drawRect();
    },
    // 裁剪头像
    drawHeader(ctx, img, x, y, width, height) {
      this.isMove = false;
      const rectWidth = this.width * 0.8;
      const rectHeight = this.height * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.drawClear();
      ctx.drawImage(
        img,
        x * (this.img.width / this.width),
        y * (this.img.width / this.width),
        rectWidth * (this.img.width / this.imgWidth),
        rectWidth * (this.img.width / this.imgWidth),
        rectX,
        rectY,
        rectWidth,
        rectWidth
      );

      this.imageData = ctx.getImageData(rectX, rectY, rectWidth, rectWidth);

      this.makeHeader(rectWidth);
      this.drawRect();
    },
    // 画剪切框
    drawRect() {
      const rectWidth = this.width * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.ctx.strokeStyle = "#fff";
      this.ctx.lineWidth = ".5";
      this.ctx.strokeRect(rectX, rectY, rectWidth, rectWidth);
    },
    // 清楚画布
    drawClear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    },
    // 生成base64
    makeHeader(rectWidth) {
      const canvas2 = document.createElement("canvas");
      const ctx2 = canvas2.getContext("2d");
      canvas2.width = rectWidth;
      canvas2.height = rectWidth;
      ctx2.putImageData(this.imageData, 0, 0);
      const base64 = canvas2.toDataURL();
      this.base64 = base64;
      // this.$refs.img.src = base64;
    },
    // 获得base64
    getBase64Url() {
      return this.base64;
    },
    // 初始化
    init() {
      this.initCanvas();
      this.bindTouchEvents();
    },
    bindTouchEvents() {
      this.$refs.canvas.addEventListener("touchstart", this.handleTouchStart);
      this.$refs.canvas.addEventListener("touchmove", this.handleTouchMove);
      this.$refs.canvas.addEventListener("touchend", this.handleTouchEnd);
    },
    handleTouchStart(e) {
      if (!this.isMove) return;

      let x = e.touches[0].screenX;
      let y = e.touches[0].screenY;
      this.widthRate = 1;
      if (e.touches.length == 2) {
        this.scaleStart = {
          x1: e.touches[0].screenX,
          y1: e.touches[0].screenY,
          x2: e.touches[1].screenX,
          y2: e.touches[1].screenY
        };
        return;
      }
      this.startScreen = { x, y };
    },
    handleTouchMove(e) {
      e.preventDefault();
      if (!this.isMove) return;
      // this.widthRate = 1;
      let x = e.touches[0].screenX;
      let y = e.touches[0].screenY;
      let mx = x - this.startScreen.x + this.posImg.x;
      let my = y - this.startScreen.y + this.posImg.y;

      if (e.touches.length == 2) {
        this.scaleMove = {
          x1: e.touches[0].screenX,
          y1: e.touches[0].screenY,
          x2: e.touches[1].screenX,
          y2: e.touches[1].screenY
        };
        // 现在的比例
        const widthRate = (
          Math.abs(this.scaleMove.x2 - this.scaleMove.x1) /
          Math.abs(this.scaleStart.x2 - this.scaleStart.x1)
        ).toFixed(2);
        this.widthRate = widthRate;
        const imgWidth = this.imgWidth - this.imgWidth*this.widthRate
        const imgHeight = this.imgHeight - this.imgHeight*this.widthRate
              this.drawImg(
        this.ctx,
        this.img,
        mx,
        my,
        imgWidth,
        imgHeight
      );
      this.endImgWidth = imgWidth
      this.endImgHeight = imgHeight
        return;
      }
      // alert(1)
    
      // this.drawImg(this.ctx, this.img, mx, my, this.imgWidth, this.imgHeight);
      this.drawImg(
        this.ctx,
        this.img,
        mx,
        my,
        this.imgWidth,
        this.imgHeight
      );
      this.endImgWidth = this.imgWidth
      this.endImgHeight = this.imgHeight
      this.moveScreen = { x, y };
      this.endScreen = {
        x: mx,
        y: my
      };
    },
    handleTouchEnd(e) {
      if (!this.isMove) return;
      this.posImg = this.endScreen;
      this.imgWidth = this.endImgWidth;
      this.imgHeight = this.endImgHeight;
      this.scaleStart = this.scaleMove;
      // alert(this.widthRate);
      // if (this.widthRate != 1) {
      //   this.imgWidth = this.imgWidth * this.widthRate;
      //   this.imgHeight = this.imgHeight * this.widthRate;
      // }
    }
  }
};
</script>
<style scoped>
.vquick-cropper {
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
}
</style>