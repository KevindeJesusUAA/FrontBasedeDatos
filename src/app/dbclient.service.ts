import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbclientService {

  constructor(private http:HttpClient) { }

  alta(datos:any){
    return this.http.post('http://localhost:3000/alta', datos);
  }

  baja(datos:any){
    return this.http.post('http://localhost:3000/baja', datos);
  }

  cambio(datos:any){
    return this.http.post('http://localhost:3000/cambio', datos);
  }

  consulta(datos:any){
    return this.http.get('http://localhost:3000/consulta', datos);
  }

  // Consultar datos tabla
  consultarDatos(tabla:string){
    switch(tabla){
      case 'cliente':
        return this.http.get('http://localhost:3000/cliente_all').toPromise();
      case 'producto':
        return this.http.get('http://localhost:3000/producto_all').toPromise();
      case 'proveedor':
        return this.http.get('http://localhost:3000/proveedor_all').toPromise();
      case 'empleado':
        return this.http.get('http://localhost:3000/empleado_all').toPromise();
      case 'doctor':
        return this.http.get('http://localhost:3000/doctor_all').toPromise();
      default:
        return this.http.get('http://localhost:3000/cliente_all').toPromise();

    } 
  }
}
