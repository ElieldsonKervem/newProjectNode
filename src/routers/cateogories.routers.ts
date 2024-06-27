import { Router } from 'express';
//classe rotas que existe dentro do express

import { Category } from '../model/Category';
import { CategorieRepository } from '../repositories/categoriesRepository';
import { CreateCategoryService } from '../services/createCategoryService';


const categoriesRepository = new CategorieRepository();


const categoriesRoutes = Router();
//router server para criar rotas de diferentes funcionalidade
const categories: Category[] = [];

//array de Category que é do tipo Category ts

categoriesRoutes.post("/",(request, response) => {
    const { name, description } = request.body;
      
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name,description});
    
    
    return response.status(201).send();
});

categoriesRoutes.get("/",(request,response)=>{
     const all = categoriesRepository.list();

     return response.json(all)
})

export { categoriesRoutes };
