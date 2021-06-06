export default class User{
    _id:string;
    nickName:string;
    email:string;
    jogador:string;
    mesa: Array<Array<string>>
    personagens: Array<Array<string>>
    constructor(_id:string,nickname:string,email:string,jogador:string){
        this._id = _id;
        this.nickName = nickname;
        this.email = email;
        this.jogador = jogador;
        this.mesa = [];
        this.personagens = [];
    }
    set Nickname(value){
        this.nickName = value;
    }
    set Email(value){
        this.email = value;
    }
    set Jogador(value){
        this.jogador = value;
    }
    Mesa(name:string,_id:string){
        this.mesa.push([name,_id]);
    }
    personagem(name:string,_id:string,mesa:string,_idMesa:string){
        this.personagens.push([name,_id,mesa,_idMesa])
    }
    get all(){
        return [this.Nickname,this.Jogador,this.Email,this.mesa,this.personagens];
    }
}