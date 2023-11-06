import { Component, OnInit } from '@angular/core';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent implements OnInit{

  constructor(private servicio: DbclientService) { }

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

  baja(campo:string){
    /*this.servicio.baja({tabla:this.tabla, campo:campo}).subscribe(
      (datos:any) => {
        console.log(datos);
      }
    );*/
    
  }

  

}
