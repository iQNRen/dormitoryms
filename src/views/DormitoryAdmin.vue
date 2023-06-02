<template>
  <el-container class="home_container">
    <el-header class="home_header">
      <div class="home_title">泉州师范学院宿舍管理系统-宿舍管理员</div>
      <div class="home_userinfoContainer">
        <el-dropdown split-button type="danger">
          {{ admin.name }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside class="home_aside" width="200px">
        <el-menu
          router
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item
            index="absentRecord"
          >
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>学生缺寝记录</span>
            </template>
          </el-menu-item>

          <el-menu-item
            index="absentRegister"
          >
            <template #title>
              <el-icon><Platform /></el-icon>
              <span>学生缺寝登记</span>
            </template>
          </el-menu-item>

        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/dormitoryHome' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$route.name"></el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    logout() {
      let _this = this;
      this.$confirm("注销登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(function () {
        localStorage.removeItem("dormitoryAdmin");
        _this.$router.replace({ path: "/login" });
      });
    },
  },
  data() {
    return {
      admin: "",
    };
  },
  created() {
    let admin = JSON.parse(window.localStorage.getItem("dormitoryAdmin"));
    this.admin = admin;
    console.log("admin :" + admin);
  },
};
</script>
<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.home_header {
  background-color: #da2127;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home_title {
  color: #c2c2c2;
  font-size: 22px;
  display: inline;
}

.home_userinfo {
  color: #fff;
  cursor: pointer;
}

.home_userinfoContainer {
  display: inline;
  margin-right: 20px;
}

.home_aside {
  background-color: #ffffff;
}

.home_footer {
  background-color: #ffffff;
  color: #000000;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
}
</style>
