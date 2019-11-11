<!--
 * @Author: your name
 * @Date: 2019-11-04 08:39:41
 * @LastEditTime: 2019-11-11 16:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-4-quickstart\src\App.vue
 -->
<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data() {
    return {
      activeIndex: "Home"
    };
  },
  computed: {
    num() {
      console.log(this.$store.getters);

      return this.$store.getters["products/getNum"];
    },
    ...mapGetters({
      name: "products/getNum"
    })
  },
  components: {}
};
</script>

<style lang="stylus">
@import './styles/index.styl';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'ff-tisa-web-pro-1', 'ff-tisa-web-pro-2', 'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'WenQuanYi Micro Hei', sans-serif;
  width: inherit;
  height: inherit;
}

.page-container {
  width: 60%;
  margin: auto;
}

.page-container h2, .page-container h3, .page-container h4, .page-container h5 {
  font-weight: 400;
  color: #1f2f3d;
}

.page-container h2 {
  font-size: 28px;
  color: #1f2d3d;
  margin: 0;
}

.page-container p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}

.page-component .content>h3 {
  margin: 55px 0 20px;
}

.page-container h2 a, .page-container h3 a, .page-container h4 a, .page-container h5 a {
  float: left;
  margin-left: -20px;
  opacity: 0;
  cursor: pointer;
}

.page-container h2, .page-container h3, .page-container h4, .page-container h5 {
  font-weight: 400;
  color: #1f2f3d;
}

.page-container h3 {
  font-size: 22px;
}
</style>
