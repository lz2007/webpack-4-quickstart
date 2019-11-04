<template>
  <div id="app">
    <div class="diva">
      <div class="divb">{{activeIndex}}</div>
      <div class="divb">{{activeIndex}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "Home"
    };
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
