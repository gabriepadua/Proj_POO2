import internal from "stream";
import mae from "./mae";
import medico from "./medico";

export default class bebe{
    public certidao: Number;
    public nome: String;
    public data_nasc: Number;
    public peso_nasc: Number;
    public altura: Number;
    public Mae: mae;
    public Medico: medico;



    constructor(certidao: Number, nome: String, data_nasc: Number, peso_nasc: Number, altura: Number, Mae: mae, Medico: medico) {
        this.certidao = certidao;
        this.nome = nome;
        this.data_nasc = data_nasc;
        this.peso_nasc = peso_nasc;
        this.altura = altura;
        this.Medico = Medico;
        this.Mae = Mae;

    }

}



