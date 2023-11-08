import { Component, OnInit } from '@angular/core';
import { DbclientService } from '../dbclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent {

  constructor(private servicio: DbclientService, private router:Router) { }

  tabla:string = 'cliente';
  descripcionTabla:any;
  datosTabla:any;

  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla(){
    this.servicio.consultarDatos(this.tabla).then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  editar(registro:any){

    const obj = {
      tabla: this.tabla,
      registro: registro
    }

    this.router.navigate(['/cambiosform'], {state: {obj}});
  }
}
