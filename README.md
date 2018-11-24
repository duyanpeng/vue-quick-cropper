# vue-quick-cropper
[![Build Status](https://travis-ci.com/duyanpeng/vue-quick-loadmore.svg?branch=master)](https://travis-ci.org/duyanpeng/vue-quick-loadmore)
![Read the Docs](https://img.shields.io/readthedocs/pip.svg)

A mobile image cropping upload plugin for Vue. (styles like WeChat, single finger moving two-finger zoom)--vue的移动端图片裁剪上传插件(样式仿照微信，可单指移动双指缩放)

[zh-CN中文文档](https://github.com/duyanpeng/vue-quick-cropper/blob/master/README.zh-CN.md)

![xiaoguozhanshi](./static/cropper.gif)


## Install
---
`npm install vue-quick-cropper -S`

```
// Introduced in main.js when using vue-cli webpack
import Vue from 'vue';
import VueQuickCropper from 'vue-quick-cropper';

Vue.use(VueQuickCropper)
```

## Use
---
```html
<template>
        <div id="app">
          <div v-if="!visible">
            <!-- Select photos, can be combined with other image upload plugins, in order to get image files -->
            <input ref="file" @change="choiceImg" type="file">
          </div>
         <!-- 照片裁剪部分 -->
          <div class="main" v-if="visible">
            <div class="header">
              <div class="button" @click="confirm">使用</div>
              <div class="button cancel" @click="cancel">取消</div>
            </div>
            <div class="content">
              <quick-cropper ref="cropper" :img-src="imgSrc" @finish="finish">
              </quick-cropper>
            </div>
        </div>
    </div>
</template>
```
```javascript
export default {
  el: '#app',
  data: {
    imgSrc: "",    // 图片数据
    visible:false,  // 剪切框展示
  },
  methods: {
    // Get the base64 and binary of the image
    finish(base64,data){
      console.log(base64,'图片base64')
      console.log(data,'图片二进制')
    },  
    // Confirm button
    confirm() {
      this.$nextTick(() => {
          // Confirm screenshot
        this.$refs.cropper.confirm()
      })
    },
    // cancel
    cancel(){
      this.visible = false
    },
    // Select img callback
    choiceImg(e) {    
      this.visible = true
      const file = e.target.files[0]
      // Read picture information
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.imgSrc = reader.result
        // imgSrc has been acquired, start to initialize the rendered image
        this.$refs.cropper.init()
      }
    },
  }
};
```
```css
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

.item {
    height: 200px;
    background: lightgray;
    border: 2px solid green;
    overflow: hidden;
}

.main {
    height:100%;
    box-sizing: border-box;
    padding-top: 44px;
}

.content {
    height: 100%;
}

.header {
    position: fixed;
    top: 0;
    right: 0;
    height: 44px;
    width: 100%;
    background: #303030;
}

.button {
    float: right;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    margin-right: 15px;
    color: green;
}
.cancel{
    float:left;
    margin-left:15px;
}
```

### Options
---
params|type|description|node
:--:|:--:|:--:|:--:
v-bind:imgSrc|String|Picture src|Read by fileReader, See example
v-bind:imgType|String|Generate image data format|"png","jpeg",default "png"
v-on:finish|Function|Cut completion callback, return base64 data and binary data|finish(base64,data),See example
ref.init|Function|Called when imgSrc gets successful|Tell the cropper to render the image,See example
ref.confirm|Function|Screenshot|Tell the cropper screenshot
ref.getBase64Url|Function|Return to the base64 of the screenshot|Use by ref
ref.getData|Function|Return the binary data of the screenshot|Use by ref
---


## Contact me
---
QQ:215028726
