import { Injectable } from '@nestjs/common';
import Computadora2 from 'src/computadora2/ts/compu2';
import * as fs from 'fs';



@Injectable()
export class Computadora2Service {
    private listaComputadoras: Computadora2[] = [];

    constructor() {
        this.loadComputadoras();
    }

    private loadComputadoras(): void {
        let archivo = fs.readFileSync('./resources/computadora.txt', 'utf8');
        let datos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
        this.listaComputadoras = [];
        for (let i = 0; i < datos.length; i++) {
            let computadora = new Computadora2(parseInt(datos[i][0]), datos[i][1], datos[i][2], datos[i][3], datos[i][4]);
            this.listaComputadoras.push(computadora);
        }
    }

    private saveComputadoras() {
        
    }

    public getComputadoras(): Computadora2[] {
        return this.listaComputadoras;
    }

    public getComputadora(SO: string): Computadora2 {
        let computadora = null;
        for (let i = 0; i < this.listaComputadoras.length; i++) {
            if (SO == this.listaComputadoras[i].getSistemaOperativo()) {
                computadora = this.listaComputadoras[i];
            }
        }
        return computadora;
    }

    public addComputadora(nuevaComputadora: any): string {
        let computadora = new Computadora2(nuevaComputadora.id, nuevaComputadora.sistemaOperativo, nuevaComputadora.tipoDeMemoria,
            nuevaComputadora.tipoDeDisco, nuevaComputadora.tipoDePlacaDeVideo);

        if (computadora.getId() && computadora.getSistemaOperativo() && computadora.getTipoDeDisco() &&
            computadora.getTipoDeMemoria() && computadora.getTipoDePlacaDeVideo()) {
            this.listaComputadoras.push(computadora);
            fs.appendFileSync('./resources/computadora.txt',
            `\n${computadora.getId()},${computadora.getSistemaOperativo()},${computadora.getTipoDeDisco()},${computadora.getTipoDeMemoria()},${computadora.getTipoDePlacaDeVideo()}`);
            return 'Ok';
        }

        else {
            return 'Parametros incorrectos';
        }
    }

}
