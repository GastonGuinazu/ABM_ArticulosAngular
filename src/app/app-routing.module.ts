import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ContenedorComponent } from './articulos/contenedor/contenedor.component';


const routes: Routes = [
  //{path: 'contenedor', component: ContenedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
