import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent {
  
  selectedOption: string = 'producto';

  tabla:string = "cliente";
  nombre: string ="";
  edad: string = "";
  telefono: string = "";
  direccion: string ="";
  turno: string ="";
  sueldo: number=0;
  existencia: number=0;
  costo: number=0;
  id: number=0;
  marca: string="";


  constructor(private router: Router, private servicio: DbclientService){}

  cargarTabla(){
    //this.router.navigate([this.tabla]);
  }

  altaCliente(){
    const cliente = {
      NombreCliente: this.nombre,
      EdadCliente: this.edad,
      TelefonoCliente: this.telefono,
      DireccionCliente: this.direccion
    };

    this.servicio.altaCliente(cliente).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaEmpleado(){
    const empleado = {
      NombreEmpleado: this.nombre,
      TelefonoEmpleado: this.telefono,
      DireccionEmpleado: this.direccion,
      EdadEmpleado: this.edad,
      SueldoEmpleado: this.sueldo
    };

    this.servicio.altaEmpleado(empleado).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaProveedor(){
    const proveedor = {
      NombreProveedor: this.nombre,
      EdadProveedor: this.edad,
      TelefonoProveedor: this.telefono,
      DireccionProveedor: this.direccion
    };

    this.servicio.altaProveedor(proveedor).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaDoctor(){
    const doctor = {
      NombreDoctor: this.nombre,
      EdadDoctor: this.edad,
      TelefonoDoctor: this.telefono,
      DireccionDoctor: this.direccion,
      TurnoDoctor: this.turno,
      SueldoDoctor: this.sueldo
    };

    this.servicio.altaDoctor(doctor).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaProducto(){
    const producto = {
      NombreProducto: this.nombre,
      MarcaProducto: this.marca,
      CostoProducto: this.costo,
      ExistenciaProducto: this.existencia
    };

    this.servicio.altaProducto(producto).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }  

}