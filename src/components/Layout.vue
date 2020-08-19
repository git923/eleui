<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple-light" style="height: 78px;"></div>
      </el-col>
      <el-col :span="4" align="middle" type justify="center">
        <div class="grid-content bg-purple" style="height: 78px;">
          <a>
            <img
                align="center"
              src="https://staticssl.kugou.com/public/root/images/logo.png"
              style="width:153px;height: 37px;"
            />
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light" style="height: 78px;">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light" style="height: 78px;">
          <el-link :underline="false">客服中心</el-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple" style="height: 78px;">
          <el-link :underline="false">招贤纳士</el-link>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light" style="height: 78px;">
          <el-link :underline="false">会员中心</el-link>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content bg-purple-light" style="height: 78px;">
          <span>|</span>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light" style="height: 78px;">
          <el-button type="primary">登陆</el-button>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light" style="height: 78px;"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>
<style>
.el-row {
  /* margin-bottom: 20px; */
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>