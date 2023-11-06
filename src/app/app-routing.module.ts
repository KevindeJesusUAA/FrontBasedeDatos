import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProovedorComponent } from './proovedor/proovedor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';

const routes: Routes = [
  { path: 'producto', component: ProductosComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'proveedor', component: ProovedorComponent },
  { path: 'doctor', component: DoctorComponent },
  {path: 'bajas', component: BajasComponent},
  {path: 'altas', component: AltasComponent},
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
