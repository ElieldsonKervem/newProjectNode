//categories são usados pra manipular banco de dados

import { Category } from "../model/Category"


interface ICreateCategoryDTO{
    name:string;
    description:string;
}

class CategorieRepository {
  private categories: Category [];

  constructor(){
    this.categories = [];
  }

  create({description,name}:ICreateCategoryDTO):void{
    const category = new Category();

    Object.assign(category,{
       name,
       description,
       created_at:new Date()
    })

   this.categories.push(category) 
  }
  list():Category[]{
    return this.categories
  }

  findByname(name:string):Category{
     const category = this.categories.find(category => category.name ===name)

     return category


  }
}

export {CategorieRepository}