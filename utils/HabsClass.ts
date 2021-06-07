export default class Habilidade {
    nameHab:string;
    teste: boolean;
    dano:[d20: number,d12: number,d10: number,d8: number,d6: number,d4: number];
    custo:number;
    explication:string;
    
    constructor(nameHab:string,teste:boolean,dano:[d20: number,d12: number,d10: number,d8: number,d6: number,d4: number],custo:number,explicação:string){
        this.nameHab = nameHab;
        this.teste =  teste;
        this.dano[0] = dano[0];
        this.dano[1] = dano[1];
        this.dano[2] = dano[2];
        this.dano[3] = dano[3];
        this.dano[4] = dano[4];
        this.dano[5] = dano[5];
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
        this.dano[0] = value;
    }
    set D12(value:number){
        this.dano[1] = value;
    }
    set D10(value:number){
        this.dano[2] = value;
    }
    set D8(value:number){
        this.dano[3] = value;
    }
    set D6(value:number){
        this.dano[4] = value;
    }
    set D4(value:number){
        this.dano[5] = value;
    }
    set Custo(value:number){
        this.custo = value
    }
    set Explicacao(value:string){
        this.explication = value;
    }
}