import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbclientService } from '../dbclient.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { flatMap } from 'rxjs';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  idsDoctor: String = "";
  proveedores: any[] = []; 
  muestra:boolean=false;
  titulo:String="";
  totalres:number=0;
  totalpre:number=0;
  idsProveedor: number=0;
  tt:boolean=false;
  tp:boolean=false;
  muestra2:boolean=false;

  nombredoctor:String="";
  descripcionTabla:any;
  datosTabla:any;
  auxdatos:any;
  otros:any;
  aux:any;
  auxDoc:any;
  auxClie:any;
  tabla:string = 'cliente';
  procentaje:number=0;
  cantidad:number=0;
  
  



  constructor(private router: Router, private servicio: DbclientService){}


  ngOnInit(): void {
    this.cargarProveedores();
  }
  pro2(){
    console.log(this.procentaje+ ""+this.idsDoctor)
    
  }




  cargarProveedores() {
    this.servicio.consultarDatos("producto").then((data) => {
      this.datosTabla = data;
      this.datosTabla = this.datosTabla.array;
      this.descripcionTabla = Object.keys(this.datosTabla[0]);
      console.log("Doctores cargados:", this.descripcionTabla);

      this.aux=[];
      for(let i = 0; i < this.datosTabla.length; i++){
        this.aux.push({
          id: this.datosTabla[i].NombreProducto,
          nombre: this.datosTabla[i].NombreProducto,
        });
      }
    // Obtener el ID del primer proveedor y establecerlo en idsProveedor
    //if (this.aux.length > 0) {
      this.idsDoctor = this.aux[0].id;
      //console.log("hola"+this.aux[0].id);
    //}

      //console.log(this.aux);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  //llamamos reporte 1
  /*reporte1(){
    this.servicio.reporte1(this.idsDoctor).then((data) => {
     console.log(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }*/
  CrearVista1(){
    
    this.muestra=true;
    // Agregar contenido al PDF
   
    this.servicio.CrearVista1().then((data) => {
      this.titulo="Consultas de los Doctores y sus clientes"
      console.log(this.titulo);
      this.tt=true;
      this.tp=true;
      this.servicio.LlmarVista1().then((data) => {
       
        console.log(data)
        this.datosTabla = data;
        this.datosTabla = this.datosTabla.array;
        this.descripcionTabla = Object.keys(this.datosTabla[0]);
        this.servicio.sumvi().then((datos) => {
          console.log("segunda");
         console.log(datos)
         if (datos !== undefined ) {
          this.otros=datos
          this.otros=this.otros.array;
         
          console.log(this.aux)
          this.totalpre = this.otros[0].cantidad;
        this.totalres = this.otros[0].fecha;
        }

       

        setTimeout(() => {
          this.generarpdf("Doctores y Clientes");
        }, 3000);
        
         

    
        })
        .catch((err) => {
          console.log(err);
        });

        
    
      })
      .catch((err) => {
        console.log(err);
      });
     })
     .catch((err) => {
       console.log(err);
     });
  }
  sueldo(){
    this.servicio.sueldo().then((datos) => {
     
      this.datosTabla = datos;
     this.datosTabla = this.datosTabla.array[0];
     this.descripcionTabla = Object.keys(this.datosTabla[0]);
     this.tt=false;

     this.tp=false;
     console.log("hoal")
      console.log(this.datosTabla )
      if (datos !== undefined ) {
        setTimeout(() => {
          this.generarpdf("Productos y proveedores menor de 10");
        }, 3000);
    
       
     }
 
 
     })
     .catch((err) => {
       console.log(err);
     });

  }

  generarpdf(nombre:String){
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 190;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage("https://img.freepik.com/vector-premium/folleto-atencion-medica-formato-vertical-pagina-a4_299644-17746.jpg", 'PNG', 0, 0, 208, 300);
      PDF.addImage(FILEURI, 'PNG', 10, 10, fileWidth, fileHeight);
      PDF.save(nombre+'.pdf');
    });
  }
  crearvista2(){
    this.muestra=true;
    this.servicio.crearVista2().then((datos) => {
      this.servicio.llamarv2().then((datos) => {
      
        console.log(datos)
        if (datos !== undefined ) {
         this.otros=datos
         this.otros=this.otros.array;
         this.datosTabla = datos;
        this.datosTabla = this.datosTabla.array;
        this.descripcionTabla = Object.keys(this.datosTabla[0]);
        this.tt=false;
   
        this.tp=false;

        
        setTimeout(() => {
          this.generarpdf("Productos y proveedores");
        }, 3000);
        
       }

   

      
        //this.generarpdf("Doctores y Clientes");
   
   
       })
       .catch((err) => {
         console.log(err);
       });

   

      
     //this.generarpdf("Doctores y Clientes");


    })
    .catch((err) => {
      console.log(err);
    });
  }
  roll(){
    this.muestra=true;
    this.servicio.rooll().then((datos) => {
      this.otros=datos
      this.otros=this.otros.array;
      this.datosTabla = datos;
     this.datosTabla = this.datosTabla.array;
     this.descripcionTabla = Object.keys(this.datosTabla[0]);
     this.tt=false;

     this.tp=false;
      console.log(datos)
      if (datos !== undefined ) {
        setTimeout(() => {
          this.generarpdf("Productos y proveedores");
        }, 3000);
    
       
     }

 

    
      //this.generarpdf("Doctores y Clientes");
 
 
     })
     .catch((err) => {
       console.log(err);
     });
  }
  productos10(){
    this.servicio.pro1().then((datos) => {
     
      this.datosTabla = datos;
     this.datosTabla = this.datosTabla.array[0];
     this.descripcionTabla = Object.keys(this.datosTabla[0]);
     this.tt=false;

     this.tp=false;
     console.log("hoal")
      console.log(this.datosTabla )
      if (datos !== undefined ) {
        setTimeout(() => {
          this.generarpdf("Productos y proveedores menor de 10");
        }, 3000);
    
       
     }
 
 
     })
     .catch((err) => {
       console.log(err);
     });
  }
  crearvista3(){
    this.muestra=true;
    this.servicio.crearVista3().then((datos) => {
      this.servicio.llamarv3().then((datos) => {
        this.otros=datos
        this.otros=this.otros.array;
        this.datosTabla = datos;
       this.datosTabla = this.datosTabla.array;
       this.descripcionTabla = Object.keys(this.datosTabla[0]);
       this.tt=false;
  
       this.tp=false;
        console.log(datos)
        if (datos !== undefined ) {
          setTimeout(() => {
            this.generarpdf("Productos y proveedores");
          }, 3000);
      
         
       }
  
   
  
      
        //this.generarpdf("Doctores y Clientes");
   
   
       })
       .catch((err) => {
         console.log(err);
       });
  
   
  
      
     //this.generarpdf("Doctores y Clientes");
  
  
    })
    .catch((err) => {
      console.log(err);
    });
  }
  pro1(){
     this.muestra=true;
    this.servicio.pro1().then((datos) => {

      this.datosTabla = datos;
     this.datosTabla = this.datosTabla.array[0];
     this.descripcionTabla = Object.keys(this.datosTabla[0]);
     this.tt=false;

     this.tp=false;
      console.log(datos)
      if (datos !== undefined ) {
        setTimeout(() => {
          this.generarpdf("Productos menores de 10 unidades");
        }, 3000);
    
       
     }
      //this.generarpdf("Doctores y Clientes");
     })
     .catch((err) => {
       console.log(err);
     });

  }

  calculaPrecioTotal(producto:string,cantidad:number){
    const obj = {
      producto: producto,
      cantidad: cantidad
    }
    this.servicio.calcular_precio_total(obj).then((datos) => {
      this.datosTabla = datos;
      this.cantidad = this.datosTabla.array[0][`calcular_precio_total(\"${producto}\",${cantidad})`];
      console.log(this.cantidad);
      this.muestra2=true;
    })
    .catch((err) => {
      console.log(err);
    });
  }
}



