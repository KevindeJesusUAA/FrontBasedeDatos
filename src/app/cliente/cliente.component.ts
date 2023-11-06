import { Component } from '@angular/core';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  nombre: string ="";
  edad: number =0;
  telefono: string ="";
  direccion: string ="";

  constructor(private servicio:DbclientService) { }

  onSubmit(){
    const cliente = {
      tabla: "cliente",
      nombre: this.nombre,
      edad: this.edad,
      telefono: this.telefono,
      direccion: this.direccion
    };

    this.servicio.alta(cliente).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }
}
