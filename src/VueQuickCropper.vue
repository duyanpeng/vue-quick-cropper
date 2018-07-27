<!--  -->
<template>
  <div class="vquick-cropper">
    <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532688589528&di=9cbedf775f773bd21d13c2ef737663b4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H1756_sNuWa.thumb.700_0.jpeg" alt=""> -->
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532688589528&di=9cbedf775f773bd21d13c2ef737663b4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F22%2F20150422H1756_sNuWa.thumb.700_0.jpeg"
    };
  },

  components: {},

  computed: {},
  watch: {},
  mounted() {
    this.init();
  },

  methods: {
    // 初始化canvas
    initCanvas() {
      this.$nextTick(() => {
        const C = this.$refs.canvas;
        // 宽高等于容器宽高
        C.width = this.$el.getBoundingClientRect().width;
        C.height = this.$el.getBoundingClientRect().height;

        const ctx = C.getContext("2d");
        const rectWidth = C.width * 0.8;
        const rectX = C.width*0.1;
        const rectY = (C.height - rectWidth)/2
         
        const img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0, 0, C.width, C.height);
        };
        // img.src = this.imgSrc
         
        this.drawRect(ctx,rectX,rectY,rectWidth) 
      });
    },
    // 画头像
    drawImg() {},
    // 画剪切框
    drawRect(ctx,x,y,width){
      ctx.strokeRect(x, y, width, width)
    },
    // 获得滚动距离
    getScrollTop() {
      return this.$el.scrollTop;
    },
    // 设置滚动距离
    setScrollTop(y) {
      this.$nextTick(() => {
        this.$el.scrollTop = parseFloat(y);
      });
    },
    init() {
      this.initCanvas();
    },
    bindTouchEvents() {
      this.$refs.content.addEventListener("touchstart", this.handleTouchStart);
      this.$refs.content.addEventListener("touchmove", this.handleTouchMove);
      this.$refs.content.addEventListener("touchend", this.handleTouchEnd);
    },
    handleTouchStart(e) {
      // 只有没滚动时才触发事件
      if (
        this.$refs.content.getBoundingClientRect().top < this.startPositionTop
      ) {
        return;
      }
      if (this.topStatus === TOPSTATUS.loading) {
        return;
      }

      let screenY = e.touches[0].screenY;
      this.startScreenY = screenY;
    },
    handleTouchMove(e) {
      // 只有没滚动时才触发事件
      if (
        this.$refs.content.getBoundingClientRect().top < this.startPositionTop
      ) {
        return;
      }
      if (this.topStatus === "loading") {
        return;
      }

      let screenY = e.touches[0].screenY;
      this.endScreenY = screenY;
      let moveDistance = (screenY - this.startScreenY) / this.distanceIndex;
      if (
        this.$refs.content.getBoundingClientRect().top > this.startPositionTop
      ) {
        this.topStatus = TOPSTATUS.pulling;
      }

      if (moveDistance >= this.topDistance) {
        this.topStatus = TOPSTATUS.limit;
      }
      if (moveDistance > 0) {
        e.preventDefault();
        e.stopPropagation();

        this.transformStyle(this.$refs.content, moveDistance);
      }
    },
    handleTouchEnd(e) {
      // 只有没滚动时才触发事件
      if (
        this.$refs.content.getBoundingClientRect().top < this.startPositionTop
      ) {
        return;
      }
      if (
        this.topStatus === TOPSTATUS.pulling ||
        this.topStatus === TOPSTATUS.limit
      ) {
        e.stopPropagation();
        e.preventDefault();
      }
      if (this.topStatus === "loading") {
        return;
      }

      if (
        (this.endScreenY - this.startScreenY) / this.distanceIndex >=
        this.topDistance
      ) {
        this.transformStyle(this.$refs.content, this.topLoadingDistance, true);
        this.topStatus = TOPSTATUS.loading;
        this.topMethod();
        if (!this.disableBottom) {
          this.bottomStatus = BOTTOMSTATUS.wait;
        }
      } else {
        this.topStatus = TOPSTATUS.wait;
        this.transformStyle(this.$refs.content, 0);
        this.startScreenY = 0;
        this.endScreenY = 0;
      }
    },
    // 上拉数据加载完
    onTopLoaded() {
      this.transformStyle(this.$refs.content, 0, true);
      this.topStatus = TOPSTATUS.wait;
      this.startScreenY = 0;
      this.endScreenY = 0;
    },
    // 下拉数据加载完
    onBottomLoaded(flag = true) {
      if (flag) {
        this.bottomStatus = BOTTOMSTATUS.wait;
      } else {
        this.bottomStatus = BOTTOMSTATUS.nodata;
      }
    },
    // 动画
    transformStyle(target, moveDistance, transition, timer = 200) {
      target.style["-webkit-transform"] =
        "translate3d(0," + moveDistance + "px,0)";
      target.style["transform"] = "translate3d(0," + moveDistance + "px,0)";
      target.style.transitionDuration = "0ms";
      if (transition) {
        target.style.transitionDuration = timer + "ms";
      }
    }
  }
};
</script>
<style scoped>
.vquick-cropper {
  height: 100%;
  overflow: hidden;
}
</style>