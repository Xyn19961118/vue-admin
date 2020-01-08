<!-- 标签列表 -->
<template>
  <div class='article'>
    <div class="article-content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="50">
        </el-table-column>
        <el-table-column prop="name" label="标签" width="200">
          <template slot-scope="scope">
            <el-tag disable-transitions>{{scope.row.name}}</el-tag>
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
  // import {
  //   Message
  // } from 'element-ui';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
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
        this.$router.push({ path: `/addtags?id=${id}`})
      },
      handleDelete(index, row) {
        let id = row.id;
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$api.Tags.tagsDelete({
            id
          }).then(res => {
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
      this.$api.Tags.tagsList().then(res => {
        let data = res.data;
        this.tableData = data;
      })
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style lang='css' scoped>
</style>