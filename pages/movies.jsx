import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
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
      <Container className="p-24">
      <PageSwitch left="Games" right="Books" color="MediumOrchid" />
      </Container>
    </>
  );
}
