export default () => ({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, 
  // logging: JSON.parse(process.env.DB_LOGGING), //生产模式关闭
  // sync: JSON.parse(process.env.DB_SYNC), //生产模式必须关闭,
});
