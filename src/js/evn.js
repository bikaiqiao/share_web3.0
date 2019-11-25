//根据不同的环境更改不同的baseUrl
//暂时不知道开发者环境和生产环境有何区别，文件暂时搁浅
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = '/api';

} else if (process.env.NODE_ENV == 'production') {
    //baseUrl = '测试地址';
    //baseUrl = '预发布地址';
    baseUrl = "http://localhost:8080";
}

export {
    baseUrl, //导出baseUrl
}