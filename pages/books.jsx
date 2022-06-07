import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import PageSwitch from "../components/PageSwitch";
import Box from "../components/Box";
import Link from "next/link";

export default function books() {
  return (
    <>
      <Head>
        <title>Pat | Booklist</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <p className="font-bold text-xl">Books I&apos;ve read</p>
        <p className="font-serif text-lg">
          I haven't read a lot but I&apos;m currently trying to change that ;)
        </p>
        <Link href="/mangas">
          <a>
            <Box color="LightCoral" title="Manga" body="somehow I were able to read a lot of them"/>
          </a>
        </Link>
        <p className="font-serif text-sm">Currently reading:</p>
        <ul className="pb-3 pt-2">
          <li className="list-disc">Ready Player One</li>
        </ul>
        <p className="font-serif text-sm">Done reading</p>
        <ul className="pb-3 pt-2">
          <li className="list-disc"></li>
        </ul>
        <p className="font-serif text-sm">On my "want to read list"</p>
        <ul className="pb-6 pt-2">
          <li className="list-disc">The Witcher</li>
        </ul>
        <PageSwitch left="Movies" right="TV" color="MediumSlateBlue" />
      </Container>
    </>
  );
}
