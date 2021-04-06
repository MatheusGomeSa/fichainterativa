import { NextApiRequest, NextApiResponse } from 'next'
import { Db, ObjectId } from 'mongodb';
import connect from '../../../utils/database'
import { getSession } from 'next-auth/client'
    
interface ErrorResponseType{
    error: string
}
interface SuccessResponseType{
    _id: string,
    Name_Mesa:string,
    Name_Mestre:string,
    email_mestre:string,
    id_Mestre:string,
    jogadores:string[],
    personagens:Record<string,string>
}
export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | SuccessResponseType>
    ): Promise<void> => {
    if (req.method ==='GET' ) {
        const session = await getSession({ req });
        if(!session){
            res.status(400).json({error:"Please login first"});
            return  
        }
        const  idMesa  = req.query.id as string;
            if(!idMesa){
                res.status(400).json({error:"Please insert a id"});
                return
            }
        const { db } = await connect();
        const response = await db.collection('tables').findOne({_id: new ObjectId(idMesa)});
        if(!response) {
            res.status(400).json({ error:"User not found!" })
            return
        }
        res.status(200).json(response);
    } else {
        
        res.status(400).json({error : "Error" });
    }
}