import { NextApiRequest, NextApiResponse } from 'next'
import { Db, ObjectId } from 'mongodb';
import connect from '../../../../utils/database'
import { getSession } from 'next-auth/client'
    
interface ErrorResponseType{
    error: string
}
export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | Object>
    ): Promise<void> => {
    if (req.method ==='GET' ) {
            /* const session = await getSession({ req });
            if(!session){
                res.status(400).json({error:"Please login first"});
                return  
            } */
        const idMesa = req.query.id_table as string; 
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