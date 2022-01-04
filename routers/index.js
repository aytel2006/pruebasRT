const router = require("./routerProd");

function saludosApi(app){
   app.use("/saludos",router);
   /*
   app.use("/saludos",(req,res)=>{
      console.log("Hola");
   });
   */ 
}

module.exports=saludosApi;