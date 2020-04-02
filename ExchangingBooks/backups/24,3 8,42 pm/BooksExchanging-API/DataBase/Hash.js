let bcrypt=require("bcryptjs");
module.exports.hashPassword =function (password,num,callback){
    bcrypt.hash(password,num,(err,result)=>{
    callback(err,result)
    })
}
module.exports.comparePassword=function(password,hash_password,callback){
    bcrypt.compare(password,hash_password,(err,result)=>{
    callback(err,result)
    })

}
module.exports.hashPasswordUser=function (password,num,callback){
    bcrypt.hash(password,num,(err,result)=>{
    callback(err,result)
    })
}

module.exports.comparePasswordUser=function(password,hash_password,callback){
    bcrypt.compare(password,hash_password,(err,result)=>{
    callback(err,result)
    })

}
