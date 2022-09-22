import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/Models/articulo';
import { Categoria } from 'src/app/Models/categoria';
import { ArticuloService } from 'src/app/Services/articulo.service';
import { CategoriaService } from 'src/app/Services/categoria.service';

@Component({
  selector: 'app-articulos-alta',
  templateUrl: './articulos-alta.component.html',
  styleUrls: ['./articulos-alta.component.css']
})
export class ArticulosAltaComponent implements OnInit {

  @Output() onCancelar = new EventEmitter();
  @Output() onGuardar = new EventEmitter();

  articulo: Articulo;
  categorias: Categoria[];

  private subscription = new Subscription();

  @ViewChild('personaForm') formulario: NgForm;

  constructor(private articuloServicio: ArticuloService,
    private categoriaServicio: CategoriaService) { }

  ngOnInit(): void {
    this.articulo = { categoria: {} } as Articulo;
    this.subscription.add(
      this.categoriaServicio.obtenerListado().subscribe({
        next: (respuesta: Categoria[]) => {
          this.categorias = respuesta;
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }

  guardar() {
    if (this.formulario.valid) {
      this.subscription.add(
        this.articuloServicio.agregar(this.articulo).subscribe({
          next: () => {
            alert('articulo agregado');
          },
          error: () => {
            alert('error al guardar el articulo');
          }
        })
      );
    }
    this.articulo = new Articulo();
  }


  cancelar() {
    this.onCancelar.emit();
  }
  

}
