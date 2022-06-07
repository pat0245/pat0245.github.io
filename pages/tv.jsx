import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Box from "../components/Box";
import Link from "next/link";
import PageSwitch from "../components/PageSwitch";

export default function TV() {
  return (
    <>
      <Head>
        <title>Pat | TVlist</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className="p-24">
        <h1 className="font-bold text-2xl">TV</h1>
        <div>
          <Link href="/anime">
            <a>
              <Box
                color="LightCoral"
                title="Anime"
                body=""
              />
            </a>
          </Link>
          <Link href="/tvshows">
            <a>
              <Box
                color="LightCoral"
                title="TV Shows"
                body=""
              />
            </a>
          </Link>
        </div>
        <PageSwitch left="Books" color="Olive" />
      </Container>
    </>
  );
}
