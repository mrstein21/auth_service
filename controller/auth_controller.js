authUseCase=require("../use_case/auth_use_case");

module.exports={
    login:async(req,res)=>{
        try{
            var response=await authUseCase.login_use_case(req.body);
            return res.status(200).json(response);
        }catch(err){
           return res.status(500).json({
             "success":false,
             "message":"Terjadi kesalahan pada server",
             "error":err.toString()
           });
        }
    },
    register:async(req,res)=>{
        try{
            var response=await authUseCase.register_use_case(req.body);
            return res.status(200).json(response);
        }catch(err){
           return res.status(500).json({
             "success":false,
             "message":"Terjadi kesalahan pada server"
           });
        }
    }
}