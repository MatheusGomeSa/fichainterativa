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
        const Table = await db.collection('tables').findOne({_id: new ObjectId(_id._id)});
        for(let i =0; i < Table.personagens.length; i++){
            let personagens = await db.collection('personagens').findOne({_id: new ObjectId(Table.personagens[i][1])});
            let useratt = [personagens.personagem, new ObjectId(personagens._id), personagens.mesa, new ObjectId(personagens.idMesa)] ;
            db.collection('users').updateOne({_id: new ObjectId(personagens.idUser)}, {$pull: { personagens: useratt }});
            db.collection('personagens').deleteOne({_id: new ObjectId(Table.personagens[i][1])});
        }
        let usertab = ['Mestre', Table.Name_Mesa ,new ObjectId(_id._id)] ;
        db.collection('users').updateOne({_id: new ObjectId(Table.id_Mestre)}, {$pull: { mesas: usertab }});
       const response = await db.collection('tables').deleteOne({_id: new ObjectId(_id._id)});
        if(!response) {
            res.status(400).json({error:"User not found!"})
            return
        } 
        res.status(200);
    }else {
    res.status(400).json({error : "Error" });
    }    
}