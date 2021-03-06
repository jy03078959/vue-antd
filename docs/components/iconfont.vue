<template lang="md">
# Iconfont

---

有含义的矢量图形，每一个图标打倒一个敌人。

## 图标的命名规范

我们为每个图标赋予了语义化的命名。只需在 ```<v-icon></v-icon>``` 标签内，制定对应的 type 属性即可。

不同 type 命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[描线与否]-[方向]`。

## 实现原理

所有的 Icon 标签最终会渲染为

```html
<i class="anticon anticon-${type}"></i>
```

## 如何使用

使用 ```<v-icon>``` 标签申明组件，设置对应的 type 设置需要渲染的图标，示例代码如下:

```html
<v-icon type="link" ></v-icon>
```

> 点击图标复制代码。

## 图标列表

### 一. 方向性图标

<ul class="anticons-list clearfix">
  <li v-for="item in icons1Obj" :data-clipboard-text="_getCopyCode(item.name)" :class="{copied: item.justCopied}">
    <v-icon :type="item.name"></v-icon>
    <span class="anticon-class">{{item.name}}</span>
  </li>
</ul>

### 二. 提示建议性图标

<ul class="anticons-list clearfix">
  <li v-for="item in icons2Obj" :data-clipboard-text="_getCopyCode(item.name)" :class="{copied: item.justCopied}">
    <v-icon :type="item.name"></v-icon>
    <span class="anticon-class">{{item.name}}</span>
  </li>
</ul>

### 三. 网站通用图标

<ul class="anticons-list clearfix">
  <li v-for="item in icons3Obj" :data-clipboard-text="_getCopyCode(item.name)" :class="{copied: item.justCopied}">
    <v-icon :type="item.name"></v-icon>
    <span class="anticon-class">{{item.name}}</span>
  </li>
</ul>
</template>

<script type="text/ecmascript-6">
import vIcon from '../../components/iconfont'
window.Clipboard = require('clipboard')

export default {
  data () {
    return {
      icons1: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'caret-circle-right', 'caret-circle-left', 'caret-circle-o-right', 'caret-circle-o-left', 'circle-right', 'circle-left', 'circle-o-right', 'circle-o-left', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'circle-up', 'circle-down', 'circle-o-up', 'circle-o-down', 'caret-circle-o-up', 'caret-circle-o-down', 'caret-circle-up', 'caret-circle-down'],
      icons2: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'cross', 'cross-circle-o', 'cross-circle', 'check', 'check-circle-o', 'check-circle', 'clock-circle-o', 'clock-circle'],
      icons3: ['lock', 'unlock', 'android', 'apple', 'area-chart', 'bar-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download-line', 'edit', 'ellipsis', 'file', 'file-text', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'meh', 'inbox', 'laptop', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'pie-chart', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'smile', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'ie', 'chrome', 'home', 'loading', 'smile-circle', 'meh-circle', 'frown-circle', 'tags-o', 'tag-o', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customerservice', 'qrcode']
    }
  },

  components: { vIcon },

  computed: {
    icons1Obj () {
      return this.icons1.map(name => {
        return {name, justCopied: false}
      })
    },
    icons2Obj () {
      return this.icons2.map(name => {
        return {name, justCopied: false}
      })
    },
    icons3Obj () {
      return this.icons3.map(name => {
        return {name, justCopied: false}
      })
    }
  },

  ready () {
    const clipboard = new Clipboard('.anticons-list li')
    clipboard.on('success', (e) => {
      const item = e.trigger.__vfrag__.scope.item

      item.justCopied = true
      setTimeout(() => {
        item.justCopied = false
      }, 1000)
    })
  },

  methods: {
    _getCopyCode (type) {
      return '<v-icon type="' + type + '"></v-icon>'
    }
  }
}
</script>

<style scoped>
ul.anticons-list {
  margin: 20px 0;
  list-style: none;
  width: 120%;
  overflow: hidden;
}
ul.anticons-list li {
  float: left;
  margin: 5px 5px 5px 0;
  width: 155px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 110px; color: #5C6B77;
  transition: all 0.2s ease;
  position: relative; padding-top: 10px;
}
ul.anticons-list li:hover {
  background-color: #4BB8FF;
  color: #fff;
  border-radius: 4px;
}
ul.anticons-list li.copied:hover {
  color: rgba(255,255,255,0.2);
}
ul.anticons-list li:after {
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  content: "Copied!";
  text-align: center;
  line-height: 110px;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
}
ul.anticons-list li.copied:after {
  opacity: 1;
  top: 0;
}
.anticon {
  font-size: 26px;
  margin: 12px 0 16px;
}
.anticon-class {
  display: block;
  text-align: center;
  word-wrap: break-word;
}
</style>


