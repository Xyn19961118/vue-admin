<!--  -->
<template>
  <div class="bg-box">
    <div class='login'>
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>

      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="" prop="username">
          <el-input class="input" v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input class="input" placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-button class="submit" type="primary" @click="loginSubmit('form')">登录</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>
  // import axios from "axios";
  import {
    Message
  } from 'element-ui';
  import Login from "../modules/loginModel.js"
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        form: {
          username: "", //用户名
          password: "" //密码
        },
        rules: {
          username: [{
              required: true,
              message: '请输入登录名称',
              trigger: 'blur'
            },
            {
              min: 5,
              max: 20,
              message: '长度在 5 到 20 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: 'blur'
          }]
        }
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

      //登录提交
      loginSubmit(formName) {
        const _this = this
        const userName = this.$data.form.username;
        const password = this.$data.form.password;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.$api.Login.login({
              name: userName,
              password
            }).then(res => {
              const data = res.data;
              let msgType = "error";
              if (!data.error) {
                msgType = "success";
                localStorage.setItem("token", data.token);
                _this.$router.push({
                  path: '/article'
                });
                // console.log(_this.$router)
              }
              Message({
                message: data.msg,
                type: msgType,
                duration: 2000
              })
            }).catch(function (error) {
              // console.log(error)
              Message({
                message: error,
                type: "error",
                duration: 2000
              })
            });
            // console.log(this.$http.Login)
          } else {
            Message({
              message: 'error submit!!',
              type: "error",
              duration: 2000
            })
            // console.log('error submit!!');
            return false;
          }
        });

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      // console.log(this)
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
<style lang="css" scoped>
  .bg-box {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #6ca5fe;
  }

  .submit {
    margin-top: 20px;
    width: 100%;
  }

  .el-form-item__error {
    margin-left: 15px !important;
  }

  @import "../assets/css/login.css";
</style>