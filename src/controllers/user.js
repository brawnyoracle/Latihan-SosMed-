const databaseuser = require("../databases/connection")
const {QueryTypes} =  require("sequelize")

const register=async(req,res)=>{
const body=req.body
const query=await databaseuser.query("INSERT INTO user (username,password,nama,alamat,noHP) values (?,?,?,?,?)",{
    replacements: [
        body.username, body.password, body.nama, body.alamat, body.nomorHP
    ]
})
if(query){
    return res.status(200).json({msg: `Sukses insert dengan id ${query[0]}`})
}else{
    return res.status(500).json({msg: `Silahkan coba lagi`})
}
}
const message=async(req,res)=>{

}
const login=async(req,res)=>{
const body=req.body
const query=await databaseuser.query("select * from user where username=? AND password=?",
{
    type: QueryTypes.SELECT,
    replacements: [body.username,body.password]
})
if(query){
    return res.status(201).json({msg: `Berhasil login`})
}else{
    return res.status(400).json({msg: `username atau password tidak benar`})
}
}
const edit=async(req,res)=>{
    const param=req.params
    const body=req.body
    const query=await databaseuser.query("update user set nama=?,alamat=?,nomorHP=?,password=?  where username=?",
    {
        type: QueryTypes.UPDATE,
        replacements: [body.nama,body.alamat,body.nomorHP,body.newpassword,param]
    })

    if(query){
        return res.status(201).json({msg: `profile berhasil diupdate`})
    }
    else{

    }
}
const addf=async(req,res)=>{
    let {username,password,usercari}=req.body
    const lquery=await databaseuser.query("select * from user where username=? AND password=?",
    {
        type: QueryTypes.SELECT,
        replacements: [username,password]
    })
    if(lquery){ 
const query=await databaseuser.query("INSERT INTO friends (adder,friend) values (?,?)",{
    replacements: [
        username, usercari
    ]
})
if(query){
    return res.status(201).json({msg: `Friend added`})
}else{
    return res.status(500).json({msg: `Silahkan coba lagi`})
}
    }
    else{
        return res.status(500).json({msg: `username atau password salah`})
    }

}
const flist=async(req,res)=>{

    const query=await databaseuser.query("select * from user where username=? AND password=?",
{
    type: QueryTypes.SELECT,
    replacements: [body.username,body.password]
})
}
const deletef=async(req,res)=>{

}
module.exports={
    register,login,edit,addf,flist,deletef,message
}