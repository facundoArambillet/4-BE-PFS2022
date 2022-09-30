import Vehiculo from "./vehiculos";


export default class Auto extends Vehiculo {
    public constructor(marca: string, patente: string, modelo: string, anio: number, precio: number) {
        super(marca, patente, modelo, anio, precio)
    }


    public getCapacidadDeCarga(): number {
        return -1
    }
}
