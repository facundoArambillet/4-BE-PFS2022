import { Injectable } from '@nestjs/common';
import Auto from './ts/auto';
import Camioneta from './ts/camioneta';
import Vehiculo from './ts/vehiculos';
import * as fs from 'fs';

@Injectable()
export class VehiculosService {
    private listaVehiculos: any[] = [];


    constructor() {
        this.loadVehiculos();
    }

    public getVehiculos() {

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

    public getPatentes(patente: string) {
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getPatente() == patente) {
                return this.listaVehiculos[i];
            }
            else {
                return this.listaVehiculos;
            }
        }
    }

    public addVehiculos(nuevosVehiculos: any): string {
        for (let i = 0; i < nuevosVehiculos.length; i++) {
            if (nuevosVehiculos[i].capacidadDeCarga == undefined) {
                let nuevoAuto = new Auto(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio);

                this.listaVehiculos.push(nuevoAuto);
                if (nuevoAuto.getMarca() && nuevoAuto.getPatente() && nuevoAuto.getModelo() && nuevoAuto.getAnio() && nuevoAuto.getPrecio()) {
                    this.saveVehiculos();
                    this.loadVehiculos();

                    return "Auto creada";
                }
                else {
                    return "Parametros incorrectos";
                }

            }
            else {
                let nuevaCamioneta = new Camioneta(nuevosVehiculos[i].marca, nuevosVehiculos[i].patente, nuevosVehiculos[i].modelo,
                    nuevosVehiculos[i].anio, nuevosVehiculos[i].precio, nuevosVehiculos[i].capacidadDeCarga);

                this.listaVehiculos.push(nuevaCamioneta);

                if (nuevaCamioneta.getMarca() && nuevaCamioneta.getPatente() && nuevaCamioneta.getModelo() &&
                    nuevaCamioneta.getAnio() && nuevaCamioneta.getPrecio() && nuevaCamioneta.getCapacidadDeCarga()) {
                    this.saveVehiculos();
                    this.loadVehiculos();

                    return "Camioneta creada";

                }
                else {
                    return "Parametros incorrectos";
                }
            }
        }
    }


    public updateVehiculo(nuevoVehiculo: any, id: number) {
        if(nuevoVehiculo) {
            this.listaVehiculos[id].setMarca(nuevoVehiculo.marca);
            this.listaVehiculos[id].setPatente(nuevoVehiculo.patente);
            this.listaVehiculos[id].setModelo(nuevoVehiculo.modelo);
            this.listaVehiculos[id].setAnio(nuevoVehiculo.anio);
            this.listaVehiculos[id].setPrecio(nuevoVehiculo.precio); 
            this.listaVehiculos[id].setCapacidadDeCarga(nuevoVehiculo.capacidadDeCarga); 
        }
        this.saveVehiculos();
        this.loadVehiculos();

    }

    public deleteVehiculo(posicion: number): string {
        if (this.listaVehiculos.splice(posicion, 1)) {
            this.saveVehiculos();
            this.loadVehiculos();
            console.log(this.listaVehiculos.length);

            return "Delete realizado";
        }
        else {
            return "Error en el delete";
        }
    }

    private loadVehiculos(): void {
        this.listaVehiculos = [];
        let archivo = fs.readFileSync('./resources/vehiculos.txt', 'utf8');
        let datos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
        let vehiculo: any;

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

    private saveVehiculos(): void {
        let archivo = fs.writeFileSync('./resources/vehiculos.txt', '');
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            let registro = this.listaVehiculos[i].guardar()
            archivo = fs.appendFileSync('./resources/vehiculos.txt',
                `${i == 0 ? '' : '\n'}${registro}`);
        }

    }

}

