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
              title="My first blog"
              body="The first blog where I tell you more about me"
            />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Box color="lightblue" title="test2" body="test2" />
          </a>
        </Link>
      </Container>
    </>
  );
}
