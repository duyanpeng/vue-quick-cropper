import Vue from 'vue'
import VueQuickCropper from './src/VueQuickCropper.vue'

Vue.component('quick-cropper', VueQuickCropper)

new Vue({
  el: '#app',
  data: {
    imgSrc: "",    // 图片数据
    visible:false,  // 剪切框展示
  },
  methods: {
    // 获得头像的base64和二进制
    finish(base64,data){
      console.log(base64,'图片base64')
      console.log(data,'图片二进制')
    },
    // 确定使用
    confirm() {
      this.$nextTick(() => {
        this.$refs.cropper.confirm()
      })
    },
    // 取消
    cancel(){
      this.visible = false
    },
    // 选择img回调
    choiceImg(e) {    
      this.visible = true
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.imgSrc = reader.result
        this.$refs.cropper.init()
      }
    },
  }
})