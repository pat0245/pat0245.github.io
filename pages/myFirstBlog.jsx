import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";


export default function Blog() {
  return (
    <>
      <Head>
        <title>Pat | </title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1>My first Blog</h1>
        <p>
          As told before My name is Patrick Maier and I am currently 17 years
          old(as I am writing this)
        </p>
      </Container>
    </>
  );
}
