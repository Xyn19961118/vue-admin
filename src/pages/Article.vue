<!-- 文章页 -->
<template>
  <div class='article'>
    <div class="article-title">
      <div class="article-title-label">选择日期:</div>
      <el-date-picker v-model="dateVal" type="daterange" range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-input placeholder="请输入搜索内容" v-model="searchVal" clearable class="search-input">
      </el-input>
      <el-button class="search-btn" type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <div class="article-content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="50">
        </el-table-column>
        <el-table-column prop="title" label="文章标题" width="500">
        </el-table-column>
        <el-table-column prop="tags" label="标签" width="100">
          <template slot-scope="scope">
            <el-tag disable-transitions>{{scope.row.tags}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {
    Message
  } from 'element-ui';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        dateVal: '', //选择日期
        searchVal: '', //搜索框
        tableData: []
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      handleEdit(index, row) {
        let id = row.id;
        // console.log(id)
        this.$router.push({ path: `/addarticle?id=${id}`})
      },
      handleDelete(index, row) {
        let id = row.id;
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$api.Article.articleDelete({
            id
          }).then(res => {
            // console.log(index)
            this.tableData.splice(index, 1)
            this.$message({
              type: 'success',
              message: res.data.msg
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      const isLogin = localStorage.getItem("token");
      // console.log(isLogin)
      if (!isLogin) {
        this.$router.replace({
          path: '/login'
        })
      } else {
        this.$api.Article.articleList({
          page: 1,
          pagesize: 10
        }).then(res => {
          let data = res.data;
          if (!data.error) {
            //请求成功
            this.tableData = data.list
            // console.log(this.tableData)
          } else {
            // console.log(data.error)
            Message({
              message: data.msg,
              type: "error"
            })
          }
        })
      }


    },
    beforeCreate() {

    }, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='css' scoped>
  .article-title {
    display: flex;
    padding: 10px 0;
    align-items: center;
  }

  .article-title-label {
    margin-right: 10px;
  }

  .search-input {
    width: 250px;
    margin-left: 30px;
  }

  .search-btn {
    margin-left: 10px;
  }

  .article-content {
    margin-top: 10px;
  }
</style>