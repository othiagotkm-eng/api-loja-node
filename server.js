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

    conexao.query("SELECT * FROM produtos", (error, results) => {

        if (error) {
            return res.status(500).json({
                mensagem: "Erro ao buscar produtos."
            });
        }

        res.json(results);

    });

});

app.get("/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find((produto) => produto.id === id);

    res.json(produto);
});




app.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id); 

   const produto = produtos.find((produto) => produto.id === id);

   produto.nome = req.body.nome;
   produto.preco = req.body.preco;

   res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    conexao.query(
        "DELETE FROM produtos WHERE id = ?",
        [id],
        (error, results) => {

            if (error) {
                return res.status(500).json({
                    mensagem: "Erro ao remover produto."
                });
            }

            res.json({
                mensagem: "Produto removido com sucesso!"
            });

        }
    );

});
        

const conexao = require("./conexao");


app.post("/produtos", (req, res) => {

    const { nome, preco } = req.body;

    conexao.query(
        "INSERT INTO produtos (nome, preco) VALUES (?, ?)",
        [nome, preco],
        (error, results) => {

            console.log("ERRO:", error);
            console.log("RESULTADO:", results);

            if (error) {
                return res.status(500).json(error);
            }

            res.status(201).json(results);
               

        }
    );

});
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/produtos");
});