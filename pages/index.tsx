import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {NextPage} from 'next'
import { signIn, signOut, useSession } from 'next-auth/client'

const IndexPage: NextPage = () =>{
  const [ session, loading ] = useSession()
  
  return (
    <div className={styles.container}>
      {!session && <>
        <div className="text-3xl">
        Not signed in <br/>
        <button onClick={():Promise<void> => signIn('auth0')}>Sign in</button></div>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={():Promise<void> => signOut()}>Sign out</button>
      </>}
    </div>
  )
}

export default IndexPage;
