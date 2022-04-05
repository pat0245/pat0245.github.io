import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Box from "../components/Box";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pat | Home</title>
        <meta name="description" content="Patrick Maier&apos;s website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className={styles.container}>
        <h1>Hello</h1>
        <p>and welcome to my website!!</p>
        <ul>
          <li>
            <Link href="/about">
              <a className={styles.linkList}>more about me</a>
            </Link>
          </li>
        </ul>
        <h1>Blog</h1>
        <p>in this blog I will tell you something about my life and stuff.</p>
        <div className={styles.box}>
          <Link href="#">
            <a>
              <Box
                color="antiquewhite"
                title="More about me"
                body="My first blog where I tell you something about me"
              />
            </a>
          </Link>
        </div>
        <h1>Special Thanks!</h1>
        <p>
          to the person who thought me how to programm and indpired this
          website:
        </p>
        <Link href="https://valwal.com">
          <a className={styles.specialLink}>Valentin Walter</a>
        </Link>
      </Container>
    </>
  );
}
