// import { config } from "../untils/config";
import axios from "../untils/http";
import qs from 'qs'; // 根据需求是否导入qs模块

const Login = {
  login(params){
    return axios.post(`/api/user/login`, qs.stringify(params));
  }
}

export default Login;