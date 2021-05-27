import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { useState } from "react";
import Image from 'next/image';

interface current_character{
    _id: string;
    mesa: string,
    idMesa: string;
    idUser: string;
    emailUser:string;
    personagem: string;
    jogador: string;
    idade: number;
    aparencia: string;
    fruta: string;
    raca: string;
    classe: string;
    estilodeluta: string;
    vidaatual: number;
    vidatotal: number;
    Staminaatula: number;
    StaminaTotal: number;
    Infeccao: number;
    Niveldeprocurado: number;
    StatusForca: number;
    StatusDestreza: number;
    StatusConstituicao: number;
    StatusInteligencia: number;
    StatusSabedoria: number;
    StatusCarisma: number;
    PontosGerais: number;
    PontosForca: number;
    PontosCoragem: number;
    PontosFurtivo: number;
    PontosInteligencia: number;
    PontosExplorador: number;
    PontosSorte: number;
    PontosClasse: number;
    PontosUsuario: number;
    PontosHaki: number;
    Inventario: string;
    Dinheiro: number;
    Historia: string;
    Truque: {};
    Tecnicas: {};
    SuperMovimento: {}
}
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) =>{
    const _id = context.query._id as string;
    const response = await axios.get<current_character>(`${process.env.NEXT_PUBLIC_URL}/api/personagem/${_id}`);
    const PersonResponse = response.data;
    return {
        props:PersonResponse,
    };
};

export default function character2({
    _id,
    mesa,
    idMesa,
    idUser,
    emailUser,
    personagem,
    jogador,
    idade,
    aparencia,
    fruta,
    raca,
    classe,
    estilodeluta,
    vidaatual,
    vidatotal,
    Staminaatula,
    StaminaTotal,
    Infeccao,
    Niveldeprocurado,
    StatusForca,
    StatusDestreza,
    StatusConstituicao,
    StatusInteligencia,
    StatusSabedoria,
    StatusCarisma,
    PontosGerais,
    PontosForca,
    PontosCoragem,
    PontosFurtivo,
    PontosInteligencia,
    PontosExplorador,
    PontosSorte,
    PontosClasse,
    PontosUsuario,
    PontosHaki,
    Inventario,
    Dinheiro,
    Historia,
    Truque,
    Tecnicas,
    SuperMovimento}:current_character):JSX.Element{
        
        const [Name,SetName] = useState(personagem);
        const [Jogador,SetJogador] = useState(jogador);
        const [Idade,SetIdade] = useState(idade);
        const [Aparencia,SetAparencia] = useState(aparencia);
        const [Fruta,SetFruta] = useState(fruta);
        const [Raca,SetRaca ] = useState(raca);
        const [Classe,SetClasse] = useState(classe);
        const [EstilodeLuta,SetEstilodeLuta] = useState(estilodeluta);       
        const [VidaAtual,SetVidaAtual ] = useState(vidaatual);
        const [VidaMax, SetVidaMax] = useState(vidatotal);
        const [StaminaAtual,SetStaminaAtual] = useState(Staminaatula);
        const [StaminaMax,SetStaminaMax] = useState(StaminaTotal);
        const [Infecção,SetInfecção ] = useState(Infeccao);
        const [niveldeprocurado,SetNiveldeprocurado ] = useState(Niveldeprocurado);
        const [statusForca,SetStatusForca ] = useState(StatusForca);
        const [statusDestreza,SetStatusDestreza ] = useState(StatusDestreza);
        const [statusConstituicao,SetStatusConstituicao ] = useState(StatusConstituicao);
        const [statusInteligencia,SetStatusInteligencia ] = useState(StatusInteligencia);
        const [statusSabedoria,SetStatusSabedoria ] = useState(StatusSabedoria);
        const [statusCarisma,SetStatusCarisma ] = useState(StatusCarisma);
        const [pontosGerais,SetPontosGerais ] = useState(PontosGerais);
        const [pontosForca,SetPontosForca ] = useState(PontosForca);
        const [pontosCoragem,SetPontosCoragem ] = useState(PontosCoragem);
        const [pontosFurtivo,SetPontosFurtivo ] = useState(PontosFurtivo);
        const [pontosInteligencia,SetPontosInteligencia ] = useState(PontosInteligencia);
        const [pontosExplorador,SetPontosExplorador ] = useState(PontosExplorador);
        const [pontosSorte,SetPontosSorte ] = useState(PontosSorte);
        const [pontosClasse,SetPontosClasse ] = useState(PontosClasse);
        const [pontosUsuario,SetPontosUsuario ] = useState(PontosUsuario);
        const [pontosHaki,SetPontosHaki ] = useState(PontosHaki);
        const [inventario,SetInventario ] = useState(Inventario);
        const [dinheiro,SetDinheiro ] = useState(Dinheiro);
        const [historia,SetHistoria ] = useState(Historia);

        const [pages,SetPages ] = useState(1);

        const data2 = {
            _id,
            mesa,
            idMesa,
            idUser,
            emailUser,
            Name,   
            Jogador,
            Idade,
            Aparencia,
            Fruta,
            Raca,
            Classe,
            EstilodeLuta,
            VidaAtual,
            VidaMax,
            StaminaAtual,
            StaminaMax,
            Infecção,
            niveldeprocurado,
            statusForca,
            statusDestreza,
            statusConstituicao,
            statusInteligencia,
            statusSabedoria,
            statusCarisma,
            pontosGerais,
            pontosForca,
            pontosCoragem,
            pontosFurtivo,
            pontosInteligencia,
            pontosExplorador,
            pontosSorte,
            pontosClasse,
            pontosUsuario,
            pontosHaki,
            inventario,
            dinheiro,
            historia,
            Truque,
            Tecnicas,
            SuperMovimento,
        } 
        const PersonSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try{
                await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/atualizar`, data2);
            } catch(err) {
                alert(err.response.data.error);
            }
        } 
        
    return (<>      
                    <div className='max-h-full bg-gray-100 text-3xl m-3'>
                    <form  onSubmit={PersonSubmit}>
                       
                        <div className='grid grid-cols-1 lg:grid-cols-2 '>
                            <div>
                                <div className='flex flex-col items-center'>
                                    <Image
                                        className='flex rounded-full '
                                        src="/rpg/eu.jpg"
                                        alt="Picture of the author"
                                        width={100}
                                        height={100}
                                        />
                                    <div className='flex mt-3 w-4/5'>
                                        <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Name: </div>
                                        <input type='text' value={Name} placeholder='Nome do personagem' onChange={(e) => {SetName(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                    </div>
                                    <div className='flex mt-3 w-4/5'>
                                        <div className='text-center justify-center px-1 border border-gray-500 w-1/2'>Jogador: </div>  
                                        <input type='text' value={Jogador} placeholder='jogador' onChange={(e) => {SetJogador(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                    </div>
                                    <div className='flex mt-3 w-4/5'>
                                        <div className='text-center justify-center px-1 border border-gray-500 w-1/2'>Nivel de Procurado: </div>
                                        <input type='number' value={niveldeprocurado} placeholder='niveldeprocurado' onChange={(e) => {SetNiveldeprocurado(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                    </div>  
                                    <div className='flex w-4/5'>
                                        <div className='flex flex-row items-center'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/4'>Atual:</div>
                                            <input type='number' value={VidaAtual} max={VidaMax}placeholder='Vida atual' onChange={(e) => {SetVidaAtual(e.target.valueAsNumber);}} className='bg-pink-200 my-3 px-1 border border-gray-500 w-1/4 text-center'/><br/>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/4' >Máxima:</div>
                                            <input type='number' value={VidaMax} min={0} placeholder='VidaMax' onChange={(e) => {SetVidaMax(e.target.valueAsNumber);}} className='bg-pink-200 my-3 px-1 border border-gray-500 w-1/4 text-center'/><br/>
                                        </div>
                                    </div>
                                    <div className='bg-gray-600 h-1 w-4/5'>
                                        <div  id="health" className='bg-red-600 h-1' style={{width:`${(VidaAtual/VidaMax)*100}%`}}></div>
                                    </div>
                                    <div className='flex w-4/5'>
                                        <div className='flex flex-row items-center'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/4'>Atual:</div>
                                            <input type='number'max={StaminaMax} value={StaminaAtual} placeholder='StaminaAtual' onChange={(e) => {SetStaminaAtual(e.target.valueAsNumber);}} className='bg-pink-200 my-3 px-1 border border-gray-500 w-1/4 text-center'/><br/>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/4' >Máxima:</div>
                                            <input type='number' value={StaminaMax} min={0} placeholder='StaminaMax' onChange={(e) => {SetStaminaMax(e.target.valueAsNumber);}} className='bg-pink-200 my-3 px-1 border border-gray-500 w-1/4 text-center'/><br/>
                                        </div>
                                    </div>
                                    <div className='bg-gray-600 h-1 w-4/5'>
                                        <div  id="health" className='bg-yellow-400 h-1' style={{width:`${(StaminaAtual/StaminaMax)*100}%`}}></div>
                                    </div>
                                    <div className='flex mt-2 w-4/5'>
                                        <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Infecção: </div>
                                        <input type='number' min={0} value={Infecção} placeholder='Ifecção' onChange={(e) => {SetInfecção(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/><br/>
                                    </div>
                                    <div className='bg-gray-600 h-1 w-4/5'>
                                        <div  id="health" className='bg-green-600 h-1' style={{width:`${(Infecção/20)*100}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-green-100'>
                                <button className='p-1 bg-blue-700 rounded-t-sm mb-3'  type='submit'>salvar</button><br/>
                                {(pages == 1) && (
                                    <div className='flex flex-col'>
                                        <button onClick={() => SetPages(2)} className='text-3xl hover:bg-green-300 px-2'>Informação</button><br/>
                                        <button onClick={() => SetPages(3)} className='text-3xl hover:bg-green-300 px-2'>Atributos</button><br/>
                                        <button onClick={() => SetPages(4)} className='text-3xl hover:bg-green-300 px-2'>Pontos</button><br/>
                                        <button onClick={() => SetPages(5)} className='text-3xl hover:bg-green-300 px-2'>Inventário</button><br/>
                                    </div>  
                                )}
                                {(pages == 2) && (
                                    <div className='flex flex-col items-center'>
                                        <button onClick={()=>{SetPages(1)}}>X</button>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Idade: </div>
                                            <input type='number' value={Idade} placeholder='idade' onChange={(e) => {SetIdade(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Aparência: </div>
                                            <input type='text' value={Aparencia} placeholder='aparencia' onChange={(e) => {SetAparencia(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Fruta: </div>
                                            <input type='text' value={Fruta} placeholder='Fruta' onChange={(e) => {SetFruta(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Raça: </div>
                                            <input type='text' value={Raca} placeholder='raça' onChange={(e) => {SetRaca(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Classe: </div>
                                            <input type='text' value={Classe} placeholder='Classe' onChange={(e) => {SetClasse(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Estilo de Luta: </div>
                                            <input type='text' value={EstilodeLuta} placeholder='EstilodeLuta' onChange={(e) => {SetEstilodeLuta(e.target.value);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                    </div>
                                )}
                                {(pages == 3) && (
                                    <div className='flex flex-col items-center'>
                                    <button onClick={()=>{SetPages(1)}}>X</button>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 h-12'>Pontos</div>
                                        </div>     
                                         <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Força: </div>
                                            <input type='Number' value={statusForca} placeholder='Status Forca' onChange={(e) => {SetStatusForca(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Destreza: </div>
                                            <input type='Number' value={statusDestreza} placeholder='Status Destreza' onChange={(e) => {SetStatusDestreza(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='DestrezaPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Constituição: </div>
                                            <input type='Number' value={statusConstituicao} placeholder='Status Constituicao' onChange={(e) => {SetStatusConstituicao(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='ConstituicaoPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Inteligência: </div>
                                            <input type='Number' value={statusInteligencia} placeholder='Status Inteligencia' onChange={(e) => {SetStatusInteligencia(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Sabedoria: </div>
                                            <input type='Number' value={statusSabedoria} placeholder='Status Sabedoria' onChange={(e) => {SetStatusSabedoria(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex mt-3 w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Carisma: </div>
                                            <input type='Number' value={statusCarisma} placeholder='Status Carisma' onChange={(e) => {SetStatusCarisma(e.target.valueAsNumber);}} className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                            <input type='Number' value={0} placeholder='ForcaPor'  className='bg-pink-200 w-1/4 px-1 border border-gray-500 text-center'/>
                                        </div>
                                    </div>
                                )}    
                                 {(pages == 4) && (
                                    <div className='flex flex-col items-center'>
                                    <button onClick={()=>{SetPages(1)}}>X</button>
                                    <div className='flex w-4/5'>
                                        <div className='text-center justify-center px-1 border border-gray-500 h-12'>Pontos</div>
                                    </div>     
                                     <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Gerais: </div>
                                            <input type='Number' value={pontosGerais} placeholder='Gerais' onChange={(e) => {SetPontosGerais(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Força: </div>
                                            <input type='Number' value={pontosForca} placeholder='Coragem' onChange={(e) => {SetPontosForca(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Coragem: </div>
                                            <input type='Number' value={pontosCoragem} placeholder='Coragem' onChange={(e) => {SetPontosCoragem(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Furtivo: </div>
                                            <input type='Number' value={pontosFurtivo} placeholder='Furtivo' onChange={(e) => {SetPontosFurtivo(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Inteligência: </div>
                                            <input type='Number' value={pontosInteligencia} placeholder='Inteligencia' onChange={(e) => {SetPontosInteligencia(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Explorador: </div>
                                            <input type='Number' value={pontosExplorador} placeholder='Explorador' onChange={(e) => {SetPontosExplorador(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Sorte: </div>
                                            <input type='Number' value={pontosSorte} placeholder='Sorte' onChange={(e) => {SetPontosSorte(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Classe: </div>
                                            <input type='Number' value={pontosClasse} placeholder='Classe' onChange={(e) => {SetPontosClasse(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Usuário: </div>
                                            <input type='Number' value={pontosUsuario} placeholder='Usuario' onChange={(e) => {SetPontosUsuario(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                        <div className='flex w-4/5'>
                                            <div className='text-center justify-center px-1 border border-gray-500 w-1/2 h-12'>Haki: </div>
                                            <input type='Number' value={pontosHaki} placeholder='Haki' onChange={(e) => {SetPontosHaki(e.target.valueAsNumber);}} className='bg-pink-200 w-1/2 px-1 border border-gray-500 text-center'/>
                                        </div>
                                    </div>
                                )}
                                 {(pages == 5) && (
                                    <div className='flex flex-col items-center'>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                        <div className='flex w-4/5'>
                                            <h3>Inventário:</h3><br/>
                                        </div>
                                            <div className='flex w-4/5'>
                                                <textarea cols={40} value={inventario} onChange={(e) => {SetInventario(e.target.value);}} className='bg-pink-200 border border-gray-500'/><br/>
                                            </div>
                                            <div className='flex mt-3 w-4/5'>
                                                <span className='text-center justify-center px-1 border border-gray-500 w-1/4 h-12'>Beris</span>
                                                <input type='Dinheiro' value={Dinheiro} placeholder='Dinheiro' onChange={(e) => {SetDinheiro(e.target.valueAsNumber);}} className='bg-pink-200 w-4/5 px-1 border border-gray-500 text-center'/><br/>
                                            </div>
                                            <div className='flex mt-3 w-4/5'>
                                                <h3>Historia:</h3><br/>
                                            </div>
                                            <div className='flex w-4/5'>    
                                                <textarea cols={40} value={Historia} onChange={(e) => {SetHistoria(e.target.value);}} className='bg-pink-200 border border-gray-500'/><br/>
                                            </div>
                                        </div>
                                 )}
                                {}
                                {}
                                {}  
                            </div>
                        </div>
                    </form>
                </div>
                </>);
}