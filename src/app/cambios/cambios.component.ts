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

  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla(){
    /*this.servicio.describirTabla({tabla:this.tabla}).subscribe(
      (datos:any) => {
        console.log(datos);
        this.descripcionTabla = datos;
      }
    );*/

    this.descripcionTabla = [{ id: 'id', nombre: 'int(11)', edad: 'NO', telefono: 'PRI', direccion: null},
    { id: 'nombre', nombre: 'varchar(255)', edad: 'NO', telefono: 'PRI', direccion: null},
    { id: 'edad', nombre: 'int(11)', edad: 'NO', telefono: 'PRI', direccion: null},
    { id: 'telefono', nombre: 'varchar(255)', edad: 'NO', telefono: 'PRI', direccion: null},
    { id: 'direccion', nombre: 'varchar(255)', edad: 'NO', telefono: 'PRI', direccion: null}];
  }

  cambio(campo:any){
    campo = this.descripcionTabla[1];
    console.log(campo);
    this.router.navigate(['/alta']);
  }
}
