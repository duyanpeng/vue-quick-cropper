# vue-quick-cropper

![Read the Docs](https://img.shields.io/readthedocs/pip.svg)

基于vue的移动端头像裁剪上传插件(样式仿照微信，可单指移动双指缩放)

![xiaoguozhanshi](./static/cropper.gif)


## 安装
---
`npm install vue-quick-cropper -S`

```
// 推荐引入方式
// 使用vue-cli webpack时在main.js中引入
import Vue from 'vue';
import VueQuickCropper from 'vue-quick-cropper';

Vue.use(VueQuickCropper)
```
```
// 不推荐引用方式
// 未使用webpack时直接引用打包之后的版本，不推荐使用，推荐建议使用vue-cli的webpack方式进行打包处理
import Vue from 'vue';
// 注意引用的是 vue-quick-cropper/dist下的index.js
import VueQuickCropper from 'vue-quick-cropper/dist/index.js';
import 'vue-quick-cropper/dist/index.css';  // 引入插件相关的css

Vue.use(VueQuickCropper)
```

## 使用
---
```html
<template>
        <div id="app">

        <div v-if="!visible">
            <!-- 选择照片 -->
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
    // 获得头像的base64和二进制
    finish(base64,data){
      console.log(base64,'图片base64')
      console.log(data,'图片二进制')
    },  
    // 确定使用
    confirm() {
      this.$nextTick(() => {
          // 确认截图
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
        // imgSrc已获取，开始渲染图片
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

### 配置
---
参数|类型|说明|备注
:--:|:--:|:--:|:--:
v-bind:imgSrc|String|图片src|通过fileReader读取，见例子
v-bind:imgType|String|生成base64图片格式|"png","jpeg",默认"png"
v-on:finish|Function|剪切完成回调，返回base64数据和二进制数据|finish(base64,data)具体见示例代码
ref.init|Function|imgSrc获取成功回调|告诉cropper可以渲染图片具体见示例代码
ref.confirm|Function|截图|告诉cropper截图
ref.getBase64Url|Function|返回截图的base64|通过ref使用具体见示例代码
ref.getData|Function|返回截图的二进制数据|通过ref使用具体见示例代码
---
### 注意事项:

兼容性不是十分友好

## 版本更新说明
---
版本号|说明|
:--:|:--:|

0.0.2|更新文档

0.0.1|项目初始化

## 联系我
---
QQ:215028726
