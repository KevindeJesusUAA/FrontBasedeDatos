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
