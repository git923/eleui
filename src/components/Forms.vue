<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="站点名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="位置地址">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="国家">
      <el-cascader :options="options" clearable></el-cascader>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style scoped>
</style>