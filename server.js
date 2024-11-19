import express from "express";

const app = express();
app.listen(3001, () => {
  console.log("Servidor Escutando");
});

app.get("/api", (req, res) => {
  res.status(200).send("Ola, mundo!");
});
