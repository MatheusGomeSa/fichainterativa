import axios from "axios";
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext } from "next"

interface current_Table{
    _id: string,
    Name_Mesa:string,
    Name_Mestre:string,
    email_mestre:string,
    id_Mestre:string,
    jogadores:string[],
    personagens:[]
}

export default function character({Name_Mesa,Name_Mestre,jogadores,personagens,_id}:current_Table):JSX.Element{
    function delData (id:string){
        if(confirm('Tem certeza que deseja deletear esse personagem ?')){
            const data0 = {_id: id};
            axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/Delete/personagem`, {data: data0})}
    }
    return (<>  
                <div className='flex flex-col m-4 sm:text-xl lg:text-3xl'>
                <h1 className='text-3xl'>Nome {Name_Mesa}</h1>
                <h1 className='text-3xl'>Mestre {Name_Mestre}</h1>
                <h1 className='text-3xl'>id da mesa: {_id}</h1>
                <h1 className='text-3xl'>Jogadores:</h1>
                    {jogadores.map(player => <div>{player}</div>)}
                <h1 className='text-3xl'>Personagens:</h1>
                <section>
                    <div className='flex flex-row'>
                        {personagens.map(use => <div className='bg-white shadow-xl rounded-md border border-gray-300 p-8 m-2 w-60 h-60 text-center'><Link href={`/character/${use[1]}`}><a><div><p>Name: {use[0]}</p><p>Mesa: {use[2]}</p></div></a></Link>
                        <button className='text-red-500 hover:bg-red-500 hover:text-white border border-red-500 font-semibold rounded-md text-xs px-4 text-center align-middle' onClick={() =>delData(use[1])}>Delete</button></div>)}
                    </div>
                </section>
                </div>
                    </>);
}

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) =>{
    const _id = context.query._id as string;
    const response = await axios.get<current_Table>(`${process.env.NEXT_PUBLIC_URL}/api/user/table/${_id}`);
    const theTable = response.data;
    return {
        props:theTable,
    };
};