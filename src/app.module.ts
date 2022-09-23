import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputadoraController } from './computadora/computadora.controller';
import { ComputadoraService } from './computadora/computadora.service';
import { TecnicoController } from './tecnico/tecnico.controller';
import { TecnicoService } from './tecnico/tecnico.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath:join(__dirname,'..','client')}),
  ],
  controllers: [AppController, ComputadoraController, TecnicoController],
  providers: [AppService, ComputadoraService, TecnicoService],
})
export class AppModule {}
