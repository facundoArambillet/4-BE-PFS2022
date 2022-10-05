import { Injectable } from '@nestjs/common';
import Auto from './ts/auto';
import Camioneta from './ts/camioneta';
import Vehiculo from './ts/vehiculos';
import * as fs from 'fs';

@Injectable()
export class VehiculosService {
    private listaVehiculos: any[] = []
    //   private listaCamionetas: Camioneta[] = []
    //   private listaAutos: Auto[] = []

    constructor() {
        this.loadVehiculos()
    }

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
            if (this.listaVehiculos[i].getTipo() == "Camioneta") {
                camionetas.push(this.listaVehiculos[i]);
            }
        }
        this.listaVehiculos.push(camionetas);
        return camionetas;
    }


    public addVehiculos(nuevosVehiculos: any) {

        for (let i = 0; i < nuevosVehiculos.length; i++) {
            if (nuevosVehiculos[i].capacidadDeCarga == undefined) {
                let nuevoAuto = new Auto(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio);

                this.listaVehiculos.push(nuevoAuto);
                    
                if (nuevoAuto.getMarca() && nuevoAuto.getPatente() && nuevoAuto.getModelo() && nuevoAuto.getAnio() && nuevoAuto.getPrecio()) {
                    fs.appendFileSync('./resources/vehiculos.txt',
                        `\n${nuevoAuto.getMarca()},${nuevoAuto.getPatente()},${nuevoAuto.getModelo()},${nuevoAuto.getAnio()},${nuevoAuto.getPrecio()}`);
                        return "Ok";
                }
                else {
                    return "Parametros incorrectos"
                }
                
            }
            else {
                let nuevaCamioneta = new Camioneta(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio, nuevosVehiculos[i].capacidadDeCarga);

                this.listaVehiculos.push(nuevaCamioneta);

                if (nuevaCamioneta.getMarca() && nuevaCamioneta.getPatente() && nuevaCamioneta.getModelo() &&
                    nuevaCamioneta.getAnio() && nuevaCamioneta.getPrecio() && nuevaCamioneta.getCapacidadDeCarga()) {
                    fs.appendFileSync('./resources/vehiculos.txt',
                        `\n${nuevaCamioneta.getMarca()},${nuevaCamioneta.getPatente()},${nuevaCamioneta.getModelo()},${nuevaCamioneta.getAnio()},${nuevaCamioneta.getPrecio()},${nuevaCamioneta.getCapacidadDeCarga()}`);
                }
            }
        }
        this.loadVehiculos();
       // this.saveVehiculos();
    }

    private loadVehiculos(): void {
        this.listaVehiculos = [];
        let archivo = fs.readFileSync('./resources/vehiculos.txt', 'utf8');
        let datos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
        let vehiculo: any;
        this.listaVehiculos = [];
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].length == 6) {
                vehiculo = new Camioneta(datos[i][0], datos[i][1], datos[i][2], Number(datos[i][3]), Number(datos[i][4]), Number(datos[i][5]));
                this.listaVehiculos.push(vehiculo);
            }

            else {
                vehiculo = new Auto(datos[i][0], datos[i][1], datos[i][2], Number(datos[i][3]), Number(datos[i][4]));
                this.listaVehiculos.push(vehiculo);
            }
        }
    }
    /*
    private saveVehiculos(): void {
        let archivo = fs.writeFileSync('./resources/vehiculos.txt', 'utf8');
        for(let i = 0; i < this.listaVehiculos.length; i++) {
            archivo =  fs.appendFileSync('./resources/vehiculos.txt',
            `${this.listaVehiculos[i].getMarca()},${this.listaVehiculos[i].getPatente()},${this.listaVehiculos[i].getModelo()},${this.listaVehiculos[i].getAnio()},${this.listaVehiculos[i].getPrecio()}\n`);
        }

    }
    */
}

