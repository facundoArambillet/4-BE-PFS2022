import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculos : VehiculosService) {}

    @Post()
    public addVehiculos(@Body()vehiculos: any) {
        return this.vehiculos.addVehiculos(vehiculos);
    }
    @Put(":id")
    public updateVehiculo(@Body()vehiculo: any, @Param("id") id : number ) {
        return this.vehiculos.updateVehiculo(vehiculo, id);
    }
    @Delete(":posicion")
    public deleteVehiculo(@Param("posicion") posicion : number): string {
            return this.vehiculos.deleteVehiculo(posicion);
    }
    @Get()
    public getVehiculos() {
        return this.vehiculos.getVehiculos();
    }
    @Get("/autos")
    public getAutos() {
        return this.vehiculos.getAutos();
    }
    @Get("/camionetas")
    public getCamionetas() {
        return this.vehiculos.getCamionetas();
    }
    @Get(":patente")
    public getPatente(@Param('patente') patente : string) {
        return this.vehiculos.getPatentes(patente);
    }

}
