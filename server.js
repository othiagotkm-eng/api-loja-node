const express = require("express");

const app = express();
const produtos = [
    {
        id: 1,
        nome: "Mouse Gamer",
        preco: 120
    },
    {
        id: 2,
        nome: "Teclado Mecânico",
        preco: 300
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 1200
    }
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Minha primeiraaa API!");
});

app.get("/produtos", (req, res) => {
       res.json(produtos)([
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

app.post("/produtos", (req, res) => {

    const produto = req.body;

    produtos.push(produto);

    res.status(201).json({
        mensagem: "Produto cadastrado com sucesso!",
        produto
    });

});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/produtos");
});