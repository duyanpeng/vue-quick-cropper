import Vue from 'vue'
import VueQuickCropper from './VueQuickCropper.vue'

Vue.component('quick-cropper', VueQuickCropper)

new Vue({
    el: '#app',
    data: {
        dataList:[1,2,3,4,5]
    },
    methods: {

      }
})