<template>
  <div class="home">
    <div class="content">
      <img alt="logo" src="../assets/logo.png" />
      <h2>欢迎{{ admin.name }},来到泉州师范学院宿舍管理系统</h2>
    </div>
  </div>
</template>

<script>
export default {
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
.home {
  width: 1278px;
  height: 538px;
  display: flex;
  justify-content: center; /*使子项目水平居中*/
  align-items: center; /*使子项目垂直居中*/
}
img {
  position: relative;
  left: 30%;
  /* user-select: none; */
}
</style>
