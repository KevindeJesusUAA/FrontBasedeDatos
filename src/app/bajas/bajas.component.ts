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

  //se muestran los datos de la tabla en donde estemos posicionados
  cargarTabla(){
      this.servicio.describirTabla(this.tabla).then((data) => {
        this.descripcionTabla = data;
        this.descripcionTabla = this.descripcionTabla.array;
        console.log(this.descripcionTabla);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  baja(id:number){
    // Asumiendo que tienes una función en tu servicio que realiza la eliminación
    this.servicio.eliminarRegistro(this.tabla, id)
      .then((data) => {
        console.log(data);
        // Verificar si la operación de eliminación fue exitosa
          console.log(`Registro con ID ${id} eliminado con éxito`);
          // Vuelve a cargar la tabla para mostrar los datos actualizados
          this.cargarTabla();  
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

}
