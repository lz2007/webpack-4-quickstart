<!--
 * @Author: your name
 * @Date: 2019-11-06 16:18:12
 * @LastEditTime: 2019-11-11 16:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-4-quickstart\src\components\content\content.vue
 -->
<template>
  <div class="content">
    <el-container>
      <!-- el-aside  -->
      <el-aside class="aside" v-bind:class="[isCollapse ? 'collapse' : '']">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          :collapse="isCollapse"
          background-color="#2d3a4b"
          text-color="#fff"
          active-text-color="#1890ff"
          :collapse-transition="false"
          :router="true"
          :default-active="defaultActive"
        >
          <div v-for="(item,index) in navList" :key="index">
            <!--存在子菜单-->
            <el-submenu
              v-if="item.children"
              :index="item.name"
              :class="[isCollapse ? 'visibility' : '']"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item
                v-for="(subitem,subindex) in item.children"
                :key="subindex"
                :index="subitem.path"
              >{{subitem.name}}</el-menu-item>
            </el-submenu>
            <!--不存在子菜单-->
            <el-menu-item v-else :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-aside>

      <!-- el-main -->
      <el-main class="main">
        <el-container>
          <el-header class="header">
            <div id="hamburger-container" class="hamburger-container" @click="hamburgerClick">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                class="hamburger"
                :class="[isCollapse ? '' : 'is-active']"
              >
                <path
                  d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                />
              </svg>
            </div>

            <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/content/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if="breadcrumbItem !='首页'">{{breadcrumbItem}}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="right-menu">
              <div class="right-menu-item">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    <el-avatar shape="square" size="medium" src="/src/images/user1.jpeg"></el-avatar>

                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>

                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="/content/personal-center">个人中心</el-dropdown-item>
                    <el-dropdown-item command="/content/home">首页</el-dropdown-item>
                    <el-dropdown-item command="/content/set-up">设置</el-dropdown-item>
                    <el-dropdown-item command="/login" divided>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </el-header>

          <el-main class="router-main">
            <transition name="el-fade-in-linear" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navList from "./navList";
export default {
  data() {
    return {
      isCollapse: false,
      defaultActive: "/content/home",
      breadcrumbItem: "首页",
      navList
    };
  },

  components: {},
  computed: {},
  watch: {
    "$route.path"(val) {
      this.breadcrumbItem = this.$route.name;
      this.defaultActive = this.$route.path;
    }
  },
  mounted() {
    if (
      this.$route.path.search("content/home") > 0 ||
      this.$route.path == "/content"
    ) {
      this.$router.push("/content/home");
    } else {
      this.defaultActive = this.$route.path;
    }
    this.breadcrumbItem = this.$route.name;
  },

  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    handleSelect(key, keyPath) {},
    hamburgerClick() {
      this.isCollapse = !this.isCollapse;
    },
    handleCommand(command) {
      console.log(command);
      this.$router.push(command);
    }
  }
};
</script>

<style type="text/stylus" lang='stylus' scoped>
.content {
  width: inherit;
  height: inherit;

  .header {
    height: 50px !important;
    overflow: hidden;
    position: relative;
    background: #fff;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .breadcrumb-container {
      float: left;
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 8px;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        >>> .el-avatar {
          margin-top: 6px;
          position: relative;
        }
      }
    }
  }

  .aside {
    transition: width 0.3s;
    width: 210px !important;

    &.collapse {
      width: 65px !important;
    }
  }

  /deep/ .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
    border: none;
  }

  /deep/ .el-menu-vertical-demo .visibility span, /deep/ .el-menu-vertical-demo .visibility .el-submenu__icon-arrow {
    display: none;
  }

  /deep/ .el-menu {
    border: none;
  }

  /deep/ .el-container {
    width: inherit;
    height: 100%;

    .main {
      padding: 0;
      margin: 0;
    }

    /deep/ .el-aside {
      height: inherit;
      background: #2d3a4b;
    }
  }

  // .router-main {
  // overflow: hidden;
  // }
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }

  .hamburger.is-active {
    transform: rotate(180deg);
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0px 15px;
    cursor: pointer;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>