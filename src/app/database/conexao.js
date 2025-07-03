import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:"Mario@16",
    database:'db_new'
})

conexao.connect()

export default conexao