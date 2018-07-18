import Loki from 'lokijs'  

// db 配置 初始化 连接及数据查询  
// db 句柄 代表着数据库 有数据库名 -> collection(表) -> rows -> columns 
// sql 连接数据库、查询、返回结果都需要时间 查询是一个典型的异步操作 用Promise 进行封装
export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
})

function databaseInitialize () {
  const notes = db.getCollection(notes) // 数据集合(表)
  if (notes === null ) {
    db.addCollection('notes')
  }
}



export function loadCollection (collection) {
  return new Promise (resolve => {
    db.loadDatabase ({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection (collection)
      resolve(_collection)
    })
  })
}