const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  if (
    req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'teste123autoZapPro2023'
  ) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(403);
  }
});

app.post('/', (req, res) => {
  console.log('Mensagem recebida:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Servidor no ar'));
