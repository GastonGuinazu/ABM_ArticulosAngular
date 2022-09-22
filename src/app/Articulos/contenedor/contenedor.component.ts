import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/Models/articulo';
import { ArticuloService } from 'src/app/Services/articulo.service';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit, OnDestroy {

  formularioVisible: boolean = false;
  listadoArticulos: Articulo[] = [];

  private suscripcion = new Subscription();

  constructor(private articuloServicio: ArticuloService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  mostrarFormulario(visible: boolean) {
    this.formularioVisible = visible;
  }

  actualizarListado() {

    const obtenerSubscription = this.articuloServicio.obtenerListado().subscribe({
      next: (listado: Articulo[]) => {
        this.listadoArticulos = listado;
        this.mostrarFormulario(false);
      },
      error: () => {
        alert('Error');
      }
    });

    this.suscripcion.add(obtenerSubscription);

    

  }
}
