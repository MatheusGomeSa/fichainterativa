import { Db, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { relative } from 'node:path';
import connect from '../../../utils/database';
import character from '../../../utils/characterClass';
    
interface ErrorResponseType{
    error: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | character>
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
    }else {
        
    res.status(400).json({error : "Error" });
    return
    }

    
}
