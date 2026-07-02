const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Minha primeira API!");
});

app.get("/produtos", (req, res) => {
       res.json([
        {

          id: 1,
          nome:"mouse gamer",
          preco:120

        },
        {
          id: 2,
          nome: "teclado macânico",
          preco: 300

        },
       {
            id: 3,
            nome: "Monitor",
            preco: 1200
        }

       ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});