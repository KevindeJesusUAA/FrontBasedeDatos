import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent {

  tabla:string = "cliente";

  constructor(private router: Router){}

  cargarTabla(){
    this.router.navigate([this.tabla]);
  }
}
