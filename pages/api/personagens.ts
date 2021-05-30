import { NextApiRequest, NextApiResponse } from 'next'
import { Db, ObjectId } from 'mongodb';
import connect from '../../utils/database'
import { getSession } from 'next-auth/client'
    
interface ErrorResponseType{
    error: string
}
interface SuccessResponseType{
    _id: ObjectId;
    mesa: string,
    idMesa: ObjectId;
    emailUser: string;
    idUser: ObjectId;
    personagem: string;
    jogador: string;
    idade: number;
    aparencia: string;
    fruta: string;
    raca: string;
    classe: string;
    estilodeluta: string;
    vidaatual: number;
    vidatotal: number;
    Staminaatula: number;
    StaminaTotal: number;
    Infeccao: number;
    Niveldeprocurado: number;
    StatusForca: number;
    StatusDestreza: number;
    StatusConstituicao: number;
    StatusInteligencia: number;
    StatusSabedoria: number;
    StatusCarisma: number;
    PontosGerais: number;
    PontosCoragem: number;
    PontosFurtivo: number;
    PontosInteligencia: number;
    PontosExplorador: number;
    PontosSorte: number;
    PontosClasse: number;
    PontosUsuario: number;
    PontosHaki: number;
    Inventario: string;
    Dinheiro: number;
    Historia: string;
    Truque:Object[];
    Tecnicas: Object[];
    SuperMovimento: Object[]
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | SuccessResponseType>
    ): Promise<void> => {
        if (req.method === "POST"){
             const session = await getSession({ req });
            if(!session){
                res.status(400).json({error:"Please login first"});
                return  
            }
            const { personagem,jogador,idUser,mesa,idMesa,emailUser } = req.body;


            if(!personagem || !jogador || !idUser || !mesa || !idMesa ||!emailUser ){
                res.status(400).json({
                    error:"ERRO: Missing information"
                })
                return
            }
            const { db } = await connect();
            const tabelExist = await db.collection('tables').findOne({_id: new ObjectId(idMesa)});
            if(!tabelExist){
                res.status(400).json({error:"Table not exist"});
                return
            }
            const playerExist = await db.collection('users').findOne({email: emailUser});
            if(!playerExist){
                res.status(400).json({error:"User already exist"});
                return
            }
            const personagemExist = await db.collection("personagens").findOne({personagem:personagem});
            if(personagemExist){
                res.status(400).json({error:"Personage not exist"});
                return
            }
            const response = await db.collection('personagens').insertOne({
                personagem,
                jogador,
                idUser,
                emailUser,
                mesa,
                idMesa,
                idade : 0,
                aparencia : 0,
                fruta : "Nenhuma",
                raca : "Humano",
                classe : "Capitão",
                estilodeluta : "Punch Style",
                vidaatual : 0,
                vidatotal : 0,
                Staminaatula : 0,
                StaminaTotal : 0,
                Infeccao : 0,
                Niveldeprocurado : 1,
                StatusForca : 0,
                StatusDestreza : 0,
                StatusConstituicao : 0,
                StatusInteligencia : 0,
                StatusSabedoria : 0,
                StatusCarisma : 0,
                PontosGerais : 0,
                PontosForca : 0,
                PontosCoragem : 0,
                PontosFurtivo : 0,
                PontosInteligencia : 0,
                PontosExplorador : 0,
                PontosSorte : 0,
                PontosClasse : 0,
                PontosUsuario : 0,
                PontosHaki : 0,
                Inventario : "",
                Dinheiro : 0,
                Historia : "",
                Truque:[],
                Tecnica:[],
                SuperMovimento: []

    });
    const personagemAlreadyExist = await db.collection('users').findOne({email: emailUser, personagens:personagem});
    const id_Personagem = response.ops[0]._id;
        if(!personagemAlreadyExist){
            await db.collection('users').updateOne({ email: emailUser},{$push: {
                personagens: [personagem,id_Personagem, mesa, new ObjectId(idMesa)]  }});
            }
        
        const playerAlreadyexist = await db.collection('tables').findOne({_id: new ObjectId(idMesa), jogadores:jogador});
        const personagemTableAlreadyExist = await db.collection('tables').findOne({_id: new ObjectId(idMesa), personagens:personagem});
        if(!playerAlreadyexist){
                await db.collection('tables').updateOne({ _id: new ObjectId(idMesa)},{$push: {
                    jogadores: jogador,
                    personagens: [personagem, id_Personagem]

                }});
        }else {
            if(!personagemTableAlreadyExist){
                await db.collection('tables').updateOne({ _id: new ObjectId(idMesa)},{$push: {
                    personagens: [personagem, id_Personagem]
                }});
            }
        }

    res.status(200).json(response.ops[0]);
    } 
}
