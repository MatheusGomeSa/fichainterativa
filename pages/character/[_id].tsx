// importando todas as bibliotecas que serão usadas
import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import React, { useState } from "react";
import Image from 'next/image';


// interface com todas as informações presentes na table Personagens
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
    Truque: object[];
    Tecnicas: [];
    SuperMovimento: []
}
// requisitar as informações na table Personagens.
export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) =>{
    const _id = context.query._id as string;
    const response = await axios.get<current_character>(`${process.env.NEXT_PUBLIC_URL}/api/personagem/${_id}`);
    const PersonResponse = response.data;
    return {
        props:PersonResponse,
    };
};
// função principal
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
        
        const [Name,SetName] = useState(personagem); // Variavel mutavel para nome do personagem 
        const [Jogador,SetJogador] = useState(jogador); // Variavel mutavel para nome do jogador
        const [Idade,SetIdade] = useState(idade); // Variavel mutavel para Idade do personagem
        const [Aparencia,SetAparencia] = useState(aparencia); // Variavel mutavel para aparencia do personagem
        const [Fruta,SetFruta] = useState(fruta); // Variavel mutavel para fruta do personagem
        const [Raca,SetRaca ] = useState(raca); // Variavel mutavel para raça do personagem
        const [Classe,SetClasse] = useState(classe); // Variavel mutavel para Classe do personagem
        const [EstilodeLuta,SetEstilodeLuta] = useState(estilodeluta); // Variavel mutavel para Estilo de luta do personagem
        const [VidaAtual,SetVidaAtual ] = useState(vidaatual); // Variavel mutavel para vida atual do personagem
        const [VidaMax, SetVidaMax] = useState(vidatotal); // Variavel mutavel para vida máxima do personagem
        const [StaminaAtual,SetStaminaAtual] = useState(Staminaatula); // Variavel mutavel para a estamina atual do personagem
        const [StaminaMax,SetStaminaMax] = useState(StaminaTotal); // Variavel mutavel para a estamina máxima do personagem
        const [Infecção,SetInfecção ] = useState(Infeccao); // Variavel mutavel para a infecção do personagem
        const [niveldeprocurado,SetNiveldeprocurado ] = useState(Niveldeprocurado); // Variavel mutavel para o nivel de procurado do personagem
        const [statusForca,SetStatusForca ] = useState(StatusForca); // Variavel mutavel para Força do personagem
        const [statusDestreza,SetStatusDestreza ] = useState(StatusDestreza); // Variavel mutavel para Destreza do personagem
        const [statusConstituicao,SetStatusConstituicao ] = useState(StatusConstituicao); // Variavel mutavel para Constituição do personagem
        const [statusInteligencia,SetStatusInteligencia ] = useState(StatusInteligencia); // Variavel mutavel para Inteligencia do personagem
        const [statusSabedoria,SetStatusSabedoria ] = useState(StatusSabedoria); // Variavel mutavel para Sabedoria do personagem
        const [statusCarisma,SetStatusCarisma ] = useState(StatusCarisma); // Variavel mutavel para carisma do personagem
        const [pontosGerais,SetPontosGerais ] = useState(PontosGerais); // Variavel mutavel para os pontos gerais do personagem
        const [pontosForca,SetPontosForca ] = useState(PontosForca); // Variavel mutavel para os pontos forca do personagem
        const [pontosCoragem,SetPontosCoragem ] = useState(PontosCoragem); // Variavel mutavel para os pontos coragem do personagem
        const [pontosFurtivo,SetPontosFurtivo ] = useState(PontosFurtivo); // Variavel mutavel para os pontos furtivo do personagem
        const [pontosInteligencia,SetPontosInteligencia ] = useState(PontosInteligencia); // Variavel mutavel para os pontos Inteligencia do personagem
        const [pontosExplorador,SetPontosExplorador ] = useState(PontosExplorador); // Variavel mutavel para os pontos Explorador do personagem
        const [pontosSorte,SetPontosSorte ] = useState(PontosSorte); // Variavel mutavel para os pontos Sorte do personagem
        const [pontosClasse,SetPontosClasse ] = useState(PontosClasse); // Variavel mutavel para os pontos Classe do personagem
        const [pontosUsuario,SetPontosUsuario ] = useState(PontosUsuario); // Variavel mutavel para os pontos Usuario do personagem
        const [pontosHaki,SetPontosHaki ] = useState(PontosHaki); 
        const [inventario,SetInventario ] = useState(Inventario);
        const [dinheiro,SetDinheiro ] = useState(Dinheiro);
        const [historia,SetHistoria ] = useState(Historia);

        // Variavel mutavel para setar novas habilidades
        const [NomeHab,SetNomeHab ] = useState(null); // nome da habilidade
        const [HabCusto,SetHabCusto] = useState(null); // custo da habilidade
        const [HabExplain,SetHabExplain] = useState(null); // explicação da habilidade
        const [Habd20,SetHabd20] = useState(null); // d20 da habilidade
        const [Habd12,SetHabd12] = useState(null); // d12 da habilidade
        const [Habd10,SetHabd10] = useState(null); // d10 da habilidade  
        const [Habd8,SetHabd8] = useState(null); // d8 da habilidade
        const [Habd6,SetHabd6] = useState(null); // d6 da habilidade
        const [Habd4,SetHabd4] = useState(null); // d4 da habilidade
        const [haveTest,SetHaveTest] = useState(false); // Se haverá teste

        const [newTipe, SetNewTipe] = useState(0); // Seleciona se adicionará um novo truque, tecnica ou super movimento


        const [pages,SetPages ] = useState(1); // seleciona a pagina que irá aparecer.
        // informar as variaveis que serão usadas para atualizadas o banco de dados
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
        // atualizará o banco de dados pela api(api/atualizar/index.ts)
        const PersonSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try{
                await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/atualizar`, data2);
            } catch(err) {
                alert(err.response.data.error);
            }
        } 
        // Classe que será usada para adicionar ou ler habilidades
        class NewTruque {
            NameHab:string;
            teste: boolean;
            d20: number;
            d12: number;
            d10: number;
            d8: number;
            d6: number;
            d4: number;
            custo:number;
            explication:string;
        }
        // Informa todos valores para a nova habilidade adicionada
        const AttTruques = async(event:React.FormEvent<HTMLFormElement>) =>{
            if(!NomeHab || !HabCusto || !Habd20 || !Habd12 || !Habd10 || !Habd8 || !Habd6 || !Habd4 || !HabExplain){
            let habTipes = [Truque, Tecnicas, SuperMovimento]
            let newTruque = new NewTruque()
            newTruque.NameHab = NomeHab;
            newTruque.custo = HabCusto;
            newTruque.d20 = Habd20;
            newTruque.d12 = Habd12;
            newTruque.d10 = Habd10;
            newTruque.d8 = Habd8;
            newTruque.d6 = Habd6;
            newTruque.d4 = Habd4;
            newTruque.explication = HabExplain;
            newTruque.teste = haveTest;
            habTipes[newTipe].push(newTruque);
            SetNomeHab(null);
            SetHabCusto(null);
            SetHabd20(null);
            SetHabd12(null);    
            SetHabd10(null);
            SetHabd8(null);
            SetHabd6(null);
            SetHabd4(null);
            SetPages(1);}else{
                alert("Missing Information!!")
            }
        }
        // Começo do view
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
                                        <button onClick={() => SetPages(2)} className='text-2xl hover:bg-green-300 px-1 my-2'>Informação</button>
                                        <button onClick={() => SetPages(3)} className='text-2xl hover:bg-green-300 px-1 my-2'>Atributos</button>
                                        <button onClick={() => SetPages(4)} className='text-2xl hover:bg-green-300 px-1 my-2'>Pontos</button>
                                        <button onClick={() => SetPages(5)} className='text-2xl hover:bg-green-300 px-1 my-2'>Inventário</button>
                                        <button onClick={() => SetPages(6)} className='text-2xl hover:bg-green-300 px-1 my-2'>Truques</button>
                                        <button onClick={() => SetPages(7)} className='text-2xl hover:bg-green-300 px-1 my-2'>Técnica</button>
                                        <button onClick={() => SetPages(8)} className='text-2xl hover:bg-green-300 px-1 my-2'>Super Movimento</button>
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
                                                <textarea cols={80} rows={10} value={inventario} onChange={(e) => {SetInventario(e.target.value);}} className='bg-pink-200 border border-gray-500 text-lg leading-tight'/><br/>
                                            </div>
                                            <div className='flex mt-3 w-4/5'>
                                                <span className='text-center justify-center px-1 border border-gray-500 w-1/4 h-12'>Beris</span>
                                                <input type='number' value={dinheiro} placeholder='Dinheiro' onChange={(e) => {SetDinheiro(e.target.valueAsNumber);}} className='bg-pink-200 w-4/5 px-1 border border-gray-500 text-center'/><br/>
                                            </div>
                                            <div className='flex mt-3 w-4/5'>
                                                <h3>Historia:</h3><br/>
                                            </div>
                                            <div className='flex w-4/5'>    
                                                <textarea cols={80} rows={10} value={historia} onChange={(e) => {SetHistoria(e.target.value);}} className='bg-pink-200 border border-gray-500 text-lg leading-tight'/><br/>
                                            </div>
                                        </div>
                                 )}
                                {(pages == 6) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(0)}}>New</button>
                                    {Truque?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}
                                {(pages == 7) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(1)}}>New</button>
                                    {Tecnicas?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}
                                {(pages == 8) && (<div>
                                    <button onClick={() => {SetPages(1)}}>X</button>
                                    <button onClick={() =>{SetPages(9);SetNewTipe(2)}}>New</button>
                                    {SuperMovimento?.map((use:NewTruque) => <div>{use.NameHab}</div>)}
                                </div>)}  
                                {(pages == 9) && (
                                    <div>
                                        <form onSubmit={AttTruques}>
                                            <label htmlFor='NomedaHabilidade' className='mx-2'>Nome da Habilidade</label>
                                            <input id='NomedaHabilidade' className='bg-pink-200 my-3' type='text'   value={NomeHab} onChange={(e) => {SetNomeHab(e.target.value)}}/><br/>
                                            <label htmlFor='danoD20'>D20:</label>
                                            <input id='danoD20' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd20} onChange={(e) => {SetHabd20(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD12'>D12:</label>
                                            <input id='danoD12' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd12} onChange={(e) => {SetHabd12(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD10'>D10:</label>
                                            <input id='danoD10' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd10} onChange={(e) => {SetHabd10(e.target.valueAsNumber)}}/><br/>
                                            <label htmlFor='danoD8'>D8:</label>
                                            <input id='danoD8' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd8} onChange={(e) => {SetHabd8(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD6'>D6:</label>
                                            <input id='danoD6' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd6} onChange={(e) => {SetHabd6(e.target.valueAsNumber)}}/>
                                            <label htmlFor='danoD4'>D4:</label>
                                            <input id='danoD4' className='bg-pink-200 my-3 w-16 mx-2' type='number' value={Habd4} onChange={(e) => {SetHabd4(e.target.valueAsNumber)}}/>
                                            <div>
                                                <input type="radio" id='Have' onChange={()=>SetHaveTest(true)}/>
                                                <label htmlFor="Have" className='mx-10'>Have</label>
                                                <input type="radio" id='DontHave' onChange={ ()=>SetHaveTest(false)} />
                                                <label htmlFor='DontHave' className='mx-10'>Don't Have</label>
                                            </div>
                                            <label htmlFor='CustoHabilidade' className='mx-2'>Custo</label>
                                            <input id='CustoHabilidade'className='bg-pink-200 my-3 w-48' type='number' value={HabCusto} onChange={(e) => {SetHabCusto(e.target.valueAsNumber)}}/><br/>
                                            <textarea className='bg-pink-200 my-3' value={HabExplain} onChange={(e)=> SetHabExplain(e.target.value)}></textarea><br/>
                                            <button className='p-1 bg-blue-700 rounded-t-sm'  type='submit'>Criar Truque</button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
                </>);
}