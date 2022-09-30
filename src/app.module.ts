import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputadoraController } from './computadora/computadora.controller';
import { ComputadoraService } from './computadora/computadora.service';
import { TecnicoController } from './tecnico/tecnico.controller';
import { TecnicoService } from './tecnico/tecnico.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { Computadora2Controller } from './computadora2/computadora2.controller';
import { Computadora2Service } from './computadora2/computadora2.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from './vehiculos/vehiculos.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
  
      })
  ],
  controllers: [AppController,ComputadoraController,TecnicoController,CalculadoraController,Computadora2Controller, VehiculosController],
  providers: [AppService,ComputadoraService,TecnicoService,CalculadoraService,Computadora2Service, VehiculosService],
})
export class AppModule {}
