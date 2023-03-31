const express=require("express");
const {connectToMongo}=require("./db");
const UserSchema=require("./userschema");
const bcrypt=require("bcrypt");
const cors=require("cors")
const app=express();
app.use(cors({
    origin:"*"
}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send({msg:"Welcome"})
});
app.patch("/changepassword",async(req,res)=>{
    // let email="noobgmr63@gmail.com"
    let {userId,password}=req.body;
   
    try {
        bcrypt.hash(password,10,async(err,hashPassword)=>{
            if(err){
                console.log("some error");
            }
            else{
                let payload={
                    password:hashPassword
                }
                await UserSchema.findByIdAndUpdate({_id:userId},payload)
                res.send({msg:"Password has been updated successfully"});
            }
        })
        
    } catch (error) {
        res.send(error);
    }
})


app.listen(4000, async()=>{
    try{
        await connectToMongo();
        console.log(`running at 4000`)
    } catch(error){
        console.log("some error while listening")
    }
})