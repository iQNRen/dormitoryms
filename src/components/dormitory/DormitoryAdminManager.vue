<template>
  <div style="margin-top: 60px; margin-left: 80px; border: 0px solid red">
    <el-form
      style="margin-left: -40px"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="字段：" prop="key">
        <el-select
          size="large"
          v-model="ruleForm.key"
          style="width: 160px; float: left"
          placeholder="请选择字段"
        >
          <el-option label="宿管账号" value="username"></el-option>
          <el-option label="宿管姓名" value="name"></el-option>
          <el-option label="宿管电话" value="telephone"></el-option>
        </el-select>
      </el-form-item>
      <div
        style="
          border: 0px solid red;
          width: 400px;
          height: 60px;
          position: relative;
          top: -56px;
          left: 270px;
        "
      >
        <el-form-item label="值：" size="large">
          <el-input
            v-model="ruleForm.value"
            placeholder="请输入关键字"
            style="width: 160px"
          ></el-input>
          <el-button
            type="primary"
            style="position: relative; left: 10px"
            @click="submitForm('ruleForm')"
          >
            <el-icon style="position: relation; left: -10px" size="large"
              ><Search
            /></el-icon>
            搜索</el-button
          >
        </el-form-item>
      </div>
    </el-form>

    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%; position: relative; top: -30px"
    >
      <el-table-column fixed prop="id" label="ID" width="160">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="160">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="160">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="160"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="160">
      </el-table-column>
      <el-table-column prop="telephone" label="联系电话" width="160">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-row>
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="del(scope.row)"
              >删除</el-button
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px; float: right"
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import {
  getDormitoryList,
  dormitoryAdminDeleteById,
  dormitoryAdminFindById,
  dormitoryAdminSearch,
  dormitoryAdminUpdate,
} from "../../api/dormitoryAdmin";
export default {
  data() {
    return {
      tableData: null,
      currentPage: 1,
      pageSize: 3,
      total: "",
      key: "",
      value: "",
      ruleForm: {
        key: "",
        value: "",
        page: "",
        size: 3,
      },
      rules: {
        key: [{ required: true, message: "请选择字段", trigger: "change" }],
      },
    };
  },
  components: {
    Search,
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      //让翻页复原
      _this.currentPage = 1;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this;
          _this.ruleForm.page = _this.currentPage;
          dormitoryAdminSearch(_this.ruleForm).then(function (resp) {
            _this.tableData = resp.data.data;
            _this.total = resp.data.total;
          });
        }
      });
    },
    page(currentPage) {
      const _this = this;
      if (_this.ruleForm.value == "") {
        getDormitoryList(currentPage, this.pageSize).then(function (resp) {
          _this.tableData = resp.data.data;
          _this.total = resp.data.total;
        });
      } else {
        _this.ruleForm.page = _this.currentPage;
        dormitoryAdminSearch(_this.ruleForm).then(function (resp) {
          _this.tableData = resp.data.data;
          _this.total = resp.data.total;
        });
      }
    },
    edit(row) {
      this.$router.push("/dormitoryAdminUpdate?id=" + row.id);
    },
    del(row) {
      const _this = this;
      this.$confirm("确认删除【" + row.username + "】吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        dormitoryAdminDeleteById(row.id).then(function (resp) {
          console.log(resp);
          console.log("resp.code :" + resp.code);
          if (resp.code == 0) {
            _this.$alert("【" + row.username + "】已删除", "", {
              confirmButtonText: "确定",
              callback: (action) => {
                location.reload();
              },
            });
          }
        });
      });
    },
  },
  created() {
    const _this = this;
    getDormitoryList(_this.pageSize).then(function (resp) {
      _this.tableData = resp.data.data;
      _this.total = resp.data.total;
    });
  },
};
</script>