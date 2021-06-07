export default class Habilidade {
    nameHab:string;
    teste: boolean;
    d20: number;
    d12: number;
    d10: number;
    d8: number;
    d6: number;
    d4: number;
    custo:number;
    explication:string;
    
    constructor(nameHab:string,teste:boolean,d20:number,d12:number,d10:number,d8:number,d6:number,d4:number,custo:number,explicação:string){
        this.nameHab = nameHab;
        this.teste =  teste;
        this.d20 = d20;
        this.d12 = d12;
        this.d10 = d10;
        this.d8 = d8;
        this.d6 = d6;
        this.d4 = d4;
        this.custo = custo;
        this.explication = explicação;
    }

    set NameHab(value:string){
        this.nameHab = value;
    } 
    set Teste(value:boolean){
        this.teste = value;
    }
    set D20(value:number){
        this.d20 = value;
    }
    set D12(value:number){
        this.d12 = value;
    }
    set D10(value:number){
        this.d10 = value;
    }
    set D8(value:number){
        this.d8 = value;
    }
    set D6(value:number){
        this.d6 = value;
    }
    set D4(value:number){
        this.d4 = value;
    }
    set Custo(value:number){
        this.custo = value
    }
    set Explicacao(value:string){
        this.explication = value;
    }
}