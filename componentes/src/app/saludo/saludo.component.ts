import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() colorNombre:string = '';

  constructor() {}

  ngOnInit() {
  }

}
