import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';

const routes: Routes = [
  {path: 'bajas', component: BajasComponent},
  {path: 'altas', component: AltasComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
