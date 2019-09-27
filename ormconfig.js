

let exportObj = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'wukong',
  password: 'viwave123',
  database: 'nestGo',
  entities: [
      //__dirname + '/**/*.entity{.ts,.js}',
      __dirname + './src/repository/entity/*.entity{.ts,.js}',
  ],
  synchronize: true,
}

if (process.env.NODE_ENV === "production"){ // development
  exportObj = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'wukong',
    password: 'viwave123',
    database: 'nestGo',
    entities: [
      __dirname + './src/repository/entity/*.entity{.ts,.js}',
    ],
    synchronize: true,
  }
}
module.exports = exportObj