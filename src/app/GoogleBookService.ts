import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libros } from './modelos/Libros';

@Injectable()
export class GoogleBookService {

 constructor(private cliente: HttpClient) { }

dameTitulos(searchItem: string): Libros[] {
        
        const titulos: Libros[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        
        this.cliente.get(url + searchItem).subscribe( (data: object[]) => {

            // tslint:disable-next-line: prefer-for-of
            for(let i = 0; i < data['items'].length; i++) {
               
                console.log('Titulo: ' + data['items'][i]['volumeInfo']['title']);

                titulos.push(new Libros(data['items'][i]['volumeInfo']['title']));        

               // titulos.push(data['items'][i]['volumeInfo']['title']);
            }

        }
        );
        return titulos;
    }

}