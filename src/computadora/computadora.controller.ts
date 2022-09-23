import { Controller, Get } from '@nestjs/common';
import { ComputadoraService } from './computadora.service';
@Controller('computadora')
export class ComputadoraController {
    constructor(private computadoraService : ComputadoraService) {}

    @Get()
    public  getComputadoras () : string {
        return this.computadoraService.getComputadoras();
    }
}
