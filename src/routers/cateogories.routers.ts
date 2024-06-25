import { Router } from 'express';
//classe rotas que existe dentro do express

import { Category } from '../model/Category';

const categoriesRoutes = Router();
//router server para criar rotas de diferentes funcionalidade
const categories: Category[] = [];

//array de Category que é do tipo Category ts

categoriesRoutes.post("/",(request, response) => {
    const { name, description } = request.body;

    if (!name || !description) {
        return response.status(400).json({ error: 'Nome e descrição são necessarios' });
    }
    //verificar se exister nome ou descrição

    const category = new Category();

     Object.assign(category,{
        name,
        description,
        created_at:new Date()
     })

     //atribui ai Category array valores de nome e descrição e cria uma data
 
    categories.push(category)   

    return response.status(201).json({category});
});

export { categoriesRoutes };
