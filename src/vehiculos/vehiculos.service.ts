import { Injectable } from '@nestjs/common';
import Auto from './ts/auto';
import Camioneta from './ts/camioneta';
import Vehiculo from './ts/vehiculos';

@Injectable()
export class VehiculosService {
    private listaVehiculos: any[] = []
 //   private listaCamionetas: Camioneta[] = []
 //   private listaAutos: Auto[] = []

    constructor() { }

    public getVehiculos() {
        return this.listaVehiculos;
    }

    public getAutos() {
        let autos: Auto[] = []
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getCapacidadDeCarga() == -1) {
                autos.push(this.listaVehiculos[i]);
            }
        }
        return autos;
    }

    public getCamionetas() {
        let camionetas: Camioneta[] = [];

        for (let i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getCapacidadDeCarga() != -1 && this.listaVehiculos[i].getCapacidadDeCarga() != null) {
                camionetas.push(this.listaVehiculos[i]);
            }
        }
        return camionetas;
    }


    public addVehiculos(nuevosVehiculos: any) {
        /*
         for (let i = 0; i < nuevosVehiculos.length; i++) {
             if (nuevosVehiculos[i].getCapacidadDeCarga() == -1) {
                 let nuevoAuto = new Auto(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                     nuevosVehiculos[i].anio, nuevosVehiculos[i].precio);
                 this.listaAutos.push(nuevoAuto);
                 return "Auto agregado exitosamente"
            }   }
         }
         console.log(this.listaAutos)
     
 */

        for (let i = 0; i < nuevosVehiculos.length; i++) {
            if (nuevosVehiculos[i].getCapacidadDeCarga() == -1) {
                let nuevoAuto = new Auto(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio);
                this.listaVehiculos.push(nuevoAuto);
            }
            else {
                let nuevaCamioneta = new Camioneta(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio, nuevosVehiculos[i].getCapacidadDeCarga);

                this.listaVehiculos.push(nuevaCamioneta);
            }
        }
        console.log(nuevosVehiculos.modelo)
    }

}

