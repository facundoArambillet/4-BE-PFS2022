import Vehiculo from "./vehiculos";

export default class Auto extends Vehiculo {

    public constructor(marca: string, patente: string, modelo: string, anio: number, precio: number) {
        super(marca, patente, modelo, anio, precio);
        this.tipo = "Auto";
    }



    public guardar(): string {
        return `${this.marca},${this.patente},${this.modelo},${this.anio},${this.precio}`;
    }
}
