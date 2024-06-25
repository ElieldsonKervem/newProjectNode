import express from "express";
import { categoriesRoutes } from "./routers/cateogories.routers";

const app = express();

// Middleware para parsear o corpo da requisição como JSON, sem isso o retorno é undifined no corpo da requisição
app.use(express.json());

app.use('/categories',categoriesRoutes);


// basicamente uso o express para criar um servidor, middleware e caminho da rota, as rotas para definir pra onde será direcionado minha chamada
app.listen(3333, () => console.log("server is running"));
