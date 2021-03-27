import { Db, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client'
import connect from '../../utils/database';
    
interface ErrorResponseType{
    error: string;
}
interface SuccessResponseType{
    _id: string;
   Jogador:string;
   mesas:string;
   personagens:[];
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | SuccessResponseType>
    ): Promise<void> => {
        if (req.method === 'POST'){
            const session = await getSession({ req });
            if(!session){
                res.status(400).json({error:"Please login first"});
                return  
            }
            const { Jogador,idUser } = req.body;

            if(!idUser || !Jogador){
                res.status(400).json({
                    error:"ERRO: Missing information"
                })
                return
            }
            const { db } = await connect();
            const response = await db.collection('users').insertOne({
                idUser,
                Jogador,
                mesas:[],
                personagens: [],
    });
    res.status(200).json(response.ops[0]);
    } 
}
