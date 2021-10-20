import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

// 创建一个实例
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
});

// 请求处理
instance.interceptors.request.use(config => {
    // 1.发送网络请求，在界面中间位置显示Loadding的组件
    // 2.某一些请求要求用户必须携带token，如果没有携带，直接跳到登陆页面
    // 3.params/data序列化操作
    return config;
}, err => {
    // 做一些错误的处理
    console.error(err);
});
// 响应处理
instance.interceptors.response.use(res => {
    return res.data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.error("请求错误");
                break;
            case 401:
                console.error("未授权访问");
                break;
            default:
                console.error("其他错误信息");
                break;
        }
    }
});
export default instance;
