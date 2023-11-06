import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbclientService {

  constructor(private http:HttpClient) { }

  alta(datos:any){
    return this.http.post('http://localhost:3000/alta', datos);
  }

  altaCliente(datos:any){
    return this.http.post('http://localhost:3000/cliente_new', datos)
  }
  altaEmpleado(datos:any){
    return this.http.post('http://localhost:3000/empleado_new', datos)
  }
  altaProveedor(datos:any){
    return this.http.post('http://localhost:3000/proveedor_new', datos)
  }
  altaDoctor(datos:any){
    return this.http.post('http://localhost:3000/doctor_new', datos)
  }
  altaProducto(datos:any){
    return this.http.post('http://localhost:3000/producto_new', datos)
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

  describirTabla(datos:any){
    return this.http.get('http://localhost:3000/describirTabla', datos);
  }
}
