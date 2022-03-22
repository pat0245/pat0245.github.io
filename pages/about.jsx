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
        <p>
          My nmae is Patrick Maier and I am here since 2005, to be more preciese
          the 2nd april 2005
        </p>
        <h3>Movies, Games etc I've enjoyed!</h3>
        <ul>
          <li>
            <a href="#" className={styles.list}>
              Games
            </a>
          </li>
          <li>
            <a href="#" className={styles.list}>
              Movies
            </a>
          </li>
          <li>
            <a href="#" className={styles.list}>
              Books
            </a>
          </li>
          <li>
            <a href="#" className={styles.list}>
              TV
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
