import { Component, Injectable } from '@angular/core';
import { GoogleBookService } from './GoogleBookService';
import { Libros } from './modelos/Libros';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularGoogleBook';
  ListaLibros:Libros[];
  nombreLibro: string;
  
  constructor(private cliente: GoogleBookService){}

onSubmit(){
  console.log('Criterio de Busqueda:'+this.nombreLibro);
  this.ListaLibros=this.cliente.dameTitulos(this.nombreLibro);
}

}
