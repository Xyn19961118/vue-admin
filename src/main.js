import Vue from 'vue'
// import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'; //quill富文本
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css';
import routes from "./router";
import store from "./store/index";
import api from './api/api'

Vue.use(VueRouter);
const router = new VueRouter({
  routes
})

Vue.prototype.$api = api;   //放入全局

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
new Vue({
  router,
  store
}).$mount('#app')
