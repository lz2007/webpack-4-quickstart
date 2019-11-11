<template>
  <div class="login-conter">
    <div class="login">
      <div class="title">系统登录</div>
      <div class="login-from">
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          :rules="rules"
          ref="loginForm"
          status-icon
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formLabelAlign.password" show-password></el-input>
          </el-form-item>
          <el-form-item class="onSubmit">
            <el-button
              type="primary"
              @click="onSubmit('loginForm')"
              :loading="loading"
            >{{onSubmitText}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      onSubmitText: "登录",
      labelPosition: "right",
      formLabelAlign: {
        name: "admin",
        password: "admin"
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          this.onSubmitText = "登录中...";
          setTimeout(() => {
            this.loading = false;
            this.onSubmitText = "登录";
            this.$store.commit("changeLogin", true);
            this.$router.replace("content");
          }, 1500);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.login-conter {
  position: relative;
  color: #ffffff;
  width: inherit;
  height: inherit;
  background: #2d3a4b;
}

.login {
  width: 600px;
  margin: auto;
  transform: translate(0, 100%);
}

.title {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  margin-left: 65px;
  margin-bottom: 36px;
}

.login-conter /deep/ .el-form-item__label {
  color: #ffffff;
}

.onSubmit /deep/ button {
  width: 100%;
}
</style>