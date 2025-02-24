const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json({mensagem:"Oláaaaa"})
})

const pessoas = ["André", "Alisson", "Adriele"]

pessoas.forEach((pessoa, i) => {
    console.log(pessoa, i)
});

app.listen(5000, ()=>{
    console.log("Iniciou servidor HTTP")
});