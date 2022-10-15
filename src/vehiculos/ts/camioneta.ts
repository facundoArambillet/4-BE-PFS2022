import Vehiculo from "./vehiculos";


export default class Camioneta extends Vehiculo {
    private capacidadDeCarga: number;


    public constructor(marca: string, patente: string, modelo: string, anio: number, precio: number, capacidadDeCarga: number) {
        super(marca, patente, modelo, anio, precio)

        this.capacidadDeCarga = capacidadDeCarga;
        this.tipo = "Camioneta";
    }

    public getCapacidadDeCarga(): number {
        return this.capacidadDeCarga;
    }
    public setCapacidadDeCarga(nuevaCapacidad): void {
        this.capacidadDeCarga = nuevaCapacidad;
    }


    public guardar(): string {
        return `${this.marca},${this.patente},${this.modelo},${this.anio},${this.precio},${this.capacidadDeCarga}`;
    }

}