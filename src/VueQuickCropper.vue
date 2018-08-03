<!--  -->
<template>
  <div class="vquick-cropper">
    <!-- <img ref="img" :src="imgSrcs"  alt=""> -->

    <canvas ref="canvas"></canvas>
    <!-- <canvas ref="canvas2" width="300" height="300"></canvas> -->
  </div>
</template>

<script>
import exif from "exif-js";
export default {
  props: {
    imgSrc: {},
    imgType:{
      default:'png'
    },
  },
  data() {
    return {
      imgSrcs:'',  // canvas渲染的图片
      ctx: {},    // canvas实例
      img: {},    // img实例
      width: 0,   // canvas宽
      height: 0, // canvas高
      imgWidth: 0,  //图片宽度
      imgHeight: 0,  // 图片高度
      startScreen: undefined, // 触摸点坐标
      endScreen: { x: 0, y: 0 }, // 结束触摸点坐标
      posImg: { x: 0, y: 0 }, // 照片移动的距离
      imageData: {}, // 裁剪区域的canvas信息值
      base64: "", // 头像的base64
      data:[],  // 头像的二进值
      isMove: true, // 是否能拖动图片
      scaleStart: {  // 双指开始触摸点
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      scaleMove: { // 双指结束触摸点
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      widthRate: 1,  // 图片缩放比例
      endImgWidth: 0,  // 图片最后宽度
      endImgHeight: 0 // 图片最后高度
    };
  },

  components: {},

  computed: {},
  watch: {},
  mounted() {
    // this.init();
  },

  methods: {
    // 确认按钮
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
    // 判断图片方向
    imgDirection() {
      this.$nextTick(() => {
        const img = new Image();
        img.src = this.imgSrc;

        let rate = 1;

        img.onload = () => {
          // 获得图片方向
          exif.getData(img, () => {
            this.orientation = exif.getTag(img, "Orientation");
          });
          // 6说明是正向的手机相片  
          if (this.orientation == 6) {
            // undefined证明不是手机拍照相片为网络图片不做处理
          } else {
            this.imgSrcs = this.imgSrc;
            this.initCanvas();
            return;
          }
          const width = this.$el.getBoundingClientRect().width;
          const height = this.$el.getBoundingClientRect().height;
          const canvas3 = document.createElement("canvas");
          const ctx3 = canvas3.getContext("2d");
          const fwidth = img.height;
          const fheight = img.width

          // 如果是相机图片则旋转90度
          if (fwidth / width > 1) {
            rate = fwidth / width;
          }

          const imgWidth = fwidth / rate;
          const imgHeight = fheight / rate;
          
          
          canvas3.width = imgWidth; 
          canvas3.height = imgHeight; 

          ctx3.translate(0.5 * imgWidth, 0.5 * imgHeight);
          ctx3.rotate(90 * Math.PI / 180);
          ctx3.translate(-0.5 * imgHeight, -0.5 * imgWidth);

          ctx3.drawImage(img, 0, 0, imgHeight, imgWidth);
          
          const base64 = canvas3.toDataURL();
          this.imgSrcs = base64;
          this.initCanvas();
        };
      });
    },
    // 初始化canvas
    initCanvas() {
      this.$nextTick(() => {
        const C = this.$refs.canvas;
        // 宽高等于容器宽高
        C.width = this.$el.getBoundingClientRect().width;
        C.height = this.$el.getBoundingClientRect().height;

        const ctx = C.getContext("2d");

        const img = new Image();

        img.src = this.imgSrcs;
        this.ctx = ctx;
        this.img = img;
        this.width = C.width;
        this.height = C.height;
        let rate = 1;

        img.onload = () => {
     
          rate = img.width / (C.width * 0.8);

          const rectWidth = this.width * 0.8;
          const rectHeight = this.height * 0.8;
          const rectX = this.width * 0.1;
          const rectY = (this.height - rectWidth) / 2;
          this.imgWidth = img.width / rate;
          this.imgHeight = img.height / rate;
          this.posImg = {x:rectX,y:rectY}
         
          this.drawImg(ctx, img, rectX, rectY, this.imgWidth, this.imgHeight);
          // 裁剪框
          this.drawRect();
        };
      });
    },
    // 画图像
    drawImg(ctx, img, x, y, width, height) {
      this.drawClear(ctx);
      ctx.drawImage(img, x, y, width, height);

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
        (-this.posImg.x + rectX) * (this.img.width / this.imgWidth),
        (-this.posImg.y + rectY) * (this.img.width / this.imgWidth),
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
      const rectHeight = this.height * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;

      this.ctx.fillStyle = "rgba(0,0,0,.3)";
      this.ctx.fillRect(0, 0, this.width, rectY);
      this.ctx.fillRect(0, rectY, rectX, rectWidth);
      this.ctx.fillRect(rectX+rectWidth, rectY, rectX, rectWidth);
      this.ctx.fillRect(0, rectY+rectWidth, this.width, this.height);
      
      this.ctx.strokeStyle = "#fff";
      this.ctx.lineWidth = ".5";
      this.ctx.strokeRect(rectX, rectY, rectWidth, rectWidth);
    },
    // 清楚画布
    drawClear(ctx = this.ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
    },
    // 生成base64
    makeHeader(rectWidth) {
      const canvas2 = document.createElement("canvas");
      const ctx2 = canvas2.getContext("2d");
      canvas2.width = rectWidth;
      canvas2.height = rectWidth;
      ctx2.putImageData(this.imageData, 0, 0);
      const base64 = canvas2.toDataURL('image/' + this.imgType);
      this.data = this.convertBase64UrlToBlob(base64);
      this.base64 = base64;
      this.$emit('finish',this.base64,this.data)
    },
    // 获得base64
    getBase64Url() {
      return this.base64;
    },
    // 获得二进制数据
    getData(){
      return this.data
    },
    // base64转blob
    convertBase64UrlToBlob(urlData){
       var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
       //处理异常,将ascii码小于0的转换为大于0
       var ab = new ArrayBuffer(bytes.length);
       var ia = new Uint8Array(ab);
       for (var i = 0; i < bytes.length; i++) {
           ia[i] = bytes.charCodeAt(i);
       }
       return new Blob( [ab] , {type : 'image/png'});
   },
    // 初始化
    init() {
      this.imgDirection();
      this.bindTouchEvents();
      this.isMove = true
    },
    bindTouchEvents() {
      this.$refs.canvas.addEventListener("touchstart", this.handleTouchStart);
      this.$refs.canvas.addEventListener("touchmove", this.handleTouchMove);
      this.$refs.canvas.addEventListener("touchend", this.handleTouchEnd);
    },
    handleTouchStart(e) {
      if (!this.isMove) return;
      if (e.touches.length == 1) {
        let x = e.touches[0].screenX;
        let y = e.touches[0].screenY;
          this.startScreen = { x, y };
      }

      if (e.touches.length == 2) {
        // 以左面手指位置为准
        let x =
          e.touches[0].screenX <= e.touches[1].screenX
            ? e.touches[0].screenX
            : e.touches[1].screenX;
        let y =
          e.touches[0].screenX <= e.touches[1].screenX
            ? e.touches[0].screenY
            : e.touches[1].screenY;
        this.startScreen = { x, y };
        this.scaleStart = {
          x1: e.touches[0].screenX,
          y1: e.touches[0].screenY,
          x2: e.touches[1].screenX,
          y2: e.touches[1].screenY
        };
      }
      // 重制最后图片大小等于现在图片大小
      this.widthRate = 1;
      this.endImgWidth = this.imgWidth;
      this.endImgHeight = this.imgHeight;
    },
    handleTouchMove(e) {
      e.preventDefault();
      if (!this.isMove) return;

      if (e.touches.length == 1) {
        let x = e.touches[0].screenX;
        let y = e.touches[0].screenY;
        let mx = x - this.startScreen.x + this.posImg.x;
        let my = y - this.startScreen.y + this.posImg.y;
        this.drawImg(this.ctx, this.img, mx, my, this.imgWidth, this.imgHeight);

        this.endImgWidth = this.imgWidth;
        this.endImgHeight = this.imgHeight;

        this.endScreen = {
          x: mx,
          y: my
        };
      }

      if (e.touches.length == 2) {
        let x =
          e.touches[0].screenX <= e.touches[1].screenX
            ? e.touches[0].screenX
            : e.touches[1].screenX;
        let y =
          e.touches[0].screenX <= e.touches[1].screenX
            ? e.touches[0].screenY
            : e.touches[1].screenY;
        let mx = x - this.startScreen.x + this.posImg.x;
        let my = y - this.startScreen.y + this.posImg.y;
        this.scaleMove = {
          x1: e.touches[0].screenX,
          y1: e.touches[0].screenY,
          x2: e.touches[1].screenX,
          y2: e.touches[1].screenY
        };
        // 缩小的比例
        let widthRate = (
          (Math.abs(this.scaleStart.x2 - this.scaleStart.x1) -
            Math.abs(this.scaleMove.x2 - this.scaleMove.x1)) /
          Math.abs(this.scaleStart.x2 - this.scaleStart.x1)
        ).toFixed(2);
        this.widthRate = widthRate;

        const imgWidth = this.imgWidth - this.imgWidth * this.widthRate;
        const imgHeight = this.imgHeight - this.imgHeight * this.widthRate;
        this.drawImg(this.ctx, this.img, mx, my, imgWidth, imgHeight);
        this.endImgWidth = imgWidth;
        this.endImgHeight = imgHeight;
        this.endScreen = {
          x: mx,
          y: my
        };
      }
    },
    handleTouchEnd(e) {
      if (!this.isMove) return;
      this.posImg = this.endScreen;
      this.imgWidth = this.endImgWidth;
      this.imgHeight = this.endImgHeight;
      this.scaleStart = this.scaleMove;
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