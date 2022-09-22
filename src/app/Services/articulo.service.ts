import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../Models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private listado: Articulo[];
  private URL: string = 'https://6317ca93f6b281877c5d7785.mockapi.io/articulo/';

 constructor(private http : HttpClient) {
   this.listado = [];
 }

 obtenerListado(): Observable <Articulo[]> {
   const result = this.http.get<Articulo[]>(this.URL);
   return result;
 }

 agregar(articulo: Articulo) : Observable <Articulo> {
   return this.http.post<Articulo>(this.URL,articulo)
 };

 eliminar(id: string): Observable<any>{
   return this.http.delete(this.URL + id);
  }
}
