import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorLocal:string = '';

  constructor() { }

  ngOnInit() {
  }

  generarRandom():string{
    return Math.floor( Math.random() * 255 ).toString(16);
  }


  colorHex():string{
    this.colorLocal =  "#"+ this.generarRandom()+ this.generarRandom()+ this.generarRandom();
    return this.colorLocal;
  }

}
