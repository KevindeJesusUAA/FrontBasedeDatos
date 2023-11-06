import { Component } from '@angular/core';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  nombre: string = "";
  marca: string = "";
  costo: number = 0;
  existencia: number = 0;

  constructor(private servicio:DbclientService) { }

  onSubmit(){
    const productos = {
      tabla: "productos",
      nombre: this.nombre,
      marca: this.marca,
      costo: this.costo,
      existencia: this.existencia
    };

    this.servicio.alta(productos).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

}
