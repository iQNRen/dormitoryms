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
          <el-option label="学号" value="number"></el-option>
          <el-option label="姓名" value="name"></el-option>
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
        <el-form-item label="值：">
          <el-input
          size="large"
            v-model="ruleForm.value"
            placeholder="请输入关键字"
            style="width: 160px"
          ></el-input>
          <el-button
          size="large"
            type="primary"
            style="position: relative; left: 10px"
            @click="submitForm('ruleForm')"
            >            
            <el-icon style="position: relation; left: -10px" size="large"
              ><Search/></el-icon>
            搜索</el-button
          >
        </el-form-item>
      </div>
    </el-form>

    <el-table
      :data="tableData"
      border
      stripe
      style="width: 1190px; position: relative; top: -30px"
    >
      <el-table-column fixed prop="id" label="ID" width="130">
      </el-table-column>
      <el-table-column prop="dormitoryName" label="宿舍" width="130">
      </el-table-column>
      <el-table-column prop="number" label="学号" width="130">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="130"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="130">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="130"> </el-table-column>
      <el-table-column prop="createDate" label="入住时间" width="180">
      </el-table-column>
      <el-table-column label="操作" width="230">
        <template #default="scope">
          <el-button size="mini" type="danger" @click="moveout(scope.row)"
            >迁出</el-button
          >
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
import {Search} from '@element-plus/icons-vue'
import {
  moveList,
  moveoutSearch,
  moveoutLists,
  moveoutMoveout,
} from "../../api/moveout";
export default {
    setup(){
        Search
    },
  data() {
    return {
      tableData: null,
      currentPage: 1,
      pageSize: 5,
      total: null,
      key: "",
      value: "",
      ruleForm: {
        key: "",
        value: "",
        page: "",
        size: 5,
      },
      rules: {
        key: [{ required: true, message: "请选择字段", trigger: "change" }],
      },
    };
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
          moveoutSearch(_this.ruleForm).then(function (resp) {
            _this.tableData = resp.data.data;
            _this.total = resp.data.total;
          });
        }
      });
    },
    page(currentPage) {
      const _this = this;
      if (_this.ruleForm.value == "") {
        moveoutLists(currentPage, _this.pageSize).then(function (resp) {
          _this.tableData = resp.data.data;
          _this.total = resp.data.total;
        });
      } else {
        _this.ruleForm.page = _this.currentPage;
        moveoutSearch(_this.ruleForm).then(function (resp) {
          _this.tableData = resp.data.data;
          _this.total = resp.data.total;
        });
      }
    },
    moveout(row) {
      const _this = this;
      this.$prompt("请输入迁出原因", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
        inputErrorMessage: "迁出原因不能为空",
      }).then(({ value }) => {
        this.$confirm("确认迁出【" + row.name + "】吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          moveoutMoveout(row.id,value).then(function (resp) {
              if (resp.data.code == 0) {
                _this.$alert("【" + row.name + "】已迁出", "", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    // location.reload();
                    // this.reload();
                  router.go(0)
                  },
                });
              }
            });
        });
      });
    },
  },
  created() {
    const _this = this;
    moveList(_this.pageSize).then(function (resp) {
        _this.tableData = resp.data.data;
        _this.total = resp.data.total;
      });
  },
};
</script>