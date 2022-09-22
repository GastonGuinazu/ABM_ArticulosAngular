import { Categoria } from "./categoria";

export class Articulo {
    id : string;
    codigo: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria?: Categoria;
    categoriaId: string;
}
