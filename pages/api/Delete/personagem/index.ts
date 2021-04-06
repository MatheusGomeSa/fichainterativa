import { Db, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../../utils/database';
    
interface ErrorResponseType{
    error: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | null>
    ): Promise<void> => {
         if (req.method ==='DELETE' ) {
        const _id = req.body; 
            if(!_id){
                res.status(400).json({error:"Please insert a id"});
                return
            }
        const { db } = await connect();
        const personagens = await db.collection('personagens').findOne({_id: new ObjectId(_id._id)});
        //const userpersonagem = await db.collection('users').findOne({_id: new ObjectId(personagens.idUser)});
        const useratt = [personagens.personagem, new ObjectId(personagens._id), personagens.mesa, new ObjectId(personagens.idMesa)] ;
        db.collection('users').updateOne({_id: new ObjectId(personagens.idUser)}, {$pull: { personagens: useratt }});
        db.collection('tables').updateOne({_id: new ObjectId(personagens.idMesa)}, {$pull: { personagens: [personagens.personagem, new ObjectId(personagens._id)]}});
        const response = await db.collection('personagens').deleteOne({_id: new ObjectId(_id._id)});
        if(!response) {
            res.status(400).json({error:"User not found!"})
            return
        }
        res.status(200);
    }else {
    res.status(400).json({error : "Error" });
    }    
}