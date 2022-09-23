import { Injectable } from '@nestjs/common';

@Injectable()
export class ComputadoraService {
    public getComputadoras(): any {
        let computadoras = [
            {
                "identificador": 1,
                "SO": "Linux",
                "memoriaRam": "DDR3",
                "discoRigido": "SATA 1",
                "tarjetaGrafica" : "CGA"
            },
            {
                "identificador": 2,
                "SO": "Windows",
                "memoriaRam": "DDR2",
                "discoRigido": "SATA 3",
                "tarjetaGrafica" : "HGC"
            },
            {
                "identificador": 3,
                "SO": "Ubuntu",
                "memoriaRam": "DDR4",
                "discoRigido": "SATA 2",
                "tarjetaGrafica" : "MDA"
            },
            {
                "identificador": 4,
                "SO": "Solaris",
                "memoriaRam": "DDR1",
                "discoRigido": "SATA 1",
                "tarjetaGrafica" : "MDA"
            },
            {
                "identificador": 5,
                "SO": "Mac OS",
                "memoriaRam": "DDR4",
                "discoRigido": "SATA 3",
                "tarjetaGrafica" : "HGC"
            }
        ]
        return computadoras


    }

}
