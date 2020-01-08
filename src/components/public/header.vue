<!-- header -->
<template>
  <div class='header'>
    <div class="index-logo">
      <img src="../../assets/logo.png" alt="">
    </div>

    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          Admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

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
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    border-bottom: #ddd 1px solid;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .index-logo {
    margin-left: 20px;
  }

  .header-right {
    margin-left: auto;
    margin-right: 30px;
  }
</style>