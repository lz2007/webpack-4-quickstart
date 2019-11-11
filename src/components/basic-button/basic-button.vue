<!-- basic-button -->
<template>
  <div class="page-container basic-button">
    <section class="content element-doc content">
      <h3 id="ji-chu-yong-fa">
        <a
          href="https://element.eleme.io/#/zh-CN/component/button#ji-chu-yong-fa"
          aria-hidden="true"
          class="header-anchor"
        >¶</a> 基础用法
      </h3>
      <p>常用的操作按钮。</p>
      <div class="demo-block demo-button">
        <div class="source">
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-row>
        </div>
      </div>

      <h3 id="ji-chu-yong-fa">
        <a
          href="https://element.eleme.io/#/zh-CN/component/button#ji-chu-yong-fa"
          aria-hidden="true"
          class="header-anchor"
        >¶</a> 禁用状态
      </h3>
      <p>按钮不可用状态。</p>

      <div class="demo-block demo-button">
        <div class="source">
          <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain disabled>朴素按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="success" plain disabled>成功按钮</el-button>
            <el-button type="info" plain disabled>信息按钮</el-button>
            <el-button type="warning" plain disabled>警告按钮</el-button>
            <el-button type="danger" plain disabled>危险按钮</el-button>
          </el-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='stylus' type='text/stylus' scoped>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}

.demo-block.demo-button .el-row {
  margin-bottom: 20px;
}

.demo-block .source {
  padding: 24px;
}
</style>