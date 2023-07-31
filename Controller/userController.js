
const {UserModel}=require("../model/userModel.js")
exports.home=(req,res)=>{
     res.send("Hello ji This is Vikalp");
}
exports.registerUser=async(req,res)=>{
     const {name,email,password}=req.body;
     console.log(name,email,password);
     try{
          const newdata=new UserModel({name,email,password})
          newdata.save()
          res.status(200).send({msg:"User Registered Successfully "})

     } catch(error){
          res.status(501).send({msg:error.message})
     }
}
exports.loginUser=async(req,res)=>{
     const {email,password}=req.body;
     try{
          const userData=await UserModel.findOne({email});
          if(userData){
               if(userData.password==password){
                    res.status(200).send({msg:"User Login Successfully ,Enjoy"});

               }else{
                    res.status(401).send({msg:"You have Entered wrong password "});

               }
          }else{
               res.status(404).send({msg:"No Account Find associated to this email "})
               
          }
     }catch(error){
          res.status(501).send({msg:error.message})
     }
}