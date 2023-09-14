import { Producto } from "./producto.models";

export interface Salida {
    idSalida: number;
    fecha: Date;
    idProducto: number;
    cantidad: number;
    descuento:number;
    total:number;
    delivery:number;
    precio:number;
    oProducto: Producto;
    
}