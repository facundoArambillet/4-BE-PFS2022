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
        //this.listaVehiculos.push(this.getAutos());
        //this.listaVehiculos.push(this.getCamionetas());
        return this.listaVehiculos;
    }

    public getAutos() {
        let autos: Auto[] = []
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getTipo() == "Auto") {
                autos.push(this.listaVehiculos[i]);
            }
        }
        this.listaVehiculos.push(autos);
        return autos;
    }

    public getCamionetas() {
        let camionetas: Camioneta[] = [];

        for (let i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getTipo() =="Camioneta") {
                camionetas.push(this.listaVehiculos[i]);
            }
        }
        this.listaVehiculos.push(camionetas);
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
            if (nuevosVehiculos[i].capacidadDeCarga == undefined) {
            //    nuevosVehiculos[i].tipo = "Auto"
                let nuevoAuto = new Auto(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio);
                //    nuevoAuto.setTipo("Auto");
                this.listaVehiculos.push(nuevoAuto);
            }
            else {
             //   nuevosVehiculos[i].tipo = 'Camioneta'
                let nuevaCamioneta = new Camioneta(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio, nuevosVehiculos[i].capacidadDeCarga);
               //     nuevaCamioneta.setTipo("Camioneta");
                this.listaVehiculos.push(nuevaCamioneta);
            }
        }
        console.log(this.listaVehiculos)
    }

}

