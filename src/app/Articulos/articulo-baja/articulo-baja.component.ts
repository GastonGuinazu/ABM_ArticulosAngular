import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticuloService } from 'src/app/Services/articulo.service';

@Component({
  selector: 'app-articulo-baja',
  templateUrl: './articulo-baja.component.html',
  styleUrls: ['./articulo-baja.component.css']
})
export class ArticuloBajaComponent implements OnDestroy {

  @Input() id: string;
  @Output() onEliminar = new EventEmitter();

  private subscription = new Subscription();

  constructor(private articuloService: ArticuloService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminar() {
    const result: boolean = confirm(
      'Está seguro que desea borrar el articulo?'
    );

    if (result) {
      this.subscription.add(
        this.articuloService.eliminar(this.id).subscribe({
          next: () => {
            this.onEliminar.emit();
          },
          error: () => {
            alert('error al borrar el articulo');
          },
        })
      );
    }
  }

}
