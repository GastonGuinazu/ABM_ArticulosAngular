import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private listado: Categoria[];
  private URL: string = 'https://6317ca93f6b281877c5d7785.mockapi.io/categoria/';

 constructor(private http : HttpClient) {
   this.listado = [];
 }

 obtenerListado(): Observable <Categoria[]> {
   const result = this.http.get<Categoria[]>(this.URL);
   return result;
 }
 
}
