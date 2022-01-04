const express = require("express");
const port = 3000;
const saludosApi = require("./routers")

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Estas en el HOME</h1>")
});

saludosApi(app);

app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`);
});