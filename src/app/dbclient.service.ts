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

  eliminarRegistro(tabla: string, id: number) {
    let endpoint: string;
    endpoint="";
  
    // Determina la ruta del endpoint basada en el nombre de la tabla
    switch (tabla) {
      case 'producto':
        endpoint = `http://localhost:3000/producto/${id}`;
        break;
      case 'cliente':
        endpoint = `http://localhost:3000/cliente/${id}`;
        break;
      case 'proveedor':
        endpoint = `http://localhost:3000/proveedor/${id}`;
        break;
      case 'empleado':
        endpoint = `http://localhost:3000/empleado/${id}`;
        break;
      case 'doctor':
        endpoint = `http://localhost:3000/doctor/${id}`;
        break;
      default:
        // Manejar el caso por defecto según tus necesidades
        break;
    }
  
    // Realiza una solicitud HTTP DELETE para eliminar el registro
    return this.http.delete(endpoint).toPromise();
  }
  
  describirTabla(tabla:string){
    switch(tabla){
      case 'producto':
        return this.http.get('http://localhost:3000/producto_all').toPromise();
              case 'cliente':
              return this.http.get('http://localhost:3000/cliente_all').toPromise();
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
