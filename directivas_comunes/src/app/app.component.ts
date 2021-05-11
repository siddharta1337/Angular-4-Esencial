import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor1:boolean;
  valor2:boolean;
  color:string;
  diasSemana:any

  constructor(){

    this.valor1=  false
    this.valor2 = true
    this.color ='';

    }
}
