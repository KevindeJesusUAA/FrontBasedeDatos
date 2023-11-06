import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProovedorComponent } from './proovedor/proovedor.component';
import { VistasComponent } from './vistas/vistas.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MenuComponent } from './menu/menu.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BajasComponent } from './bajas/bajas.component';

@NgModule({
  declarations: [
    AppComponent,
    VistasComponent,
    DoctorComponent,
    EmpleadoComponent,
    MenuComponent,
    ProovedorComponent,
    VistasComponent,
    ClienteComponent,
    BajasComponent
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
