export default class mae{
    public id: Number;
    public nome: String;
    public endereco: String;
    public telefone: Number;
    public data_nasc: Number;
    
    constructor(id: Number, nome: String, endereco: String, telefone: Number, data_nasc: Number){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.data_nasc = data_nasc;
    }
    }