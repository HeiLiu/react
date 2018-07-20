const Sequelize = require('sequelize') 
 // 数据库的映射对象
const sequelize = new Sequelize('antd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch( err => {
    console.err('Unable to connect to the database: ', err)
  })

module.exports = sequelize
