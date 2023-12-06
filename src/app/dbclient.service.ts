import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbclientService {

  constructor(private http:HttpClient) { }

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
  altaPedido(datos:any){
    return this.http.post('http://localhost:3000/pedido_new', datos)
  }
  altaConsulta(datos:any){
    return this.http.post('http://localhost:3000/consulta_new', datos)
  }
  baja(datos:any){
    return this.http.post('http://localhost:3000/baja', datos);
  }


  cambio(datos:any){
    // Recupera npmbre de la tabla
    let tabla = datos.tabla;
    // Elimina el nombre de la tabla del objeto
    delete datos.tabla;
    datos = datos.registro;
    
    
    switch(tabla){
      case 'cliente':
        return this.http.put('http://localhost:3000/cliente_edit', datos).toPromise();
      case 'producto':
        return this.http.put('http://localhost:3000/producto_edit', datos).toPromise();
      case 'proveedor':
        return this.http.put('http://localhost:3000/proveedor_edit', datos).toPromise();
      case 'empleado':
        return this.http.put('http://localhost:3000/empleado_edit', datos).toPromise();
      default:
        return this.http.put('http://localhost:3000/doctor_edit', datos).toPromise();
    }

  }

  consulta(datos:any){
    return this.http.get('http://localhost:3000/consulta', datos);
  }
  actualiza(datos:any){
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
      case 'pedido':
        return this.http.get('http://localhost:3000/pedido_all').toPromise();
      case 'consulta':
        return this.http.get('http://localhost:3000/consulta_all').toPromise();
      case 'doctor':
        return this.http.get('http://localhost:3000/doctor_all').toPromise();
      default:
        return this.http.get('http://localhost:3000/doctor_all').toPromise();
    } 
}
CrearVista1(){
 
 
  return this.http.get(`http://localhost:3000/reportegene`).toPromise();
}
crearVista2(){
  //reportegenev2
  return this.http.get(`http://localhost:3000/reportegenev2`).toPromise();
}
crearVista3(){
  return this.http.get(`http://localhost:3000/sumvi3`).toPromise();
}
//suma count Vista1
sumvi(){
  return this.http.get(`http://localhost:3000/sumvi1`).toPromise();
}
llamarv3(){
  //sumvi3l
  return this.http.get(`http://localhost:3000/sumvi3l`).toPromise();
}
LlmarVista1(){
  return this.http.get(`http://localhost:3000/reportegenem`).toPromise();
}
llamarv2(){
  //sumvi1l
  return this.http.get(`http://localhost:3000/sumvi1l`).toPromise();
}
rooll(){
  //Roll
  return this.http.get(`http://localhost:3000/Roll`).toPromise();
}

//pro1
pro1(){
  //Roll
  return this.http.get(`http://localhost:3000/pro1`).toPromise();
}
sueldo(){
  return this.http.get(`http://localhost:3000/sueldo`).toPromise();
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

  consultarProveedores() {
    return this.http.get('http://localhost:3000/proveedor_all').toPromise().then(
      (response) => {
        console.log("Respuesta del servidor:", response);
        return response;
      },
      (error) => {
        console.error("Error en la solicitud:", error);
        throw error;
      }
    );
  }

  calcular_precio_total(datos:any){
    return this.http.post('http://localhost:3000/function1', datos).toPromise();
  }
}
