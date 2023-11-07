import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BajasComponent } from './bajas/bajas.component';
import { AltasComponent } from './altas/altas.component';
import { CambiosComponent } from './cambios/cambios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BajasComponent,    
    AltasComponent,
    CambiosComponent
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
