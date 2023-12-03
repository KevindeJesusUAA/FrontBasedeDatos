import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbclientService } from '../dbclient.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  idsDoctor: number = 0;
  proveedores: any[] = []; 
 
  
  idsProveedor: number=0;
  
  nombredoctor:String="";
  descripcionTabla:any;
  datosTabla:any;
  aux:any;
  auxDoc:any;
  auxClie:any;
  



  constructor(private router: Router, private servicio: DbclientService){}


  ngOnInit(): void {
    this.cargarProveedores();
  }




  cargarProveedores() {
    this.servicio.consultarDatos("doctor").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Doctores cargados:", this.descripcionTabla);

      this.aux=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.aux.push({
          id: this.datosTabla[i].IdDoctor,
          nombre: this.datosTabla[i].NombreDoctor,
        });
      }
    // Obtener el ID del primer proveedor y establecerlo en idsProveedor
    if (this.aux.length > 0) {
      this.idsDoctor = this.aux[0].id;
      //console.log("hola"+this.aux[0].id);
    }

      //console.log(this.aux);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  //llamamos reporte 1
  reporte1(){
    this.servicio.reporte1("doctor").then((data) => {
     console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
}


