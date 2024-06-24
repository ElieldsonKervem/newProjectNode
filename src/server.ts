import express from "express";
import { categoriesRoutes } from "./routers/cateogories.routers";

const app = express();

// Middleware para parsear o corpo da requisição como JSON, sem isso o retorno é undifined no corpo da requisição
app.use(express.json());

app.use('/categories',categoriesRoutes);

app.listen(3333, () => console.log("server is running"));
