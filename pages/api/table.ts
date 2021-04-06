import { ObjectId, ObjectID } from 'bson';
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import connect from '../../utils/database'
    
interface ErrorResponseType{
    error: string
}
interface SuccessResponseType{
    _id: string;
    Name_Mesa: string;
    Name_Mestre:string;
    id_Mestre: string;
    email_mestre:string;
    jogadores:[];
    personagens: [];
    
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
            const { Name_Mesa,Name_Mestre,id_Mestre,email_mestre }:{ Name_Mesa: string ,Name_Mestre: string ,id_Mestre: string,email_mestre:string } = req.body;

            if(!Name_Mesa || !Name_Mestre || !id_Mestre || !email_mestre ){
                res.status(400).json({
                    error:"ERRO: Missing information"
                })
                return
            }
            const { db } = await connect();
            const tableExist = await db.collection('tables').findOne({Name_Mesa:Name_Mesa, email_mestre: email_mestre});
            if(tableExist){
                res.status(400).json({error:"Table already exist"});
                return
            }
            const response = await db.collection('tables').insertOne({
                Name_Mesa,
                Name_Mestre,
                email_mestre,
                id_Mestre,
                jogadores: [],
                personagens: []
            });
            const id_table = response.ops[0]._id.valueOf();
            const mesa = [
                 "Mestre",
                 Name_Mesa,
                 id_table
            ]
    await db.collection('users').updateOne({ _id: new ObjectId(id_Mestre)},
    { $push: { mesas: mesa }     }
    ); 
    res.status(200).json(response.ops[0]);
} else {
        
    res.status(400).json({error : "Error" });
}


    }
