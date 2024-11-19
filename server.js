import express from "express";
import cors from "cors";

const posts = [
  {
    id: 1,
    descricao: "Imagem 01 - Descrição da Imagem 01",
    imagem: "https://placehold.co/600x400", 
  },
  {
    id: 2,
    descricao: "Imagem 02 - Descrição da Imagem 02",
    imagem: "https://placehold.co/600x400", 
  },
  {
    id: 3,
    descricao: "Imagem 03 - Descrição da Imagem 03",
    imagem: "https://placehold.co/600x400", 
  },
  {
    id: 4,
    descricao: "Imagem 04 - Descrição da Imagem 04",
    imagem: "https://placehold.co/600x400", 
  },
  {
    id: 5,
    descricao: "Imagem 05 - Descrição da Imagem 05",
    imagem: "https://placehold.co/600x400", 
  },
  {
    id: 6,
    descricao: "Imagem 06 - Descrição da Imagem 06",
    imagem: "https://placehold.co/600x400", 
  }
];

const app = express();
app.use(express.json());
// Configurar o CORS
app.use(cors({
  origin: "*" 
}));

// Middleware para entender dados enviados via URL-encoded
app.use(express.urlencoded({ extended: true }));


app.listen(3001, () => {
  console.log("Servidor Escutando");
});

app.get("/api", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/post", (req, res) => {
  res.status(200).json(posts[0]);
});

function buscarPostPorId(id){
  return posts.findIndex((post) =>{
    return post.id === Number(id);
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});

// Outra maneira de passar JSON

// app.get("/posts2", (req, res) => {
//   res.status(200).send(JSON.stringify(posts));
// });