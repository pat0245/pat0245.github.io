import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/about.module.css";
import Box from "../components/Box";

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
          My name is Patrick Maier and I am here since 2005, to be more precise
          the 2nd april 2005
        </p>
        <h3>Movies, Games etc I've enjoyed!</h3>
        <a href="/games" className={styles.list}>
          <Box
            color="lavender"
            title="Games"
            body="Games I've played and enjoyed"
          />
        </a>
        <a href="/movies" className={styles.list}>
          <Box color="lavender" title="Movies" body="My favourite movies" />
        </a>
        <a href="/books" className={styles.list}>
          <Box
            color="lavender"
            title="Books"
            body="My bookslist, even though I don't read much"
          />
        </a>
        <a href="/tv" className={styles.list}>
          <Box color="lavender" title="TV" body="My favourite TV series" />
        </a>
      </Container>
    </>
  );
}
