// 系统环境变量配置
const config = {
  development: {
    env: "dev",
    hostname: "/api",
    // hostname: 'https://cloud.elianzhixiao.com/gateway',
    // hostname: 'https://temp.elianzhixiao.com/gateway',
  },
  testing: {
    env: "test",
    hostname: "https://temp.elianzhixiao.com/gateway",
  },
  prod: {
    env: "prod",
    hostname: "https://cloud.elianzhixiao.com/gateway",
  },
};
console.log(config[process.env.NODE_ENV], "aaa");
export default config[process.env.NODE_ENV];
