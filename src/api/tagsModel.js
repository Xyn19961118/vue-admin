// import { config } from "../untils/config";
import axios from "../untils/http";
// import qs from 'qs'; // 根据需求是否导入qs模块

const Tags = {
  //获取标签列表
  tagsList(){
    return axios.get('/api/tags/list');
  },
  //删除标签
  tagsDelete(params){
    return axios.post('/api/tags/delete',params);
  },
  //标签详情
  tagsDetail(params){
    return axios.get(`/api/tags/detail/${params.id}`);
  },
  //标签编辑
  tagsEdit(params){
    return axios.post('/api/tags/edit',params);
  },
  //添加文章
  tagsAdd(params){
    // console.log(params)
    return axios.post('/api/tags/add',params);
  },
}

export default Tags;