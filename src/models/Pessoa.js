class Pessoa {
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }

    __get(param){
        return this.param;
    }

    __set(param,value){
        this.param = value;
    }
}