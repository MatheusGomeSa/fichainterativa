import { Db, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { relative } from 'node:path';
import connect from '../../../utils/database';
    
interface ErrorResponseType{
    error: string;
}
interface SuccessResponseType{
    _id: ObjectId;
    mesa: string,
    idMesa: ObjectId;
    idUser: ObjectId;
    emailUser:string;
    personagem: string;
    jogador: string;
    idade: number;
    aparencia: string;
    fruta: string;
    raca:string;
    classe:string;
    estilodeluta:string;
    vidaatual: number;
    vidatotal: number;
    Staminaatula: number;
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
    Truque: Object[];
    Tecnicas: Object[];
    SuperMovimento: Object[];
}
export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | SuccessResponseType>
    ): Promise<void> => {
         if (req.method ==='GET' ) {
        const id = req.query.id as string; 
            if(!id){
                res.status(400).json({error:"Please insert a id"});
                return
            }
        const { db } = await connect();
        const response = await db.collection('personagens').findOne({_id: new ObjectId(id)})
        if(!response) {
            res.status(400).json({error:"User not found!"})
            return
        }
        res.status(200).json(response);
        return
    }else {
        
    res.status(400).json({error : "Error" });
    return
    }

    
}
