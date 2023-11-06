import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProovedorComponent } from './proovedor/proovedor.component';
import { VistasComponent } from './vistas/vistas.component';
<<<<<<< HEAD
import { DoctorComponent } from './doctor/doctor.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MenuComponent } from './menu/menu.component';
=======
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BajasComponent } from './bajas/bajas.component';
>>>>>>> 5910253cf3792f2f719d7f03a7303b3da90a56ff

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    VistasComponent,
    DoctorComponent,
    EmpleadoComponent,
    MenuComponent
=======
    ProovedorComponent,
    VistasComponent
>>>>>>> b7ca10c16522231f154686d97f599878c869a8e3
=======
    VistasComponent,
    ClienteComponent,
    BajasComponent
>>>>>>> 5910253cf3792f2f719d7f03a7303b3da90a56ff
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
