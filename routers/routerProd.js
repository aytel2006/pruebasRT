const express = require("express");
const router = express.Router();

router.get("/saludo1",(req,res)=>{
    res.send("Buenos dias");
})

router.get("/saludo2",(req,res)=>{
    try{
      res.send("Buenas tardes");
    }catch(err){
      console.error("Error al saludar "+err);  
    }
})

router.get("/saludo3",(req,res)=>{
    try{
        res.send("Buenas noches")
    }catch(err){
        console.error("Tratando de saludar en 3 "+err);
    }
})

router.get("/universal",(req,res)=>{
    const {comp} =req.query
    if(comp){
       res.send(`Hola ${comp}`); 
    }else{
       res.send('Hola');
    }
     
})

module.exports=router;