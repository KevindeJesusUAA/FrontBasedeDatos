import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProovedorComponent } from './proovedor/proovedor.component';
import { VistasComponent } from './vistas/vistas.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VistasComponent,
    DoctorComponent,
    EmpleadoComponent,
    MenuComponent
=======
    ProovedorComponent,
    VistasComponent
>>>>>>> b7ca10c16522231f154686d97f599878c869a8e3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
