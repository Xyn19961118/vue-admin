<!-- 菜单栏 -->
<template>
  <div class='menu'>
    <el-row class="tac">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo" >
          <template v-for="(item, index) in menu" v-if="!item.hidden">
            <el-submenu :index="index+''">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item  v-for="child in item.children" :index="child.path" @click="$router.push(child.path)" :key="child.path">{{child.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import routes from "../../router.js"
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        menu: []
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
      this.menu = routes;
      // console.log(this.menu)
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
  .tac {
    min-height: 100%;
  }
</style>