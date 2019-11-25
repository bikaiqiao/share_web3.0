import axios from 'axios';
import Cookies from "js-cookie"
axios.defaults.timeout = 5000; //设置请求时间
axios.defaults.baseURL = "http://localhost:8080/api"; //设置默认接口地址
const URL = "http://192.168.1.115:8888/api/";
/* 
拦截器
*/
axios.interceptors.request.use(
        config => {
            config.headers.Authorization = 'Bearer ' + Cookies.get("token");
            window.console.log(config)
            return config;
        },
        error => {
            // 请求错误处理
            Promise.reject(error);
        }
    )
    /**
     * 封装get方法
     * @param url
     * @param data
     * @returns {Promise}
     */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(URL + url, {
                data: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function getWithURL(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(URL + url, {
                data: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function getWithToken(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(URL + url, {
                data: params
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(URL + url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
export function postWithURL(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(URL + url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
export function postWithToken(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(URL + url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}