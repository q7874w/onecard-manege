import qs from "qs";
import config from "../config";
import axios from "axios";
import Vue from "vue";
// Vue原型
const _this = Vue.prototype;

// 超时时间
const timeout = 60000;

// 错误提示
// const errorMsg = {
//   404: "找不到路由",
//   503: "服务未启动",
// };

export default (method, url, data = {}, formData = false, param = "") => {
  const headers = {
    token: sessionStorage.userToken || "",
    "Content-Type": "application/json",
  };
  if (formData) {
    data = qs.stringify(data);
    headers.Accept = "application/json, application/javascript";
    headers["Content-Type"] = "application/x-www-form-urlencoded";
  }
  return new Promise((resolve, reject) => {
    const httpRequest = axios.create({
      headers,
      timeout: timeout,
    });
    // 请求拦截
    httpRequest.interceptors.request.use((config) => {
      // config.cancelToken = new axios.CancelToken((cancel) => {
      // store.commit("pushToken", {
      //   cancelToken: cancel,
      // });
      // });
      return config;
    });
    // 响应拦截
    httpRequest.interceptors.response.use(({ data }) => {
      switch (data.code) {
        case 200:
          resolve(data);
          return;
        default:
          // 组件内处理异常
          _this.$Alert("warning", data.msg);
      }
      reject(data.msg);
    });
    // 发起请求
    httpRequest({
      method,
      url: config.hostname + url,
      data,
      responseType: param === "exportFile" ? "blob" : "",
    });
  });
};
