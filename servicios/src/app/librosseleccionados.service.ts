import { Injectable } from '@angular/core';

@Injectable()
export class LibrosseleccionadosService {

  libros: Array<Object>

  constructor() {
    this.libros = [];
  }

  agregarLibros(_nuevoLibro) {
    this.libros.push(_nuevoLibro);
  }
  mostrarLibros() {
    if (this.libros.length > 0) {
      return this.libros;
    } else {
      return false;
    }
  }

}
