import bebe from "./bebe";

export default class medico{
    public crm: Number;
    public nome: String;
    public especialidade: String;
    public telefone: Number;
  
    
    constructor(crm: Number, nome: String, especialidade: String, telefone: Number, bebes: bebe){
        this.crm = crm;
        this.nome = nome;
        this.especialidade = especialidade;
        this.telefone = telefone;
    }
    }