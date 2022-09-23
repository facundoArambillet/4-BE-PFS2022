import { Controller, Get } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';

@Controller('tecnico')
export class TecnicoController {
    constructor(private tecnicoService : TecnicoService) {}
    @Get()
    public getTecnico () {
        return this.tecnicoService.getTecnicos()
    }
}
