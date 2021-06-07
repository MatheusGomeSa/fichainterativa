import { ObjectID } from "bson";

export default class Table{
    _id:ObjectID;
    name:string;
    mestre:string;
    emailMestre:string;
    _idMestre:string;
    jogadores:Array<string>
    personagens:Array<Array<string>>
    constructor(name:string,mestre:string,emailMestre:string,_idMestre:string){
        this._id = new ObjectID();
        this.name = name;
        this.mestre = mestre;
        this.emailMestre = emailMestre;
        this._idMestre = _idMestre
        this.jogadores = [];
        this.personagens = [];
    }
    set Name(value){
        this.name = value;
    }
    set Mestre(value){
        this.mestre = value;
    }
    set EmaiMestre(value){
        this.emailMestre = value
    }
    set Jogadores(value){
        this.jogadores.push(value);
    }
    Personagem(name:string,_id:string){
        this.personagens.push([name,_id]);
    }
}