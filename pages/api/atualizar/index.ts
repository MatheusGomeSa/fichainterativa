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
            const { _id,Mesa,idMesa,idUser,emailUser,Name,Jogador,Idade,Aparencia,Fruta,Raca,Classe,EstilodeLuta,VidaAtual,VidaMax,
                StaminaAtual,StaminaTotal,Infecção,niveldeprocurado,statusForca,statusDestreza,statusConstituicao,
                statusInteligencia,statusSabedoria,statusCarisma,pontosGerais,pontosCoragem,pontosFurtivo,
                pontosInteligencia,pontosExplorador,pontosSorte,pontosClasse,pontosUsuario,pontosHaki,
                inventario,dinheiro,historia,Truque,Tecnicas,SuperMovimento} = req.body; 
                
                if( !Name || !Jogador || !_id || !Mesa || !idMesa || !idUser || !emailUser || !Fruta  ){
                    res.status(400).json({error:"Missin Information 1"});
                    return
                }
                if(   !VidaAtual || !VidaMax || !StaminaAtual || !StaminaTotal || !Infecção || !niveldeprocurado || !statusForca
                    || !statusDestreza || !statusConstituicao || !statusInteligencia || !statusSabedoria || !statusCarisma
                    || !pontosGerais || !pontosCoragem || ! pontosFurtivo || !pontosInteligencia || !pontosExplorador 
                    || !pontosSorte || !pontosClasse || !pontosUsuario || !pontosHaki){
                    res.status(400).json({error:"Missin Information 2"});
                    return
                }
            
            const { db } = await connect();
            db.collection('personagens').updateOne({_id:new ObjectId(_id)},{$set:{  
                mesa: Mesa,idMesa: idMesa,emailUser: emailUser,idUser: idUser,
                personagem: Name,jogador: Jogador,idade: Idade,aparencia: Aparencia,
                fruta: Fruta,raca: Raca,classe: Classe,estilodeluta: EstilodeLuta,
                vidaatual: VidaAtual,vidatotal: VidaMax,Staminaatula: StaminaAtual,Staminatotal: StaminaTotal,
                Infeccao: Infecção,Niveldeprocurado: niveldeprocurado,StatusForca: statusForca,
                StatusDestreza: statusDestreza,StatusConstituicao: statusConstituicao,
                StatusInteligencia: statusInteligencia,StatusSabedoria: statusSabedoria,
                StatusCarisma: statusCarisma,PontosGerais: pontosGerais,PontosCoragem: pontosCoragem,
                PontosFurtivo: pontosFurtivo,PontosInteligencia: pontosInteligencia,
                PontosExplorador: pontosExplorador,PontosSorte: pontosSorte,PontosClasse: pontosClasse,
                PontosUsuario: pontosUsuario,PontosHaki: pontosHaki,Inventario: inventario,
                Dinheiro: dinheiro,Historia: historia,Truque:Truque,Tecnicas:Tecnicas,SuperMovimento:SuperMovimento }})

        res.status(200);
    }else {
    res.status(400).json({error : "Error" });
    }    
}