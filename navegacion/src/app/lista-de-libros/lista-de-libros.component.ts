import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestMethod, Request } from '@angular/http';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros: Array<Object>;
  errorHttp:Boolean;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {
    console.log("lista")
    this.http.request('assets/json/libros.json----')
      .subscribe(
        (respuesta: Response) => {this.libros = respuesta.json()},
        (respuesta: Response) => {this.errorHttp = true},
        )
  }

}
