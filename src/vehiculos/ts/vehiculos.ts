export default   class Vehiculo {
    private marca: string;
    private patente: string;
    private modelo: string;
    private anio: number;
    private precio: number;
    protected tipo : string;

    public constructor(marca: string, patente: string, modelo: string, anio: number, precio: number) {
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.tipo = "";
    }

    public getMarca(): string {
        return this.marca;
    }
    public getPatente(): string {
        return this.patente;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getAnio(): number {
        return this.anio;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public getTipo(): string {
        return this.tipo
    }

    public setMarca(nuevaMarca): void {
        this.marca = nuevaMarca;
    }
    public setPatente(nuevaPatente): void {
        this.patente = nuevaPatente;
    }
    public setModelo(nuevoModelo): void {
        this.modelo = nuevoModelo;
    }
    public setAnio(nuevoAnio): void {
        this.anio = nuevoAnio;
    }
    public setPrecio(nuevoPrecio): void {
        this.precio = nuevoPrecio;
    }
    public setTipo(nuevoTipo: string): void {
        this.tipo = nuevoTipo;
    }



}