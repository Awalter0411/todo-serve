const localconfig = {
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'lyxa1105',
  database: 'todo',
}

const productConfig = {
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'lyxa1105',
  database: 'todo',
}

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localconfig

export default config