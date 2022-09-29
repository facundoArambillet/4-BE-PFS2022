import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {
    // Asi lo habia pensado yo
    /*
    public sumar(numero1 : number, numero2: number) {
        return Number(numero1) + Number(numero2);
    }
    public restar(numero1 : number, numero2: number) {
        return numero1 - numero2;
    }
    public multiplicar(numero1 : number, numero2: number) {
        return numero1 * numero2;
    }
    public dividir(numero1 : number, numero2: number) {
        return numero1 / numero2;
    }
    */

    public getResultado(ope: string, numero1: number, numero2: number): any {
        let resultado = null;
        switch (ope) {
            case 'sumar':
                resultado = { "resultado": `${numero1 + numero2}` };
                break;
            case 'restar':
                resultado = { "resultado": `${numero1 - numero2}` };
                break;
            case 'multiplicar':
                resultado = { "resultado": `${numero1 * numero2}` };
                break;
            case 'dividir':
                if (numero2 == 0) {
                    resultado = {
                        "resultado": "Division por 0" 
                    }     
                }
                else {
                    resultado = { "resultado": `${numero1 / numero2}` };
                }

                break;
            
        }
        return resultado;
    }
}

