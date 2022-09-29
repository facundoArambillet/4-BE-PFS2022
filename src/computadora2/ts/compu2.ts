export default class Computadora2 {
    private id: number;
    private sistemaOperativo: string;
    private tipoDeMemoria: string;
    private tipoDeDisco: string;
    private tipoDePlacaDeVideo : string;
    
    public constructor(id: number, sistemaOperativo: string, tipoDeMemoria: string, tipoDeDisco: string,  tipoDePlacaDeVideo : string) {
        this.id = id;
        this.sistemaOperativo = sistemaOperativo;
        this.tipoDeMemoria = tipoDeMemoria;
        this.tipoDeDisco = tipoDeDisco;
        this.tipoDePlacaDeVideo = tipoDePlacaDeVideo;
    }

    public getSistemaOperativo (): string {
        return this.sistemaOperativo;
    }
    public getTipoDeMemoria (): string {
        return this.tipoDeMemoria;
    }
    public getTipoDeDisco(): string {
        return this.tipoDeDisco;
    }
    public getId(): number {
        return this.id
    }
    public getTipoDePlacaDeVideo (): string {
       return this.tipoDePlacaDeVideo
    }
    public setSistemaOperativo(nuevoSO : string) : void {
        this.sistemaOperativo = nuevoSO;
    }
    public setTipoDeMemoria(nuevaMemoria : string): void {
        this.tipoDeMemoria = nuevaMemoria;
    }
    public setTipoDeDisco(nuevoDisco: string): void {
        this.tipoDeDisco = nuevoDisco;
    }
    public setTipoDePlacaDeVideo(nuevaPlaca : string) {
        this.tipoDePlacaDeVideo = nuevaPlaca;
    }

    
}