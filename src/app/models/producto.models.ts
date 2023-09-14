import { Categoria } from "./categoria.models";

export interface Producto {
    idProducto: number;
    nombre: String;
    marca: String;
    idCategoria: number;
    cantidad:number;
    precio: number;
    oCategoria: Categoria;
}