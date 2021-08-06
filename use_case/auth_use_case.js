const userReposotry = require('../repository/auth_repository');
var bcrypt=require("bcryptjs");
module.exports={
    login_use_case:async(request)=>{
        var data= await userReposotry.login(request.email,request.password);
        if(data==null){
          return { 
             "success":false,
             "message":"Username atau Password salah",
          }
        }else{
          return {
             "success":true,
             "data":data,
          };
        }
    },
    register_use_case:async(request)=>{
        var user={
            email:request.email,
            name:request.name,
            password: bcrypt.hashSync(request.password,8),
         }
          var data= await userReposotry.register(user);
          if(data==null){
            return {
               "success":false,
               "message":"User sudah terdaftar",
            };
          }
          return {
              "success":true,
              "data":data,
          }
    }
}