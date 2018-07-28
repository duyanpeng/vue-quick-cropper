<!--  -->
<template>
  <div class="vquick-cropper">
    <button @click="click" style="position:fixed;right:0;top:0;">点击裁剪</button>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      imgSrc:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532688589528&di=9cbedf775f773bd21d13c2ef737663b4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H1756_sNuWa.thumb.700_0.jpeg",
      ctx: {}, // canvas实例
      img: {}, // img实例
      width: 0, // canvas宽
      height: 0, // canvas高
      startScreen: undefined, // 触摸点坐标
      moveScreen: { x: 0, y: 0 }, // 移动中点坐标
      endScreen: undefined, // 结束触摸点坐标
      posImg: { x: 0, y: 0 } // 照片移动的距离
    };
  },

  components: {},

  computed: {},
  watch: {},
  mounted() {
    this.init();
  },

  methods: {
    click(){
      const rectWidth = this.width * 0.8;
      const rectHeight = this.height * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.drawHeader(this.ctx,this.img,-this.posImg.x + rectX,-this.posImg.y + rectY,this.width,this.height)
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
        img.onload = () => {
          this.drawImg(ctx, img, 0, 0, C.width, C.height);
          // 裁剪框
          this.drawRect();
        };
        img.src = this.imgSrc;
        this.ctx = ctx;
        this.img = img;
        this.width = C.width;
        this.height = C.height;
      });
    },
    // 画头像
    drawImg(ctx, img, x, y, width, height) {
      this.drawClear();
      ctx.drawImage(img, x, y, width, height);
      this.drawRect();
    },
    // 裁剪头像
    drawHeader(ctx, img, x, y, width, height){
      const rectWidth = this.width * 0.8;
      const rectHeight = this.height * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.drawClear();
      
      ctx.drawImage(img, x*(this.img.width/this.width), y*(this.img.width/this.width), rectWidth*(this.img.width/this.width), rectWidth*(this.img.width/this.width),rectX,rectY,rectWidth,rectWidth);
      this.drawRect();
    },
    // 画剪切框
    drawRect() {
      const rectWidth = this.width * 0.8;
      const rectX = this.width * 0.1;
      const rectY = (this.height - rectWidth) / 2;
      this.ctx.strokeRect(rectX, rectY, rectWidth, rectWidth);
    },
    // 清楚画布
    drawClear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
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
      let x = e.touches[0].screenX;
      let y = e.touches[0].screenY;
      this.startScreen = { x, y };
    },
    handleTouchMove(e) {
      let x = e.touches[0].screenX;
      let y = e.touches[0].screenY;
      let mx = x - this.startScreen.x + this.posImg.x;
      let my = y - this.startScreen.y + this.posImg.y;
      this.drawImg(this.ctx, this.img, mx, my, this.width, this.height);
      this.moveScreen = { x, y };
      this.endScreen = {
        x: mx,
        y: my
      };
    },
    handleTouchEnd(e) {
      this.posImg = this.endScreen;
    },

  }
};
</script>
<style scoped>
.vquick-cropper {
  height: 100%;
  overflow: hidden;
}
</style>