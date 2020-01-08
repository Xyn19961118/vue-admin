<!-- 添加文章 -->
<template>
  <div class='article'>
    <div class="article-title">添加文章</div>
    <div class="add-article">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章名称" class="form-item">
          <el-input v-model="form.articleName"></el-input>
        </el-form-item>
        <el-form-item label="发布时间" class="form-item">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="选择标签">
          <el-select v-model="form.tags" placeholder="请选择标签">
            <el-option v-for="item in form.tagsList" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <quill-editor v-model="content" ref="myQuillEditor" class="editor">
        </quill-editor>
        <el-button type="primary" class="submit" @click="submitArticle">发布文章</el-button>
      </el-form>
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
        form: {
          articleName: "",
          date: "",
          tagsList: [],
          tags: '',
        },
        content: ``,
        editorOption: {},

      };
    },
    //监听属性 类似于data概念
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // onEditorReady(editor) { // 准备编辑器
      // },
      // onEditorBlur(e) {
      //   console.log(e); // 富文本获得焦点时的内容
      // }, // 失去焦点事件
      // onEditorFocus(val, editor) { // 富文本获得焦点时的事件
      //   // console.log(val); // 富文本获得焦点时的内容
      //   // editor.enable(false); // 在获取焦点的时候禁用
      // },
      // onEditorChange() {}, // 内容改变事件

      // saveHtml: function (event) {
      //   console.log(this.content);
      // },
      //提交文章
      submitArticle() {
        const _this = this;
        let id = this.$route.query.id;
        if (id) {
          //执行更新操作
          this.$api.Article.articleEdit({
            id,
            title: this.form.articleName,
            addtime: this.form.date,
            tags: this.form.tags,
            content: this.content
          }).then(res => {
            if (!res.data.error) {
              Message({
                message: res.data.msg,
                type: "success"
              })

              _this.$router.push({
                path: "/article"
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
          this.$api.Article.articleAdd({
            title: this.form.articleName,
            addtime: this.form.date,
            tags: this.form.tags,
            content: this.content
          }).then(res => {
            if (!res.data.error) {
              Message({
                message: res.data.msg,
                type: "success"
              })

              _this.$router.push({
                path: "/article"
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
        this.$api.Article.articleDetail({
          id
        }).then(res => {
          let data = res.data;
          this.form.articleName = data.title;
          this.form.date = data.addtime;
          this.form.tags = data.tags;
          this.content = data.content
        })
      }

      //获取标签
      this.$api.Article.tagsList().then(res => {
        let data = res.data;
        this.form.tagsList = data;
      })

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.editor.container.style.height = `${500}px`
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
  .add-article {
    margin-top: 40px;
  }

  .form-item {
    width: 560px;
  }

  .editor {
    width: 800px;
  }

  .submit {
    margin-top: 30px;
    margin-bottom: 20px;
  }
</style>