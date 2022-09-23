import { Injectable } from '@nestjs/common';

@Injectable()
export class TecnicoService {
    public getTecnicos (): any {
        let tecnicos = [ {
            "nombre" : "Facundo",
            "apellido": "Arambillet",
            "experienciaLaboral" : false,
            "numeroDeTelefono" : 2983520173
        },
        {
            "nombre" : "Luis",
            "apellido": "Gonzales",
            "experienciaLaboral" : true,
            "numeroDeTelefono" : 2983250283
        },
        {
            "nombre" : "Hernesto",
            "apellido": "Mendoza",
            "experienciaLaboral" : true,
            "numeroDeTelefono" : 2983720196
        },
        {
            "nombre" : "Martin",
            "apellido": "Rivera",
            "experienciaLaboral" : false,
            "numeroDeTelefono" : 2983652041
        },
        {
            "nombre" : "Clemente",
            "apellido": "Cifuentes",
            "experienciaLaboral" : false,
            "numeroDeTelefono" : 2983789565
        },
        ]
        return tecnicos
    }
}
