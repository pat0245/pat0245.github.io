import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import styles from "../styles/blog.module.css";
import Box from "../components/Box";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Pat | About</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container classname={styles.container}>
        <h1>Blog</h1>

        <a href="#">
          <Box color="lightblue" title="test" body="test" />
        </a>
        <a href="#">
          <Box color="lightblue" title="test2" body="test2" />
        </a>
      </Container>
    </>
  );
}