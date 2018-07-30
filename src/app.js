import Vue from 'vue'
import VueQuickCropper from './VueQuickCropper.vue'

Vue.component('quick-cropper', VueQuickCropper)

new Vue({
  el: '#app',
  data: {
    dataList: [1, 2, 3, 4, 5],
    imgSrc: ""
  },
  methods: {
    click() {
      this.$nextTick(() => {
        this.$refs.cropper.confirm()
      })
    },
    changepic(e) {
      const file = e.target.files[0]
      console.log(file, 'file')
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.imgSrc = reader.result
        // this.$refs.img.src = reader.result
        // this.imgSrc = this.dataURLtoBlob(reader.result)
        this.$refs.cropper.init()
      }
    },
     dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
          type: mime
      });
  }
   
  }
})