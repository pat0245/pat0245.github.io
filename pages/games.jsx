import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/index.module.css";
import PageSwitch from "../components/PageSwitch";

export default function games() {
  return (
    <>
      <Head>
        <title>Pat | Gamelist</title>
        <meta name="description" content="Patrick Maier&apos;s website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className={styles.container}>
        <h1>Games</h1>
        <p>Games I&apos;ve played</p>
        <ul>
          <li>Elden RIng</li>
          <li>Darksouls Remastered</li>
          <li>Code Vein</li>
        </ul>
        <ul>
          <li>The Legend of Zelde: Breath of the Wild </li>
          <li>The Legend of Zelda: Ocarina of Time</li>
        </ul>
        <ul>
          <li>Pokemon: X</li>
          <li>Pokemon: Omega Ruby</li>
        </ul>
        <ul>
          <li>Genshin Impact</li>
        </ul>
        <PageSwitch right="Movies" color="MediumPurple"/>
      </Container>
    </>
  );
}
