import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client'
import connect from '../../utils/database';
import User from '../../utils/userClass';

interface ErrorResponseType{
    error: string;
}
interface SuccessResponseType{
    _id: string;
    email:string;
    Jogador:string;
    mesas:[];
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
            const { Jogador,idUser,email } = req.body;
            const newUser = new User(Jogador,email,idUser)
            if(!idUser || !Jogador || !email){
                res.status(400).json({
                    error:"ERRO: Missing information"
                })
                return
            }
            const { db } = await connect();
            const response = await db.collection('users').insertOne(newUser);
    res.status(200).json(response.ops[0]);
    } 
}
