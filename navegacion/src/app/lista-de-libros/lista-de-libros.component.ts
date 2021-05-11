import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Libro } from '../common/types';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros: any;
  errorHttp = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {
    console.log("lista")
    this.http.get('assets/json/libros.json')
      .subscribe(
        (respuesta) => {this.libros = respuesta},
        (respuesta) => {this.errorHttp = true},
        )
  }

}
