import Head from "next/head";
import { FaGamepad } from "react-icons/fa";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>GridGame</title>
      </Head>
      
      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        marginTop: '5rem',
      }}>
        <FaGamepad size={200}/>
        <h2 style={{
          fontSize: '3rem',
          maxWidth: 648,
        }}>
          Conheça tudo sobre o mundo dos games em um só lugar!
        </h2>
      </div>
    </>
  );
}
