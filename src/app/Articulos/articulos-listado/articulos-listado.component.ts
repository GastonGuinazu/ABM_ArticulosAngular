import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/Models/articulo';
import { Categoria } from 'src/app/Models/categoria';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { CategoriaService } from 'src/app/Services/categoria.service';

@Component({
  selector: 'app-articulos-listado',
  templateUrl: './articulos-listado.component.html',
  styleUrls: ['./articulos-listado.component.css']
})
export class ArticulosListadoComponent implements OnInit, OnDestroy {

  @Output() onNuevoArticulo = new EventEmitter();
  @Input()listado: Articulo[];
  //listadoCateg : Categoria[];
  //listado : Articulo[];

  private subscription = new Subscription();

  constructor(private articuloServicio : ArticuloService,
              private categoriaServicio : CategoriaService) { }

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  agregarArticulo(){
    this.onNuevoArticulo.emit();
  }

  actualizarListado() {
    this.subscription.add(
      this.categoriaServicio.obtenerListado().subscribe({
        next: (categorias: Categoria[]) => {
          this.articuloServicio.obtenerListado().subscribe({
            next: (respuesta: Articulo[]) => {
              for (const articulo of respuesta) {
                const categoriaIndex = categorias.findIndex(
                  (x) => x.id === articulo.categoriaId
                );
                articulo.categoria = categorias[categoriaIndex];
              }

              this.listado = respuesta;
            },
            error: () => {
              alert('error al comunicarse con la API');
            },
          });
        },
      })
    );
  }
}
