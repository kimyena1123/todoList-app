'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

// sequelize 객체 선언시 매개변수로 "DB명, 사용자, 비번, 설정정보 전체" 정보를 받음
const sequelize = new Sequelize( // 위에서 sequelize를 불러온 Sequelize 객체. 그리고 그 객체를 담는 sequelize 변수.
  config.database,
  config.username,
  config.password,
  config
);


db.sequelize = sequelize; //sequelize는 위 const sequelize 의미.
db.Sequelize = Sequelize; //Sequelize는 위 new Sequelize 의미.
// db = {
//   "sequelize" : sequelize,
//   "Sequelize" : Sequelize
// } 식으로 저장된다.

db.Todo = require('./Todo')(sequelize, Sequelize); //const Todo = function(Sequelize, DataTypes){
// db = {
//   "sequelize" : sequelize,
//   "Sequelize" : Sequelize,
//   "Todo" : model // Todo.js에서 model을 return하고 있음. 즉, model = require('./Todo')(sequelize, Sequelize);
// }
// =>  model : models/Todo.js에서 Todo가 반환하고 있는 model이 db.Todo에 들어간다.


//db라는 객체를 내보낸다.
// db = {
//   "sequelize" : sequelize,
//   "Sequelize" : Sequelize,
//   "Todo" : model // Todo.js에서 model을 return하고 있음. 즉, model = require('./Todo')(sequelize, Sequelize);
// }
module.exports = db;
