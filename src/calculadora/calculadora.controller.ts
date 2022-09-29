
import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private calculadoraService: CalculadoraService) { }
    // Asi lo habia pensado yo

    /*
    @Get('sumar/:numero1/:numero2')
    public getSumar (@Param('numero1') numero1, @Param('numero2') numero2): number {
        return this.calculadoraService.sumar(numero1,numero2)
    }
    @Get('restar/:numero1/:numero2')
    public getRestar (@Param('numero1') numero1, @Param('numero2') numero2): number {
        return this.calculadoraService.restar(numero1,numero2)
    }
    @Get('multiplicar/:numero1/:numero2')
    public getMultiplicar (@Param('numero1') numero1, @Param('numero2') numero2): number {
        return this.calculadoraService.multiplicar(numero1,numero2)
    }
    @Get('dividir/:numero1/:numero2')
    public getDividir (@Param('numero1') numero1, @Param('numero2') numero2): number {
        return this.calculadoraService.dividir(numero1,numero2)
    }
    */

    @Get(':oper/:numero1/:numero2')
    public ejecutar(@Param('oper') oper, @Param('numero1') numero1, @Param('numero2') numero2): string {
        let num1 = parseInt(numero1);
        let num2 = parseInt(numero2);
        return this.calculadoraService.getResultado(oper, num1, num2);
    }
}


