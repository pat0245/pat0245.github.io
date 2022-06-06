import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Box from "../components/Box";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Pat | About</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container className="pt-24">
        <h1 className="font-bold text-xl ">About</h1>
        <p className="text-lg">
          My name is Patrick Maier and I am here since 2005, to be more precise
          the 2nd april 2005
        </p>
        <Link href="/routine">
          <a>
            <Box color="lightblue" title="My Routine" />
          </a>
        </Link>
        <h3>Movies, Games etc I&apos;ve enjoyed!</h3>
        <Link href="/games">
          <a className="">
            <Box
              color="lavender"
              title="Games"
              body="Games I've played and enjoyed"
            />
          </a>
        </Link>
        <Link href="/movies">
          <a className="">
            <Box color="lavender" title="Movies" body="My favourite movies" />
          </a>
        </Link>
        <Link href="/books">
          <a className="">
            <Box
              color="lavender"
              title="Books"
              body="My bookslist, even though I don't read much"
            />
          </a>
        </Link>
        <Link href="/tv">
          <a className="">
            <Box color="lavender" title="TV" body="My favourite TV series" />
          </a>
        </Link>
      </Container>
    </>
  );
}
