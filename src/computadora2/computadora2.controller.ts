
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Computadora2Service } from './computadora2.service';

@Controller('computadora2')
export class Computadora2Controller {
    constructor(private computadora2 : Computadora2Service) {}

    @Get()
    public getComputadoras() {
        return this.computadora2.getComputadoras()
    }

    @Get(":SO")
    public getComputadora(@Param('SO') SO) {
        return this.computadora2.getComputadora(SO)
    }

    @Post()
    public addComputadora(@Body()computadora: any) {
        return this.computadora2.addComputadora(computadora)
    }
}
