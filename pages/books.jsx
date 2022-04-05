import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/index.module.css";

export default function books() {
  return (
    <>
      <Head>
        <title>Pat | Booklist</title>
        <meta name="description" content="Patrick Maier&apos;s website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className={styles.container}></Container>
    </>
  );
}
