<template>
  <div id="app">    
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Layout />
    <NavMenu />
    <Carousel />
    <Linear />
    <h1>表格显示</h1>
    <Table />
    <!-- <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Table from "./components/Table.vue";
import NavMenu from "./components/NavMenu";
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import Linear from "./components/Linear"
export default {
  name: "App",
  components: {
    // HelloWorld,
    Table,
    NavMenu,
    Layout,
    Carousel,
    Linear,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* 清除边框 */
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}
</style>