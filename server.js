const express=require("express")
const app=express();

app.get("/user",(req,res)=>{
   res.send("hi this for the docker container")
});


app.listen(3000,()=>{
    console.log("Server running in the port of :3000")
})