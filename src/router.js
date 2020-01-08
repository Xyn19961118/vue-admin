// import Vue from "vue";
import App from "./pages/App.vue";
import Login from "./pages/login.vue";
import Article from "./pages/Article.vue";
import addArticle from "./pages/addArticle.vue";
import Tags from "./pages/tag.vue";
import addTags from "./pages/addtags.vue";


const routes = [{
    path: "/",
    component: App,
    name:"文章管理",
    icon:"el-icon-tickets",
    children:[{
      path:"article",
      component: Article,
      name:"文章列表"
    },{
      path:"addarticle",
      component: addArticle,
      name:"添加文章"
    }]
  },{
    path: "/",
    component: App,
    name:"标签管理",
    icon:"el-icon-guide",
    children:[{
      path:"tags",
      component: Tags,
      name:"标签列表"
    },{
      path:"addtags",
      component: addTags,
      name:"添加标签"
    }]
  },{
    path: "/login",
    component: Login,
    hidden:true
  },
]



export default routes;