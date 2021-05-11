import { Component, OnInit } from '@angular/core';
import { Libro } from '../common/types';

import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  mostrarLista:boolean = false

  constructor(public librosSeleccionados:LibrosseleccionadosService) { }

  ngOnInit() {
  }

}
