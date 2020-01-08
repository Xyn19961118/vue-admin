<!--  -->
<template>
  <div class='article'>
    <div class="tags-title">添加标签</div>
    <div class="tags-add">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.tagname" placeholder="输入标签名称" class="tags-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { Message } from "element-ui"
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        form: {
          tagname: "",
        }
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      onSubmit() {
        const _this = this;
        let id = this.$route.query.id;
        if (id) {
          //执行更新操作
          this.$api.Tags.tagsEdit({
            id,
            name: this.form.tagname,
          }).then(res => {
            if (!res.data.error) {
              Message({
                message: res.data.msg,
                type: "success"
              })

              _this.$router.push({
                path: "/tags"
              })
            } else {
              Message({
                message: res.data.msg,
                type: "error"
              })
            }
          })
        } else {
          //执行添加文章操作
          this.$api.Tags.tagsAdd({
            name: this.form.tagname,
          }).then(res => {
            if (!res.data.error) {
              Message({
                message: res.data.msg,
                type: "success"
              })

              _this.$router.push({
                path: "/tags"
              })
            } else {
              Message({
                message: res.data.msg,
                type: "error"
              })
            }
          })
        }
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      let id = this.$route.query.id;
      //判断是否是编辑
      if (id) {
        this.$api.Tags.tagsDetail({
          id
        }).then(res => {
          let data = res.data;
          this.form.tagname = data.name;
        })
      }
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
  .tags-add {
    margin-top: 20px;
  }

  .tags-input {
    width: 400px;
  }
</style>