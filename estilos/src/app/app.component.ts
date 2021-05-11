import { Component , Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  paises: Array<any>;
  antiguo:any;

  constructor( private renderer:Renderer2) {
    this.antiguo = null
    this.paises = [
      { nombre: "Argentina", id: 1 },
      { nombre: "Estados Unidos", id: 2 },
      { nombre: "Brasil", id: 3 },
      { nombre: "Canadá", id: 4 },
      { nombre: "México", id: 5 },
      { nombre: "Perú", id: 6 },
      { nombre: "Colombia", id: 1 },
      { nombre: "Bolivia", id: 1 },
      { nombre: "Venezuela", id: 1 },
      { nombre: "Chile", id: 1 },
      { nombre: "Paraguay", id: 1 },
      { nombre: "Ecuador", id: 1 },
      { nombre: "Guyana", id: 1 },
      { nombre: "Uruguay", id: 1 }
    ];
  }

  mostrarActivo(elemento:HTMLElement , boton:HTMLElement){

    if(this.antiguo){
      this.renderer.removeClass(this.antiguo, 'destacado');
    }


    this.renderer.addClass( elemento , 'destacado' );

    let nuevoElemento = this.renderer.createElement("span");
    this.renderer.setProperty(nuevoElemento, "innerHTML" , " ✅ ");

    this.renderer.appendChild( elemento , nuevoElemento );

    this.renderer.setAttribute(boton, "value", "A viajar ✈️");
    this.renderer.removeAttribute(boton, "disabled");

    this.antiguo = elemento;
  }

}
