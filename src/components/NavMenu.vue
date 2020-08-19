<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">榜单</el-menu-item>
      <el-menu-item index="3">下载客户端</el-menu-item>
      <el-submenu index="4">
        <template slot="title">更多</template>
        <el-menu-item index="4-1">电台</el-menu-item>
        <el-menu-item index="4-2">MV</el-menu-item>
        <el-menu-item index="4-3">歌单</el-menu-item>
        <el-menu-item index="4-4">歌手</el-menu-item>
      </el-submenu>
      <el-menu-item index="5"><i class=el-icon-star-off></i>直播</el-menu-item>
      <el-menu-item index="6"><i class=el-icon-goods></i>商城</el-menu-item>
      <el-menu-item index="7"><i class=el-icon-headset></i>音乐人</el-menu-item>
      <el-menu-item index="8"><i class=el-icon-sell></i>代理商</el-menu-item>
      <el-menu-item index="9"><i class=el-icon-mic></i>主播电台</el-menu-item>
      <el-menu-item index="10"><i class=el-icon-wallet></i>开放电台</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
</style>