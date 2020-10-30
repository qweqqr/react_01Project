import axios from 'axios'

//第一步 创建实例
const service = axios.create({
    baseURL: 'devApi',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
//第二步 请求拦截
service.interceptors.request.use(function(config){
    //在发送请求之前做什么？
    return config;
},function(err){
    //对请求错误做什么？
    return Promise.reject(err);
})
//第三步 响应拦截
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service;