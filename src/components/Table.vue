<template>
  <div id="Tablevue">
    <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="站点名称" prop="name"></el-table-column>
      <el-table-column label="位置地址" prop="url"></el-table-column>
      <el-table-column label="Alexa排名" prop="alexa"></el-table-column>
      <el-table-column label="国家" prop="country"></el-table-column>
      <el-table-column label="网址" prop="urls"></el-table-column>
      <el-table-column align="right" width="300">
        <template slot="header" slot-scope>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <!-- @click="handleAdd(scope.$index, scope.row)" -->
          <el-button size="mini" @click="handleAdd(e)">添加</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <!-- <span>我来啦!</span> -->
      <Forms />
    </el-drawer>
    <br />
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <Carousel />
  </div>
</template>


<script>
import Forms from "./Forms.vue";
import Carousel from "./Carousel.vue";
export default {
  name: "Tablevue",
  components: {
    Forms,
    Carousel,
  },
  data() {
    return {
      tableData: [],
      search: "",
      drawer: false,
      currentDate: new Date(),
    };
  },
  created() {
    // 当前组件被加载的时候数据就准备好了
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("http://localhost:8081/web01/SelectAllComment")
        .then((res) => {
          this.tableData = res.data;
          console.log(this.data);
        });
    },
    handleAdd(e) {
      // 连接数据库
      this.getData
      
      console.log(e);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>