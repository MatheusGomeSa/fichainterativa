import { Db, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../utils/database';
    
interface ErrorResponseType{
    error: string;
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<ErrorResponseType | null>
    ): Promise<void> => {
         if (req.method ==='POST' ) {
            const { _id,mesa,idMesa,idUser,emailUser,Name,Jogador,Idade,Aparencia,Fruta,Raca,Classe,EstilodeLuta,VidaAtual,VidaMax,
                StaminaAtual,StaminaMax,Infecção,niveldeprocurado,statusForca,statusDestreza,statusConstituicao,
                statusInteligencia,statusSabedoria,statusCarisma,pontosGerais,pontosCoragem,pontosFurtivo,
                pontosInteligencia,pontosExplorador,pontosSorte,pontosClasse,pontosUsuario,pontosHaki,pontosForca,
                inventario,dinheiro,historia,Truque,Tecnicas,SuperMovimento} = req.body; 
                if(!Name){
                    res.status(400).json({error:"Missin Name"});
                    return
                }
                if(!Jogador){
                    res.status(400).json({error:"Missin Jogador"});
                    return
                }
                if(!_id){
                    res.status(400).json({error:"Missin _id"});
                    return
                }
                if(!mesa){
                    res.status(400).json({error:"Missin mesa"});
                    return
                }
                if(!idMesa){
                    res.status(400).json({error:"Missin idMesa"});
                    return
                }
                if(!idUser ){
                    res.status(400).json({error:"Missin idUser"});
                    return
                }
                if(!emailUser){
                    res.status(400).json({error:"Missin emailUser"});
                    return
                }
                if(!Fruta){
                    res.status(400).json({error:"Missin Fruta"});
                    return
                }
                if(!VidaAtual){
                    res.status(400).json({error:"Missin VidaAtual"});
                    return
                }
                if(!VidaMax){
                    res.status(400).json({error:"Missin VidaMax"});
                    return
                }
                if(!StaminaAtual){
                    res.status(400).json({error:"Missin StaminaAtual"});
                    return
                }
                if(!StaminaMax ){
                    res.status(400).json({error:"Missin StaminaMax"});
                    return
                }

                if(!Infecção){
                    res.status(400).json({error:"Missin Infecção"});
                    return
                }
                if(!niveldeprocurado){
                    res.status(400).json({error:"Missin niveldeprocurado"});
                    return
                }

            const { db } = await connect();
            db.collection('personagens').updateOne({_id:new ObjectId(_id)},{$set:{  
                mesa: mesa,idMesa: idMesa,emailUser: emailUser,idUser: idUser,
                personagem: Name,jogador: Jogador,idade: Idade,aparencia: Aparencia,
                fruta: Fruta,raca: Raca,classe: Classe,estilodeluta: EstilodeLuta,
                vidaatual: VidaAtual,vidatotal: VidaMax,Staminaatula: StaminaAtual,StaminaTotal: StaminaMax,
                Infeccao: Infecção,Niveldeprocurado: niveldeprocurado,StatusForca: statusForca,
                StatusDestreza: statusDestreza,StatusConstituicao: statusConstituicao,
                StatusInteligencia: statusInteligencia,StatusSabedoria: statusSabedoria,
                StatusCarisma: statusCarisma,PontosGerais: pontosGerais, PontosForca: pontosForca,PontosCoragem: pontosCoragem,
                PontosFurtivo: pontosFurtivo,PontosInteligencia: pontosInteligencia,
                PontosExplorador: pontosExplorador,PontosSorte: pontosSorte,PontosClasse: pontosClasse,
                PontosUsuario: pontosUsuario,PontosHaki: pontosHaki,Inventario: inventario,
                Dinheiro: dinheiro,Historia: historia,Truque:Truque,Tecnicas:Tecnicas,SuperMovimento:SuperMovimento }})

        res.status(200);
    }else {
    res.status(400).json({error : "Error" });
    }    
}