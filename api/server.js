const express = require("express");

const TwitterController = require("./twiiter_stream");
const KafkaSdk = require("./kafkasdk");
const app = express();
app.use(express.json());

app.get("/test", async (req, res) => {
  // criando produto
  KafkaSdk.newMessage([{ value: "nova mensagem" }]);
  return res.status(200).send();
});

app.post("/topic", (req, res) => {
  const { topic } = req.body;
  TwitterController.setTopic(topic);
  return res.status(200).send();
});

app.listen(3535, () => {
  console.log("servidor rodando na porta 3535");
});
