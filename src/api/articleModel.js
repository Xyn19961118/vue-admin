// import { config } from "../untils/config";
import axios from "../untils/http";
import qs from 'qs'; // 根据需求是否导入qs模块

const Article = {
  //文章列表
  articleList(params){
    return axios.post(`/api/article/list`, qs.stringify(params));
  },
  //文章删除
  articleDelete(params){
    return axios.post(`/api/article/delete`, qs.stringify(params));
  },
  //文章详情
  articleDetail(params){
    // console.log(params)
    return axios.get(`/api/article/detail/${params.id}`);
  },
  //添加文章
  articleAdd(params){
    // console.log(params)
    return axios.post('/api/article/add',params);
  },
  //编辑文章
  articleEdit(params){
    // console.log(params)
    return axios.post('/api/article/edit',params);
  },
  //获取标签
  tagsList(){
    return axios.get('/api/tags/list');
  },
}

export default Article;