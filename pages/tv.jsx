import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/tv.module.css"
import Box from "../components/Box";


export default function TV() {
   return (
       <>
      <Head>
           <title>Pat | TVlist</title>
           <meta name="description" content="Patrick Maier's website" />
           <link rel="icon" href="/favicon.ico" />
       </Head>

       <Navigation />

       <Container className={styles.container}>
           <h1>TV</h1>
           <div>
               <a href="#">
                   <Box color="LightCoral" title="Anime" body="I've watched a lot so this will be a long list"/>
               </a>
               <a href="#">
                   <Box color="LightCoral" title="TV Shows" body="TV shows either animated or not" />
               </a>
           </div>
       </Container>    
      </>

   );
}