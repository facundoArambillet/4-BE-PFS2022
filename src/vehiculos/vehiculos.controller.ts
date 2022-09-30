import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculos : VehiculosService) {}

    @Post()
    public addVehiculos(@Body()vehiculos: any) {
        return this.vehiculos.addVehiculos(vehiculos)
    }

    @Get()
    public getVehiculos() {
        return this.vehiculos.getVehiculos()
    }
    @Get('/autos')
    public getAutos() {
        return this.vehiculos.getAutos()
    }
    @Get("/camionetas")
    public getCamionetas() {
        return this.vehiculos.getCamionetas()
    }

}
