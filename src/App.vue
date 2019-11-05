<template>
  <div id="app">
    {{num}}
    {{name}}
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/home">Go to home</router-link>
      <router-link to="/login">Go to login</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { log } from "util";

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

<style lang="styl">
@import "./styles/index.styl";

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande",
    "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
    "Hiragino Sans GB W3", "WenQuanYi Micro Hei", sans-serif;
}
</style>
