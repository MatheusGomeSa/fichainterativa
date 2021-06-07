import { ObjectID } from 'bson';
import Habilidade from'../utils/HabsClass';
export default class Character{
    _id:ObjectID;
    name:string;
    jogador:string;
    _idJogador:string;
    emailJogador:string;
    mesa:string;
    _idMesa:string;
    idade:number;
    aparencia:string;
    fruta:string;
    raca:string;
    classe:string;
    estiloDeLuta:string;
    vidaAtual:number;
    vidaTotal:number;
    staminaAtual:number;
    staminaTotal:number;
    infeccao:number;
    niveldeprocurado:number;
    statusForca:number;
    statusDestreza:number;
    statusConstituicao:number;
    statusInteligencia:number;
    statusSabedoria:number;
    statusCarisma:number;
    pontosGerais:number;
    pontosForca:number;
    pontosCoragem:number;
    pontosFurtivo:number;
    pontosInteligencia:number;
    pontosExplorador:number;
    pontosSorte:number;
    pontosClasse:number;
    pontosUsuario:number;
    pontosHaki:number;
    inventario:string;
    dinherio:number;
    historia:string;
    truque:Array<object>;
    tecnica:Array<Habilidade>;
    supermovimento:Array<Habilidade>;
    constructor(Jogador:string,_idJogador:string,emailJogador:string,mesa:string,_idMesa:string){
        this._id = new ObjectID();
        this.jogador = Jogador;
        this._idJogador = _idJogador;
        this.emailJogador = emailJogador;
        this.mesa = mesa;
        this._idMesa = _idMesa;
        this.name = '';
        this.idade = 1;
        this.aparencia = 'Neutro';
        this.fruta = '';
        this.raca = '';
        this.classe = '';
        this.estiloDeLuta = '';
        this.vidaAtual = 1;
        this.vidaTotal = 1;
        this.staminaAtual = 1;
        this.staminaTotal = 1;
        this.infeccao = 0;
        this.niveldeprocurado= 1;
        this.statusForca = 10;
        this.statusDestreza = 10;
        this.statusConstituicao = 10;
        this.statusInteligencia = 10;
        this.statusSabedoria = 10;
        this.statusCarisma = 10;
        this.pontosGerais = 0;
        this.pontosForca = 0;
        this.pontosCoragem = 0;
        this.pontosFurtivo = 0;
        this.pontosInteligencia = 0;
        this.pontosExplorador = 0;
        this.pontosSorte = 0;
        this.pontosClasse = 0;
        this.pontosUsuario = 0;
        this.pontosHaki = 0;
        this.inventario = '';
        this.dinherio = 0;
        this.historia = '';
        this.truque = [];
        this.tecnica = [];
        this.supermovimento = [];
    }
    set Name(value){
        this.name = value;
    }
    set Jogador(value){
        this.jogador = value;
    }
    set EmailJogador(value){
        this.emailJogador = value;
    }
    set Mesa(value){
        this.mesa = value;
    }
    set Idade(value){
        this.idade = value;
    }
    set Aparencia(value){
        this.aparencia = value;
    }
    set Fruta(value){
        this.fruta = value;
    }
    set Raca(value){
        this.raca = value;
    }
    set Classe(value){
        this.classe = value;
    }
    set EstiloDeLuta(value){
        this.estiloDeLuta = value;
    }
    set VidaAtual(value){
        this.vidaAtual = value;
    }
    set VidaTotal(value){
        this.vidaTotal = value;
    }
    set StaminaAtual(value){
        this.staminaAtual = value;
    }
    set StaminaTotal(value){
        this.staminaTotal = value;
    }
    set Infeccao(value){
        this.infeccao = value;
    }
    set Niveldeprocurado(value){
        this.niveldeprocurado = value;
    }
    set StatusForca(value){
        this.statusForca = value;
    }
    set StatusDestreza(value){
        this.statusDestreza = value;
    }
    set StatusConstituicao(value){
        this.statusConstituicao = value;
    }
    set StatusInteligencia(value){
        this.statusInteligencia = value;
    }
    set StatusSabedoria(value){
        this.statusSabedoria = value;
    }
    set StatusCarisma(value){
        this.statusCarisma = value;
    }
    set PontosGerais(value){
        this.pontosGerais = value;
    }
    set PontosForca(value){
        this.pontosForca = value;
    }
    set PontosCoragem(value){
        this.pontosCoragem = value;
    }
    set PontosFurtivo(value){
        this.pontosFurtivo = value;
    }
    set PontosInteligencia(value){
        this.pontosInteligencia = value;
    }
    set PontosExplorador(value){
        this.pontosExplorador = value;
    }
    set PontosSorte(value){
        this.pontosSorte = value;
    }
    set PontosClasse(value){
        this.pontosClasse = value;
    }
    set PontosUsuario(value){
        this.pontosUsuario = value;
    }
    set PontosHaki(value){
        this.pontosHaki = value;
    }
    set Inventario(value){
        this.inventario = value;
    }
    set Dinherio(value){
        this.dinherio = value;
    }
    set Historia(value){
        this.historia = value;
    }
    set Truque(value:Habilidade){
        this.truque.push(value);
    }
    set Tecnica(value:Habilidade){
        this.tecnica.push(value);
    }
    set SuperMovimento(value:Habilidade){
        this.supermovimento.push(value);
    }
}