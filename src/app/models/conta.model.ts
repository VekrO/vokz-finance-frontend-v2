export class Conta {
    
    id: number;
    nome: string;
    inativo: boolean;
    idUsuario: number;
    urlLogo: string;

    constructor(id: number, nome: string, inativo: boolean, urlLogo: string, idUsuario: number) {
        this.id = id;
        this.nome = nome;
        this.inativo = inativo;
        this.urlLogo = urlLogo;
        this.idUsuario = idUsuario;
    }

}