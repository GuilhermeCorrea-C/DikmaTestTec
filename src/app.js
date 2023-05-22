const express = require('express');
const sequelize = require('./config/db');
const empresaRouter = require('./routes/routes');
const app = express();

sequelize.sync().then(() => console.log("Banco de Dados iniciado"));

app.use(express.json());
app.use('/api/empresas', empresaRouter);

app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
})