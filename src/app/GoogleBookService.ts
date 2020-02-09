import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleBookService {

 constructor(private cliente: HttpClient) { }

dameTitulos(searchItem: string): string[] {
        const volumes: object[] = [];
        const titulos: string[] = [];
        const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.cliente.get(url + searchItem).subscribe( (data: object[]) => {

            // tslint:disable-next-line: prefer-for-of
            for(let i = 0; i < data['items'].length; i++) {
                console.log('Volumne Info:' + data['items'][i]['volumeInfo']);
                console.log('Titulo: ' + data['items'][i]['volumeInfo']['title']);
                
               // volumes.push(data['items'][i]['volumeInfo']);
               // titulos.push(data['items'][i]['volumeInfo']['title']);
            }

            // for (let i = 0; i < volumes.length; i++) {
             //   titulos.push(volumes[i]['title']);
            // }
        }
        );
        return titulos;
    }

}