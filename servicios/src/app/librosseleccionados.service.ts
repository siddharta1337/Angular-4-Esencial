import { Injectable } from '@angular/core';
import { Libro } from './common/types';

@Injectable()
export class LibrosseleccionadosService {

  libros: Libro[]

  constructor() {
    this.libros = [];
  }

  agregarLibros(_nuevoLibro:Libro) {
    this.libros.push(_nuevoLibro);
  }

  mostrarLibros() {
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return null;
    }
  }

}
