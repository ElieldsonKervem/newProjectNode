import { Router } from 'express';

import { Category } from '../model/Category';
import { CategorieRepository } from '../repositories/categoriesRepository';


const categoriesRepository = new CategorieRepository();
CategorieRepository

const categoriesRoutes = Router();



categoriesRoutes.post("/",(request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExist = categoriesRepository.findByname(name)

    if(categoryAlreadyExist){
        return response.status(400).json({error: "Catefory already exist!"})
    }

    if (!name || !description) {
        return response.status(400).json({ error: 'Nome e descrição são necessarios' });
    }

     categoriesRepository.create({name,description})

    return response.status(201).send();
});

categoriesRoutes.get("/",(request,response)=>{
     const all = categoriesRepository.list();

     return response.json(all)
})

export { categoriesRoutes };
