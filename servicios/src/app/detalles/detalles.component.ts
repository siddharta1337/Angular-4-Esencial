import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Libro } from '../common/types';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  libros: Array<Libro>;
  libroId: any
  libroSeleccionado: any


  constructor(private ruta: ActivatedRoute) {
    this.libros = [
      { id: 1, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 2, titulo: 'Frankenstein', autor: 'Mary Shelley', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 3, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 4, titulo: 'Drácula', autor: 'Bram Stoker', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 5, titulo: 'El maravilloso mago de Oz', autor: 'L. Frank Baum', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 6, titulo: 'Don Quijote de la Mancha', autor: ' Miguel de Cervantes Saavedra', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 7, titulo: 'La máquina del tiempo', autor: 'H. G. Wells', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 8, titulo: 'El conde de Montecristo', autor: 'Alexandre Dumas', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 9, titulo: 'Mujercitas', autor: 'Louisa M. Alcott', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
      { id: 10, titulo: 'La isla del tesoro', autor: 'Robert Louis Stevenson', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." }
    ]
  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.libroId = params['libroId'];
      this.libroSeleccionado = this.encontrarLibro();
    });
  }


  filtroPorID(libro: Libro) {
    return libro.id == parseInt(this.libroId, 10);
  }

  encontrarLibro() {
    console.log(this.libroId)
    return this.libros.filter((libro) => libro.id == this.libroId)[0];
  }





//   import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Libro } from '../common/types';

// @Component({
//   selector: 'app-detalles',
//   templateUrl: './detalles.component.html',
//   styleUrls: ['./detalles.component.css']
// })
// export class DetallesComponent implements OnInit {

//   libros: Array<Libro>;
//   libroId: any
//   libroSeleccionado: any


//   constructor(private ruta: ActivatedRoute) {

//     this.libros = [
//       { id: 1, titulo: 'El retrato de Dorian Gray', autor: 'Oscar Wilde', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 2, titulo: 'Frankenstein', autor: 'Mary Shelley', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 3, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 4, titulo: 'Drácula', autor: 'Bram Stoker', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 5, titulo: 'El maravilloso mago de Oz', autor: 'L. Frank Baum', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 6, titulo: 'Don Quijote de la Mancha', autor: ' Miguel de Cervantes Saavedra', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 7, titulo: 'La máquina del tiempo', autor: 'H. G. Wells', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 8, titulo: 'El conde de Montecristo', autor: 'Alexandre Dumas', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 9, titulo: 'Mujercitas', autor: 'Louisa M. Alcott', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
//       { id: 10, titulo: 'La isla del tesoro', autor: 'Robert Louis Stevenson', descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." }
//     ]
//   }

//   ngOnInit() {

//     this.libroId = this.ruta.snapshot.paramMap.get('libroId');
//     this.libroSeleccionado = this.encontrarLibro();

//   }

//   filtroPorID(libro: Libro) {
//     console.log(libro.id, this.libroId)
//     return libro.id == parseInt(this.libroId, 10);
//   }
//   encontrarLibro() {
//     console.log(this.libroId)
//     return this.libros.filter((libro) => libro.id == this.libroId)[0];
//   }

// }




}
