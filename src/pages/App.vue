<template>
  <div id="app">
    <Header></Header>
    <div class="center">
      <Menu></Menu>
      <div class="main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  import Menu from '../components/public/menu';
  import Header from "../components/public/header";
  export default {
    name: 'app',
    components: {
      Menu, //菜单
      Header, //顶部
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="css" scoped>
  .menu {
    width: 200px;
    height: 100%;
    background: #fff;
  }

  .center {
    position: absolute;
    left: 0;
    width: 100%;
    top: 61px;
    height: calc(100% - 61px);
  }

  .main {
    padding: 20px;
    width: calc(100% - 200px);
    position: absolute;
    left: 200px;
    top: 0;
    height: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  @import "../assets/css/style.css";
</style>