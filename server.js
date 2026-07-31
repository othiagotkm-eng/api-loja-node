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
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find((produto) => produto.id === id);

    res.json(produto);
});

app.post("/produtos", (req, res) => {

    const produto = req.body;

    produtos.push(produto);

    res.status(201).json({
        mensagem: "Produto cadastrado com sucesso!",
        produto
    });

});


app.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id); 

   const produto = produtos.find((produto) => produto.id === id);

   produto.nome = req.body.nome;
   produto.preco = req.body.preco;

   res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
     
const id = Number(req.params.id)

const index = produtos. findIndex((produto) => produto.id ===id);

produtos.splice(index,1);

res.json({
    mensagem:"produto removido com sucesso!"
})
});




app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/produtos");
});