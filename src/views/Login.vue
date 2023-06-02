<template>
  <div class="body"></div>
    
    <div class="login-container">
        <div class="left"></div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        status-icon
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-page"
      >
        <h3 class="title">宿舍管理系统登录</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="type" label="dormitoryAdmin">宿舍管理员</el-radio>
          <el-radio
            style="position: relative; left: 30px"
            v-model="type"
            label="systemAdmin"
            >系统管理员</el-radio
          >
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%"
            @click="handleSubmit"
            :loading="logining"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  
</template>

<script>
import { dormitoryAdminLogin } from "../api/dormitoryAdmin";
import { systemAdminLogin } from "../api/systemAdmin";
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      ruleForm: {
        username: "",
        password: "",
      },
      type: "dormitoryAdmin",
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          let _this = this;
          if (_this.type == "dormitoryAdmin") {
            dormitoryAdminLogin(_this.ruleForm).then(function (resp) {
              _this.logining = false;
              if (resp.code == -1) {
                _this.$alert("用户名不存在", "提示", {
                  confirmButtonText: "确定",
                });
              }
              if (resp.code == -2) {
                _this.$alert("密码错误", "提示", {
                  confirmButtonText: "确定",
                });
              }
              if (resp.code == 0) {
                console.log(resp);
                localStorage.setItem(
                  "dormitoryAdmin",
                  JSON.stringify(resp.data)
                );
                _this.$router.replace({ path: "/dormitoryAdmin" });
              }
            });
          }
          if (_this.type == "systemAdmin") {
            systemAdminLogin(_this.ruleForm).then(function (resp) {
              _this.logining = false;
              if (resp.code == -1) {
                _this.$alert("用户名不存在", "提示", {
                  confirmButtonText: "确定",
                });
              }
              if (resp.code == -2) {
                _this.$alert("密码错误", "提示", {
                  confirmButtonText: "确定",
                });
              }
              if (resp.code == 0) {
                console.log(resp);
                localStorage.setItem("systemAdmin", JSON.stringify(resp.data));
                _this.$router.replace({ path: "/systemAdmin" });
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background: url(../assets/pic_1.jpg) center center no-repeat;
  background-size: 100% 100%;
  position: absolute;
  z-index: -99;
  overflow: hidden;
}
.left {
    /* background: blue; */
  background: url(../assets/pic_0.jpg) no-repeat;
  background-size: 80%;
  width: 210px;
  height: 310px;
  position: absolute;
  border-radius: 10%;
  top: 27%;
}


.login-container {
  width: 580px;
  /* height: 200px; */
  /* background: yellow; */
  position: absolute;
  /* margin: 0 auto; */
  left: 34%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 0% 10% 10% 0%;
  margin: 180px auto;
  width: 310px;
  padding: 35px 35px 15px;
  position: relative;
  left: 60px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>