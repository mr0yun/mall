import axios from 'axios'
export function request(config, success, failure) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  });
  /* instance(config).then(res => {
      success(res);
    })
    .catch(err => {
      failure(err);
    }) */

  /*   instance.interceptors.request.use(config => {
      // 1.config中的一些信息不符合服务器的要求
      // 2.每次发送网络请求时，希望在界面中显示一个图标
      // 3.某些网络请求（比如登陆（tolen）），必须携带一些特殊的信息
      console.log(config)
      return config
    }, err => {
      console.log(err)
    }) */

  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  }, err => {
    console.log(err);
  })
  return instance(config);
}