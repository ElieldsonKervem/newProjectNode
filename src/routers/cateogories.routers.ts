import { Router } from 'express';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/",(request, response) => {
    const { name, description } = request.body;

    if (!name || !description) {
        return response.status(400).json({ error: 'Nome e descrição são necessarios' });
    }

    const category = new Category();

     Object.assign(category,{
        name,
        description,
        created_at:new Date()
     })

    categories.push(category)   

    return response.status(201).json({category});
});

export { categoriesRoutes };
