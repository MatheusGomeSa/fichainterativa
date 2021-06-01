import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import api from '../utils/api';
import Link from 'next/link';
import Image from 'next/image';

/* interface newPersonage{
    personagem:string,
    jogador:string,
    idUser:string,
	emailUser:string,
	mesa:string,
	idMesa:string
} */

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
    const data1 = {
        Jogador:name,
        idUser:idUser,
        email:session?.user.email
    }
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
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users`, data1);
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
        <div className='bg-primary h-screen w-screen'>
        {!session && (
            <div>
                <h1>
                    Para acessar a página é necessário estar logado
                </h1>
                <br/>
                <button onClick={():Promise<void> => signIn('auth0')}>Login</button>
            </div> 
        )}
        {session && data && !newPersonage && !newTable &&(
             <div className='bg-primary h-screen w-screen'>
                    <div className='flex justify-between bg-secondary py-2 items-center'>
                        <div className='ml-24'>
                            <div><a className='font-lato'><Image 
                            src="/rpg/dice.png"
                            width={45}
                            height={50}
                            /></a></div>
                        </div>
                        <div className='flex mr-24 items-center'>
                            <a><div className='flex mr-4'><Image
                                        className='rounded-full no-rea'
                                        src="/rpg/eu.jpg"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        />
                                        </div></a>
                        </div>
                    </div>
                    <div className="absolute rounded-lg bg-gray-500 hidden" style={{border: '1px solid gray',right:'1.5rem',width:'14rem',height:'20rem', top:'5rem'}}>
                                        <div className='flex flex-col justify-items-center'>
                                            <div className='flex justify-center my-5'><Image
                                            className='rounded-full no-rea'
                                            src="/rpg/eu.jpg"
                                            alt="Picture of the author"
                                            width={120}
                                            height={120}
                                            />
                                            </div>
                                            <div className='flex justify-center mx-2 py-2 my-3 rounded-lg' style={{border: '1px solid gray'}}><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                                            </svg>
                                            </span></div>
                                            <div className='flex justify-center mx-2 py-2 my-3 rounded-lg' style={{border: '1px solid gray'}}><button onClick={():Promise<void> => signOut()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="2rem" viewBox="0 0 24 24" width="2rem" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
                                            </button></div>
                                        </div>
                    </div>
                    <div className='ml-24 mr-24 flex-no-wrap'>
                    <div className='flex justify-between my-16 font-lato'><h3>Seus personagens:</h3><button onClick={() =>{Setnewpersonage(true)}}>+</button></div>
                    <section className = 'flex w-full h-nw font-roboto'>
                    {data.data.personagens.map(use => <div className='flex-shrink mx-4 w-1/5 rounded-lg shadow-2xl'style={{height:'25vh'}}><Link href={`${process.env.NEXT_PUBLIC_URL}/character/${use[1]}`} prefetch={false}><a>
                    <div className='bg-tertiary px-6 py-1 rounded-t-lg overflow-hidden' style={{height:'30%',border: '1px solid gray'}}><b>{use[0]}</b><p className='ms:hidden'>Mesa: {use[2]}</p></div>
                    <div className='flex justify-end bg-personagem bg-cover bg-center rounded-b-lg bg-local'style={{height:'70%',border: '1px solid gray'}}><button className='self-end m-2 px-2 bg-danger rounded-full text-white' onClick={() =>delData(use[1])}>X</button></div>
                    </a></Link></div>)}

                </section>
                <div className='flex justify-between my-12 text-center font-lato'>
                    <h3>Suas Mesas:</h3><button onClick={() =>{SetnewTable(true)}}>+</button></div>
                <section className='flex w-full flex-no-wrap font-roboto'>
                    {data.data.mesas.map(use => <div className='flex-shrink mx-4 w-1/5 rounded-lg shadow-2xl' style={{height:'25vh'}}>
                                                <Link href={`${process.env.NEXT_PUBLIC_URL}/table/${use[2]}`} prefetch={false}><a>
                                                <div className='bg-tertiary px-6 py-1 rounded-t-lg overflow-hidden  ' style={{height:'30%',border: '1px solid gray'}}><b>{use[1]}</b></div>
                                                <div className='flex justify-end bg-personagem bg-cover bg-center rounded-b-lg bg-local'style={{height:'70%',border: '1px solid gray'}}><button className='self-end m-2 px-2 bg-danger rounded-full text-white' onClick={() =>delData2(use[2])}>X</button></div></a></Link></div>)}
                </section>
                </div>
            </div>
        )}
        {session && data && newPersonage && !newTable &&(
             <div>
                <button onClick={():Promise<void> => signOut()}>Logout</button>
                <h1> Logado Como {data.data.Jogador}</h1>
                <h1>Adicione um novo personagem:</h1>
                <button onClick={() =>{Setnewpersonage(false)}}>X</button>
                <form onSubmit={PersonSubmit}>
                    <input type='name_personage' value={name_personage} placeholder='Nome do personagem' onChange={(e) => {setname_personage(e.target.value);}}     />
                    <input type='mesa_name' value={mesa_name} placeholder='Nome da mesa' onChange={(e) => {setmesa_name(e.target.value);}}/>
                    <input type='mesa_id' placeholder='id da mesa' value={mesa_id} onChange={(e) => {setmesa_id(e.target.value);}}/>
                    <br/>
                    <button type='submit'>Criar Personagem</button>
                </form>
            </div>
        )}
        {session && data && !newPersonage && newTable &&(
             <div>
                <button onClick={():Promise<void> => signOut()}>Logout</button>
                <h1> Logado Como {data.data.Jogador}</h1>
                <h1>Adicione um novo personagem:</h1>
                <button onClick={() =>{Setnewpersonage(false)}}>X</button>
                <form onSubmit={TableSubmit}>
                    <input type='name_mesa' value={name_mesa} placeholder='Nome da mesa' onChange={(e) => {setname_mesa(e.target.value);}}/>
                    <br/>
                    <button type='submit'>Criar Mesa</button>
                </form>
            </div>
        )}
        {loggedwithouacount  && session && (
            <div>
                <h1>Seja Bem Vindo,</h1>
                <h1>Complete seu cadastro para iniciar:</h1>
                <form onSubmit={handleSubmit}>
                    <input type='name' value={name} placeholder='Name' onChange={(e) => {setName(e.target.value);}}/>
                    <input type='idUser' value={idUser} placeholder='NickName' onChange={(e) => {SetidUser(e.target.value);}}/>
                    <br/>
                    <button type='submit'>Criar Perfil</button>
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