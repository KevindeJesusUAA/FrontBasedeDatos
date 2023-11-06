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
  edad: number =0;
  telefono: string ="";
  direccion: string ="";

  constructor(private router: Router, private servicio: DbclientService){}

  cargarTabla(){
    //this.router.navigate([this.tabla]);
  }

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
