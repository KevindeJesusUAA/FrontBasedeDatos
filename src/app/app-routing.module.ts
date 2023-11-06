import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';
import { CambiosComponent } from './cambios/cambios.component';

const routes: Routes = [
  {path: 'bajas', component: BajasComponent},
  {path: 'altas', component: AltasComponent},
  {path: 'cambios', component: CambiosComponent},
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
