const express = require('express');
const sequelize = require('./config/db');
const routerEmpresa = require('./routes/routes');
const routerArea = require('./routes/routeArea');
const app = express();

sequelize.sync().then(() => console.log("Banco de Dados iniciado"));

app.use(express.json());

app.use('/api/empresas', routerEmpresa);
app.use('/api/areas', routerArea);

app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
})