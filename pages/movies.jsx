import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/index.module.css";
import PageSwitch from "../components/PageSwitch";

export default function movies() {
  return (
    <>
      <Head>
        <title>Pat | Movielist</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className={styles.container}>
          
          <PageSwitch left="Games" right="Books"/>
      </Container>
    </>
  );
}
