import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Box from "../components/Box";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Pat | About</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="text-xl font-bold">Blog</h1>
        <Link href="/myFirstBlog">
          <a>
            <Box
              color="lightblue"
              title="My first blog (9th June 2022)"
              body="Some decision I recently made"
            />
          </a>
        </Link>
        <Link href="/inspiration">
          <a>
            <Box
              color="lightblue"
              title="Inspiration"
              body="People who inspired me"
            />
          </a>
        </Link>
        <Link href="/gym">
          <a>
            <Box color="lightblue" title="Gym" body="My Gym story" />
          </a>
        </Link>
        <Link href="/human">
          <a>
            <Box
              color="lightblue"
              title="Human"
              body="My talk about the human"
            />
          </a>
        </Link>
      </Container>
    </>
  );
}
