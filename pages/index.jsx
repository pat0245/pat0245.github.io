import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Box from "../components/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pat | Home</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className={styles.container}>
        <h1>Hello</h1>
        <p>and welcome to my website!</p>
        <ul>
          <li>
            <a href="/about" className={styles.linkList}>
              more about me
            </a>
          </li>
        </ul>
        <h1>Blog</h1>
        <p>in this block I will tell you something about my life and stuff.</p>
        <div className={styles.box}>
          <a href="#">
            <Box title="More about me" body="I was born..." />
          </a>
        </div>
        <h1>Special Thanks!</h1>
        <p>to the person who thought me how to programm and indpired this website:</p>
        <a href="https:/valwal.com">Valentin Walter</a>
      </Container>
    </>
  );
}
