import { Component, Injectable } from '@angular/core';
import { GoogleBookService } from './GoogleBookService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularGoogleBook';
  nombreLibro: string;
  
  constructor(private cliente: GoogleBookService){}

onSubmit(){
  console.log('Criterio de Busqueda:'+this.nombreLibro);
  this.cliente.dameTitulos(this.nombreLibro);
}

}
