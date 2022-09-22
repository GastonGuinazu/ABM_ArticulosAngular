import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContenedorComponent } from './articulos/contenedor/contenedor.component';
import { ArticulosAltaComponent } from './articulos/articulos-alta/articulos-alta.component';
import { ArticulosListadoComponent } from './articulos/articulos-listado/articulos-listado.component';
import { ArticuloBajaComponent } from './articulos/articulo-baja/articulo-baja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContenedorComponent,
    ArticulosAltaComponent,
    ArticulosListadoComponent,
    ArticuloBajaComponent
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
