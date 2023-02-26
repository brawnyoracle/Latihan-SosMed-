const Sequelize=require("sequelize")
const config=require("../config/config.json")

const host=config.koneksi.host
const port=config.koneksi.port
const username=config.koneksi.username
const password=config.koneksi.password
const database=config.koneksi.database
const dialect=config.koneksi.dialect

const connectionBuku=new Sequelize(database,username,password,{
    host:host,
    port:port,
    dialect:dialect
    
})
module.exports=connectionBuku