import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbclientService } from '../dbclient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  idProveedor: number = 0;
  proveedores: any[] = []; 
  
  selectedOption: string = 'pedido';

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
  idsProveedor: number=0;
  marca: string="";
  statusPedido: string="";
  fechasPedido: Date | null = null;
  totalPedido:number=0;

  fechasConsulta: Date | null = null;
  consultarPrecio:number=0;
  idsCliente: number=0;
  idsDoctor: number=0;

  descripcionTabla:any;
  datosTabla:any;
  aux:any;
  auxDoc:any;
  auxClie:any;



  constructor(private router: Router, private servicio: DbclientService){}


  ngOnInit(): void {
    this.cargarProveedores();
  }

  cambioSelect(){
    switch (this.selectedOption) {
      case 'pedido':
        this.cargarProveedores();
        break;

      case 'consultar':
        this.cargarDoctor();
        this.cargarClientes();
        break;

      default:
        break;
    }
  }

  altaCliente(){
    if(this.validaTelefono() && this.validaNombre()){
      const cliente = {
        NombreCliente: this.nombre,
        EdadCliente: this.edad,
        TelefonoCliente: this.telefono,
        DireccionCliente: this.direccion
      };

      this.servicio.altaCliente(cliente).subscribe(
        (response:any)=>{
          Swal.fire('¡Alta exitosa!', 'El cliente ha sido dado de alta correctamente.', 'success');
          console.log(response);
        },
        (error:any)=>{
          Swal.fire('¡Error!', 'Hubo un problema al dar de alta al cliente.', 'error');
          console.log(error);
        }
      );
      
    }else
      Swal.fire('¡Error!', 'Ingresa Correctamente los datos.', 'error');
      
  }
  

  altaEmpleado(){
    if(this.validaNombre() && this.validaTelefono()){
      const empleado = {
        NombreEmpleado: this.nombre,
        TelefonoEmpleado: this.telefono,
        DireccionEmpleado: this.direccion,
        EdadEmpleado: this.edad,
        SueldoEmpleado: this.sueldo
      };

      this.servicio.altaEmpleado(empleado).subscribe(
        (response:any)=>{
          Swal.fire('¡Alta exitosa!', 'El empleado ha sido dado de alta correctamente.', 'success');
          console.log(response);
        },
        (error:any)=>{
          Swal.fire('¡Error!', 'Hubo un problema al dar de alta al empleado.', 'error');
          console.log(error);
        }
      );
    }else{
      Swal.fire('¡Error!', 'Ingresa Correctamente los datos.', 'error');
    }
  }

  altaProveedor(){
    if(this.validaNombre() && this.validaTelefono()){
      const proveedor = {
        NombreProveedor: this.nombre,
        EdadProveedor: this.edad,
        TelefonoProveedor: this.telefono,
        DireccionProveedor: this.direccion
      };

      this.servicio.altaProveedor(proveedor).subscribe(
        (response:any)=>{
          Swal.fire('¡Alta exitosa!', 'El proveedor ha sido dado de alta correctamente.', 'success');
          console.log(response);
        },
        (error:any)=>{
          Swal.fire('¡Error!', 'Hubo un problema al dar de alta al proveedor.', 'error');
          console.log(error);
        }
      );
      
    }else{
      Swal.fire('¡Error!', 'Ingresa Correctamente los datos.', 'error');
    }
  }

  altaDoctor(){
    if(this.validaNombre() && this.validaTelefono() &&
      this.validaTurno()){
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
          Swal.fire('¡Alta exitosa!', 'El doctor ha sido dado de alta correctamente.', 'success');
          console.log(response);
        },
        (error:any)=>{
          Swal.fire('¡Error!', 'Hubo un problema al dar de alta al doctor.', 'error');
          console.log(error);
        }
      );
    }else{
      Swal.fire('¡Error!', 'Ingresa Correctamente los datos.', 'error');
    }
    
  }

  altaProducto(){
    if(this.validaNombre() && this.validaMarca()){
      const producto = {
        NombreProducto: this.nombre,
        MarcaProducto: this.marca,
        CostoProducto: this.costo,
        ExistenciaProducto: this.existencia
      };

      this.servicio.altaProducto(producto).subscribe(
        (response:any)=>{
          Swal.fire('¡Alta exitosa!', 'El producto ha sido dado de alta correctamente.', 'success');
          console.log(response);
        },
        (error:any)=>{
          Swal.fire('¡Error!', 'Hubo un problema al dar de alta al producto.', 'error');
          console.log(error);
        }
      );
    }else{
      Swal.fire('¡Error!', 'Ingresa Correctamente los datos.', 'error');
    }
  }  


  validaTelefono():boolean{
    if(/^[0-9]*$/.test(this.telefono))
      return true;
    else
      return false;
  }

  validaNombre():boolean{
    if(/^[a-zA-Z\s]*$/.test(this.nombre))
      return true;
    else
      return false;
  }

  validaMarca():boolean{
    if(/^[a-zA-Z\s]*$/.test(this.marca))
      return true;
    else
      return false;
  }

  validaTurno():boolean{
    if(/^(matutino|vespertino)$/i.test(this.turno))
      return true;
    else
      return false;
  }  

  /*cargarProveedores() {
  this.servicio.consultarProveedores().then(
    (response: any) => {
      if (Array.isArray(response) && response.length > 0) {
        this.proveedores = response;
        this.idProveedor = this.proveedores[0].IdProveedor;
        console.log("Proveedores cargados:", this.proveedores);
      } else {
        this.proveedores = [];
        // Puedes establecer idProveedor en algún valor predeterminado o dejarlo como está.
        // this.idProveedor = 0; // O cualquier otro valor predeterminado
        console.log("No hay proveedores disponibles.");
      }
    },
    (error: any) => {
      console.log("Error al cargar proveedores:", error);
    }
  );*/

  cargarProveedores() {
    this.servicio.consultarDatos("proveedor").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Proveedores cargados:", this.descripcionTabla);

      this.aux=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.aux.push({
          id: this.datosTabla[i].IdProveedor,
          nombre: this.datosTabla[i].NombreProveedor,
        });
      }
    // Obtener el ID del primer proveedor y establecerlo en idsProveedor
    if (this.aux.length > 0) {
      this.idsProveedor = this.aux[0].id;
    }

      console.log(this.aux);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  cargarNombresProveedores() {
    this.servicio.consultarDatos("proveedor").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Proveedores cargados:", this.descripcionTabla);

      this.aux=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.aux.push(this.datosTabla[i].NombreProveedor);
      }
      console.log(this.aux);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  

  cargarClientes() {
    this.servicio.consultarDatos("cliente").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Clientes cargados:", this.descripcionTabla);

      this.auxClie=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.auxClie.push({
          id: this.datosTabla[i].IdCliente,
          nombre: this.datosTabla[i].NombreCliente,
        });
      }

      if (this.aux.length > 0) {
        this.idsCliente = this.auxClie[0].id;
      }

      console.log(this.auxClie);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  cargarDoctor() {
    this.servicio.consultarDatos("doctor").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Doctores cargados:", this.descripcionTabla);

      this.auxDoc=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.auxDoc.push({
          id: this.datosTabla[i].IdDoctor,
          nombre: this.datosTabla[i].NombreDoctor,
        });
      }

    if (this.aux.length > 0) {
      this.idsDoctor = this.auxDoc[0].id;
    }

      console.log(this.auxDoc);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  altaPedido(){
    const pedido = {
      TotalPedido: this.totalPedido,
      FechasPedido: this.fechasPedido,
      Proveedor_IdProveedor: this.idsProveedor,
      StatusPedido: this.statusPedido
    };

    this.servicio.altaPedido(pedido).subscribe(
      (response:any)=>{
        Swal.fire('¡Alta exitosa!', 'El pedido ha sido dado de alta correctamente.', 'success');
        console.log(response);
      },
      (error:any)=>{
        Swal.fire('¡Error!', 'Hubo un problema al dar de alta al pedido.', 'error');
        console.log(error);
      }
    );
  }

  altaConsulta(){
    const consulta = {
      Cliente_IdCliente: this.idsCliente,
      Doctor_IdDoctor: this.idsDoctor,
      ConsultarPrecio: this.consultarPrecio,
      ConsultarFecha: this.fechasConsulta,
    };

    console.log(consulta);
    this.servicio.altaConsulta(consulta).subscribe(
      (response:any)=>{
        Swal.fire('¡Alta exitosa!', 'La consulta ha sido dado de alta correctamente.', 'success');
        console.log(response);
      },
      (error:any)=>{
        Swal.fire('¡Error!', 'Hubo un problema al dar de alta la consulta.', 'error');
        console.log(error);
      }
    );
  }
  

}