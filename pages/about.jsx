import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Pat | About</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className={styles.container}>
        <h1>About</h1>
      </Container>
    </>
  );
}
