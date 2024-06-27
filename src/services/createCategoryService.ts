//um modulo deve ter um tipo de responsabilidade
 //padrão execute

import { CategorieRepository } from "../repositories/categoriesRepository";



//criar uma interface pra se comunicar entre services

interface IRequest{
    name:string;
    description:string;
}

class CreateCategoryService {
    constructor(private categoriesRepository:CategorieRepository){
        
    }
  execute({description,name}:IRequest):void{

    


    const categoryAlreadyExist = this.categoriesRepository.findByname(name)

    if(categoryAlreadyExist){
       throw new Error("Category already exist")
    }

    if (!name || !description) {
       throw new Error ('For it´s works you need pass name or description')
    }
    //verificar se exister nome ou descrição

     this.categoriesRepository.create({name,description})

  }
}


export {CreateCategoryService}