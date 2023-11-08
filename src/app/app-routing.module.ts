import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';
import { CambiosComponent } from './cambios/cambios.component';
import { CambiosformComponent } from './cambiosform/cambiosform.component';

const routes: Routes = [
  {path: 'bajas', component: BajasComponent},
  {path: 'altas', component: AltasComponent},
  {path: 'cambios', component: CambiosComponent},
<<<<<<< HEAD
  { path: '', redirectTo: '/altas', pathMatch: 'full' },
=======
  {path: 'cambiosform', component: CambiosformComponent},
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
>>>>>>> a57739e1b287348a5ef57aa3ada55c455a1aea46
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
