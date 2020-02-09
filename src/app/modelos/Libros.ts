export class Libros {
    title: string;
  
  constructor(pNombre:string){
    this.title=pNombre;
  }
   getNombre():string{
     return this.title;
   }

  }

