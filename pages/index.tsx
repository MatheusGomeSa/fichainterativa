import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import api from '../utils/api';
import Link from 'next/link';
import Image from 'next/image';

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

    const [ Show, Setshow ] = useState(false);

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
                            <div><a className='font-lato'>
                                <svg className='fill-current text-tertiary' xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 200 228" version="1.1">
                                    <g id="surface1">
                                    <path  d="M 82.398438 18.632812 C 74.699219 27.203125 62.5 40.957031 55.101562 49.226562 L 41.601562 64.273438 L 98 64.574219 C 129 64.671875 154.601562 64.574219 154.898438 64.273438 C 155.199219 63.875 155 63.378906 154.398438 62.980469 C 153.800781 62.582031 146.199219 54.210938 137.5 44.34375 C 102.300781 4.582031 100.800781 2.988281 98.5 2.988281 C 96.800781 2.988281 92.601562 7.074219 82.398438 18.632812 Z M 82.398438 18.632812 "/>
                                    <path  d="M 45.5 29.496094 C 27.898438 39.660156 12 48.628906 10.300781 49.527344 C 6.398438 51.519531 6.199219 52.515625 9.300781 53.710938 C 10.5 54.210938 15.101562 56.203125 19.5 58.296875 C 32.898438 64.574219 30.699219 65.769531 54.5 38.863281 C 65.898438 26.007812 76 14.648438 76.800781 13.652344 C 77.601562 12.753906 78.101562 11.757812 77.898438 11.558594 C 77.699219 11.261719 63.101562 19.433594 45.5 29.496094 Z M 45.5 29.496094 "/>
                                    <path  d="M 118 11.558594 C 118 12.058594 137.699219 34.777344 139.101562 35.875 C 139.398438 36.171875 143 40.160156 147 44.84375 C 151 49.527344 156.199219 55.304688 158.601562 57.796875 C 161 60.289062 163 62.582031 163 62.980469 C 163 63.476562 163.699219 63.777344 164.5 63.777344 C 166.5 63.777344 190.398438 53.214844 190.699219 52.117188 C 190.898438 51.71875 185.5 48.230469 178.699219 44.445312 C 172 40.65625 156.101562 31.589844 143.398438 24.214844 C 122.101562 12.058594 118 9.964844 118 11.558594 Z M 118 11.558594 "/>
                                    <path  d="M 1 101.742188 C 1 134.628906 1.300781 144.59375 2.199219 144.292969 C 2.898438 143.996094 3.699219 142.800781 4.101562 141.402344 C 4.5 140.109375 6.199219 135.226562 7.898438 130.542969 C 15.300781 109.816406 19.300781 98.453125 22.601562 88.6875 C 24.601562 82.910156 26.5 77.527344 27 76.730469 C 27.398438 75.933594 28 74.039062 28.300781 72.644531 C 29 69.855469 28.300781 69.457031 8.800781 60.886719 C 0.300781 57.101562 1 53.511719 1 101.742188 Z M 1 101.742188 "/>
                                    <path  d="M 182 63.578125 C 176.199219 66.167969 170.699219 68.757812 169.699219 69.355469 C 168 70.351562 168.601562 72.546875 178.601562 100.746094 C 184.398438 117.386719 190.398438 134.328125 191.800781 138.214844 C 193.101562 142.199219 194.601562 145.289062 194.898438 145.089844 C 195.199219 144.890625 195.398438 125.359375 195.199219 101.742188 C 195 68.558594 194.699219 58.792969 193.699219 58.792969 C 193.101562 58.894531 187.800781 60.984375 182 63.578125 Z M 182 63.578125 "/>
                                    <path  d="M 40 72.746094 C 40 73.242188 42.601562 78.226562 45.800781 83.90625 C 51.398438 93.671875 63.601562 115.195312 67.699219 122.570312 C 68.800781 124.464844 73.398438 132.535156 78 140.40625 C 82.5 148.28125 87.5 157.050781 89.101562 159.839844 C 90.800781 162.628906 93.300781 167.3125 94.699219 170.203125 C 96.199219 172.992188 98 175.382812 98.699219 175.382812 C 99.398438 175.382812 100 174.984375 100 174.488281 C 100 173.988281 103.101562 168.308594 106.800781 161.832031 C 110.5 155.253906 115.898438 145.886719 118.699219 141.003906 C 131.601562 117.984375 142.800781 98.453125 147.199219 90.882812 C 149.800781 86.398438 152 82.410156 152 82.113281 C 152 81.914062 153.101562 79.917969 154.5 77.726562 C 155.898438 75.535156 157 73.34375 157 72.746094 C 157 72.046875 137.601562 71.75 98.5 71.75 C 62.199219 71.75 40 72.148438 40 72.746094 Z M 40 72.746094 "/>
                                    <path  d="M 32 81.414062 C 30.300781 86.695312 23 107.722656 21.898438 110.113281 C 21.5 111.210938 18.101562 120.578125 14.5 131.039062 C 10.800781 141.402344 6.699219 153.0625 5.398438 156.75 C 4.101562 160.535156 3 164.125 3 164.820312 C 3 165.617188 4.601562 166.417969 6.699219 166.714844 C 10.5 167.214844 30.300781 170.003906 51.5 172.992188 C 79.800781 177.078125 91.199219 178.472656 91.699219 178.074219 C 91.800781 177.875 89.800781 173.988281 87.199219 169.304688 C 81.199219 158.941406 63.398438 127.550781 48.699219 101.644531 C 33 73.839844 34 75.035156 32 81.414062 Z M 32 81.414062 "/>
                                    <path  d="M 161.300781 78.921875 C 160.5 80.019531 147.5 102.640625 131 132.035156 C 129.800781 134.230469 125.300781 142.101562 121 149.476562 C 116.800781 156.851562 111.398438 166.417969 109.101562 170.699219 L 104.800781 178.574219 L 109.601562 177.976562 C 118 176.878906 128.101562 175.484375 138 173.988281 C 143.199219 173.191406 150 172.296875 153 171.898438 C 173 169.703125 194 166.117188 194 164.921875 C 194 164.324219 192.199219 158.644531 189.898438 152.367188 C 187.699219 146.085938 185.5 139.910156 185 138.515625 C 184.5 137.117188 181.898438 129.546875 179 121.574219 C 173.101562 104.933594 166.300781 85.699219 164.699219 80.917969 C 163.601562 77.429688 162.800781 77.03125 161.300781 78.921875 Z M 161.300781 78.921875 "/>
                                    <path  d="M 19.101562 176.878906 C 19.898438 177.675781 24.199219 180.464844 28.601562 182.957031 C 41.101562 190.234375 49.601562 195.117188 53.199219 197.207031 C 55 198.203125 64.699219 203.785156 74.800781 209.664062 C 84.898438 215.445312 93.601562 220.226562 94.101562 220.226562 C 94.699219 220.226562 94.898438 213.449219 94.800781 203.085938 L 94.5 185.949219 L 87 184.75 C 79.5 183.554688 76.101562 183.058594 48.5 179.371094 C 40.300781 178.273438 30.5 176.878906 26.800781 176.382812 C 17.699219 174.984375 17.300781 175.085938 19.101562 176.878906 Z M 19.101562 176.878906 "/>
                                    <path  d="M 161 177.476562 C 148.699219 179.371094 129.601562 182.0625 111.300781 184.453125 L 102 185.75 L 102 202.988281 C 102 212.453125 102.398438 220.226562 102.898438 220.226562 C 103.699219 220.226562 131.398438 204.582031 139.199219 199.601562 C 141.300781 198.402344 143.199219 197.308594 143.398438 197.308594 C 143.601562 197.308594 148.5 194.617188 154.199219 191.230469 C 159.898438 187.839844 167 183.753906 170 182.0625 C 177.800781 177.777344 179 176.980469 179 176.183594 C 179 175.085938 175.398438 175.382812 161 177.476562 Z M 161 177.476562 "/>
                                    </g>
                                </svg>
                            </a></div>
                        </div>
                        <div className='flex mr-24 items-center'>
                            <button onClick={()=> Setshow(!Show)}><div className='flex mr-4'><Image
                                        className='rounded-full'
                                        src="/rpg/eu.jpg"
                                        alt="Picture of the author"
                                        width={50}
                                        height={50}
                                        />
                                        </div></button>
                        </div>
                    </div>

            <div className={`${ Show ? 'h-0' : 'hidden'} absolute rounded-lg bg-primary shadow-2xl`} style={{border: '1px solid #ccc',right:'1.5rem',width:'14rem',height:'20rem', top:'5rem'}}>
                                        <div className='flex flex-col justify-items-center'>
                                            <div className='flex justify-center my-5'><Image
                                            className='rounded-full no-rea'
                                            src="/rpg/eu.jpg"
                                            alt="Picture of the author"
                                            width={120}
                                            height={120}
                                            />
                                            </div>
                                            <div className='flex justify-center items-center py-2 my-3 ' style={{borderTop:'1px solid #ccc'}}><span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                                <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                                            </svg>
                                            </span></div>
                                            <div className='flex justify-center py-2 my-3' style={{borderTop:'1px solid #ccc'}}><button onClick={():Promise<void> => signOut()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="2rem" viewBox="0 0 24 24" width="2rem" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
                                            </button></div>
                                        </div>
                    </div>
                    <div className='ml-24 mr-24 flex-no-wrap'>
                    <div className='flex justify-between mt-14 my-10  text-2xl font-lato'><h3>Seus personagens:</h3><button className='rounded-full bg-secondary w-10 h-10' onClick={() =>{Setnewpersonage(true)}}>+</button></div>
                    <section className = 'flex w-full h-nw font-roboto'>
                    {data.data.personagens.map(use => <div className='flex-shrink mx-4 w-1/5 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'style={{height:'25vh'}}><Link href={`${process.env.NEXT_PUBLIC_URL}/character/${use[1]}`} prefetch={false}><a>
                    <div className='bg-tertiary px-6 py-1 rounded-t-lg overflow-hidden' style={{height:'30%',border: '1px solid gray'}}><b>{use[0]}</b><p className='ms:hidden'>Mesa: {use[2]}</p></div>
                    <div className='flex justify-end bg-personagem bg-cover bg-center rounded-b-lg bg-local'style={{height:'70%',border: '1px solid gray'}}><button className='self-end m-2 px-2 bg-danger rounded-full text-white' onClick={() =>delData(use[1])}>X</button></div>
                    </a></Link></div>)}

                </section>
                <div className='flex justify-between my-10 text-2xl text-center font-lato'>
                    <h3>Suas Mesas:</h3><button className='rounded-full bg-secondary w-10 h-10' onClick={() =>{SetnewTable(true)}}>+</button></div>
                <section className='flex w-full flex-no-wrap font-roboto'>
                    {data.data.mesas.map(use => <div className='flex-shrink mx-4 w-1/5 rounded-lg shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' style={{height:'25vh'}}>
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