<template>
  <el-container class="home_container">
    <el-header class="home_header">
      <div class="home_title">泉州师范学院宿舍管理系统-系统管理员</div>
      <div class="home_userinfoContainer">
        <el-dropdown split-button type="danger">
          {{ admin.name }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout"
                >退出登录</el-dropdown-item
              >
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
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Platform /></el-icon>
              <span>宿管模块</span>
            </template>
            <el-menu-item 
                index="/dormitoryAdminManager"
>
              <el-icon><DocumentCopy /></el-icon>宿管管理</el-menu-item
            >
            <el-menu-item 
                index="/dormitoryAdminAdd"
            >
              <el-icon><FolderAdd /></el-icon>添加宿管</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>学生模块</span>
            </template>
            <el-menu-item 
            index="/studentManager"
            >
              <el-icon><DocumentCopy /></el-icon>学生管理</el-menu-item
            >
            <el-menu-item
            index="/studentAdd"
            >
              <el-icon><FolderAdd /></el-icon>添加学生</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><OfficeBuilding /></el-icon>
              <span>楼宇模块</span>
            </template>
            <el-menu-item index="/buildingManager">
              <el-icon><DocumentCopy /></el-icon>楼宇管理</el-menu-item
            >
            <el-menu-item index="/buildingAdd">
              <el-icon><FolderAdd /></el-icon>添加楼宇</el-menu-item
            >
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><HomeFilled /></el-icon>
              <span>宿舍模块</span>
            </template>
            <el-menu-item index="dormitoryManager">
              <el-icon><DocumentCopy /></el-icon>宿舍管理</el-menu-item
            >
            <el-menu-item index="dormitoryAdd">
              <el-icon><FolderAdd /></el-icon>添加宿舍</el-menu-item
            >
          </el-sub-menu>

          <el-menu-item index="moveoutRegister">
            <el-icon><Checked /></el-icon>
            <span>学生迁出登记</span>
          </el-menu-item>
          <el-menu-item index="moveoutRecord">
            <el-icon><List /></el-icon>
            <span>学生迁出记录</span>
          </el-menu-item>
          <el-menu-item index="/absentRecords">
            <el-icon><CircleCloseFilled /></el-icon>
            <span>学生缺勤记录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: './systemHome' }">
              首页
            </el-breadcrumb-item>
            <el-breadcrumb-item v-text="this.$route.name"></el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import {
  ArrowDown,
  OfficeBuilding,
  CircleCloseFilled,
  Platform,
  DocumentCopy,
  FolderAdd,
  UserFilled,
  HomeFilled,
  Checked,
  List,
} from "@element-plus/icons-vue";

export default {
  components: {
    ArrowDown,
    OfficeBuilding,
    CircleCloseFilled,
    Platform,
    DocumentCopy,
    FolderAdd,
    UserFilled,
    HomeFilled,
    Checked,
    List,
  },
  methods: {
    logout() {
      let _this = this;
      this.$confirm("注销登录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(function () {
        localStorage.removeItem("systemAdmin");
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
    let admin = JSON.parse(window.localStorage.getItem("systemAdmin"));
    this.admin = admin;
  },
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-menu-vertical-demo{
    height: 100%;
}
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.home_header {
  background-color: #2b2b2b;
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
