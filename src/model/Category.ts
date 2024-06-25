import { v4 as uuidv4 } from 'uuid';

class Category {
    id?:string;
    name:string;
    description:string;
    created_at = new Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

//classe que define o molde da Category com interface para 

export {Category}