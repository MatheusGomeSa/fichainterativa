import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import { FormEvent, useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import api from '../utils/api';
import users from './api/users';
import Link from 'next/link';
import Image from 'next/image';

interface newPersonage{
    personagem:string,
    jogador:string,
    idUser:string,
	emailUser:string,
	mesa:string,
	idMesa:string
}

const ProfilePage: NextPage = () => {
    const [ session, loading ] = useSession();
    const [ name,setName ] = useState(null);
    const [ errorCount, Seterrorcount ] = useState(0);
    const [ idUser,SetidUser] = useState(null);
    const [ newPersonage,Setnewpersonage ] = useState(false)
    const [ name_personage,setname_personage ] = useState(null);
    const [ name_mesa,setname_mesa ] = useState(null);
    const [ mesa_name,setmesa_name ] = useState(null);
    const [ mesa_id,setmesa_id ] = useState(null);
    const [ newTable,SetnewTable ] = useState(false);

    const [ loggedwithouacount,Setloggedwithouacount] = useState(false);
    const { data, error } = useSWR(
        !loggedwithouacount && !loading ? `/api/user/${session?.user.email}` :null, api);
    useEffect(() =>{ Seterrorcount((prevstate) => prevstate + 1); if(error && errorCount === 1) Setloggedwithouacount(true)},[error, Seterrorcount]);
    const [ email,setEmail ] = useState(null);
    const data2 = {
        personagem:name_personage,
        jogador:data?.data.Jogador,
        idUser:data?.data._id,
        emailUser:data?.data.email,
        mesa:mesa_name,
        idMesa: mesa_id
    }
    const data3 = {
        Name_Mesa:name_mesa,
        Name_Mestre:data?.data.Jogador,
        id_Mestre:data?.data._id,
        email_mestre:data?.data.email,
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users`, data);
            Setloggedwithouacount(false)
        } catch(err) {
            alert(err.response.data.error);
        }
    }
    const PersonSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/personagens`, data2);
            Setnewpersonage(false)
        } catch(err) {
            alert(err.response.data.error);
        }
    }
    const TableSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/table`, data3);
            SetnewTable(false)
        } catch(err) {
            alert(err.response.data.error);
        }
    }
    function delData (id:string){
        if(confirm('Tem certeza que deseja deletear esse personagem ?')){
            const data0 = {"_id": id};
            axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/Delete/personagem`, {data: data0})}
    }
    function delData2 (id:string){
        if(confirm('Tem certeza que deseja deletear essa mesa ?')){
        const data0 = {"_id": id};
        axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/Delete/table`, {data: data0})}
    }
    return(
        <div className ='max-h-full bg-white sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto'>
        {!session && (
            <div className='text-3xl flex flex-col justify-center align-center'>
                <h1>
                    Para acessar a página é necessário estar logado
                </h1>
                <br/>
                <button onClick={():Promise<void> => signIn('auth0')}>Login</button>
            </div> 
        )}
        {session && data && !newPersonage && !newTable &&(
             <div className='flex flex-col m-4 sm:text-xl lg:text-3xl'>
                <button onClick={():Promise<void> => signOut()}>Logout</button>
                <h1 className='text-sm text-center'> Logado Como {data.data.Jogador}</h1>
                <div className='flex'><h3>Seus personagens:</h3><button className='mx-12 w-10  text-center  hover:bg-blue-500 hover:text-white font-semibold rounded-md ' onClick={() =>{Setnewpersonage(true)}}>+</button></div>
                <section className='flex flex-row bg-indigo-100 rounded-md'>
                    {data.data.personagens.map(use => <div className='bg-white shadow-xl rounded-md border border-gray-500 p-8 m-2 w-60 h-60 text-center'><Link href={`${process.env.NEXT_PUBLIC_URL}/character/${use[1]}`} prefetch={false}><a><div><p>Name: {use[0]}</p><p>Mesa: {use[2]}</p></div></a></Link>
                    <button className='text-red-500 hover:bg-red-500 hover:text-white border border-red-500 font-semibold rounded-md text-xs px-4 text-center align-middle' onClick={() =>delData(use[1])}>Delete</button></div>)}

                </section>
                <div className='flex'><h3>Suas Mesas:</h3><button className='mx-12 w-10  text-center  hover:bg-blue-500 hover:text-white font-semibold rounded-md ' onClick={() =>{SetnewTable(true)}}>+</button></div>
                <section>
                    <div className='flex flex-row bg-indigo-100 rounded-md'>
                    {data.data.mesas.map(use => <div className='bg-white shadow-xl rounded-md border border-gray-300 p-8 m-2 w-56 h-52 text-center'><Link href={`${process.env.NEXT_PUBLIC_URL}/table/${use[2]}`} prefetch={false}><a><div><p>Name: {use[1]}</p></div></a></Link><button className='text-red-500 hover:bg-red-500 hover:text-white border border-red-500 font-semibold rounded-md text-xs px-4 text-center align-middle' onClick={() =>delData2(use[2])}>Delete</button></div>)}
                    </div>
                </section>
            </div>
        )}
        {session && data && newPersonage && !newTable &&(
             <div className='text-3xl flex flex-col justify-center align-center'>
                <button onClick={():Promise<void> => signOut()}>Logout</button>
                <h1 className='text-sm text-center'> Logado Como {data.data.Jogador}</h1>
                <h1 className='text-3xl text-center'>Adicione um novo personagem:</h1>
                <button onClick={() =>{Setnewpersonage(false)}}>X</button>
                <form onSubmit={PersonSubmit} className='flex flex-col items-center'>
                    <input type='name_personage' value={name_personage} placeholder='Nome do personagem' onChange={(e) => {setname_personage(e.target.value);}} className='bg-pink-200 my-3'/>
                    <input type='mesa_name' value={mesa_name} placeholder='Nome da mesa' onChange={(e) => {setmesa_name(e.target.value);}} className='bg-pink-200 my-3'/>
                    <input type='mesa_id' placeholder='id da mesa' value={mesa_id} onChange={(e) => {setmesa_id(e.target.value);}} className='bg-pink-200 my-3'/>
                    <br/>
                    <button className='p-1 bg-blue-700 rounded-t-sm'  type='submit'>Criar Personagem</button>
                </form>
            </div>
        )}
        {session && data && !newPersonage && newTable &&(
             <div className='text-3xl flex flex-col justify-center align-center'>
                <button onClick={():Promise<void> => signOut()}>Logout</button>
                <h1 className='text-sm text-center'> Logado Como {data.data.Jogador}</h1>
                <h1 className='text-3xl text-center'>Adicione um novo personagem:</h1>
                <button onClick={() =>{Setnewpersonage(false)}}>X</button>
                <form onSubmit={TableSubmit} className='flex flex-col items-center'>
                    <input type='name_mesa' value={name_mesa} placeholder='Nome da mesa' onChange={(e) => {setname_mesa(e.target.value);}} className='bg-pink-200 my-3'/>
                    <br/>
                    <button className='p-1 bg-blue-700 rounded-t-sm'  type='submit'>Criar Mesa</button>
                </form>
            </div>
        )}
        {loggedwithouacount  && session && (
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl'>Seja Bem Vindo,</h1>
                <h1 className='text-2xl'>Complete seu cadastro para iniciar:</h1>
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                    <input type='name' value={name} placeholder='Name' onChange={(e) => {setName(e.target.value);}} className='bg-pink-200 my-3'/>
                    <input type='idUser' value={idUser} placeholder='NickName' onChange={(e) => {SetidUser(e.target.value);}} className='bg-pink-200 my-3'/>
                    <input type='email' placeholder='e-mail' value={email} onChange={(e) => {setEmail(e.target.value);}} className='bg-pink-200 my-3'/>
                    <br/>
                    <button className='p-1 bg-blue-700 rounded-t-sm'  type='submit'>Criar Perfil</button>
                </form>
            </div>
        )}
        {loading && (
            <div>
                <h1>Carregando</h1>
            </div>
        )}
        </div>
    ) 
}
export default ProfilePage ;