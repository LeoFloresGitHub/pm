
import { Producto } from "./producto.models";

export interface Entrada {
    idEntrada: number;
    fecha: Date;
    idProducto: number;
    cantidad: number;
    costo:number;
    oProducto: Producto;
}