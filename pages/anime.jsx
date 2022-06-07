import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import PageSwitch from "../components/PageSwitch";
import Link from "next/link";
import Box from "../components/Box";

export default function anime() {
  return (
    <>
      <Head>
        <title>Pat | Animelist</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="font-bold text-2xl">Anime</h1>
        <p className="font-serif text-lg">Anime I&apos;ve watched</p>
        <ul className="pb-6">
          <li className="list-disc">
              One Piece 
          </li>
          <li className="list-disc">Attack on Titan</li>
          <li className="list-disc">
            Fairy Tale
          </li>
          <li className="list-disc">Black Clover</li>
          <li className="list-disc">Record of Ragnarok</li>
          <li className="list-disc">Demon Slayer</li>
          <li className="list-disc">Spy x Family</li>
          <li className="list-disc">Naruto</li>
          <li className="list-disc">Dragonball</li>
        </ul>
        <PageSwitch right="tvshows" color="MediumPurple" />
        <Link href="/tv">
          <a>
            <Box color="Lightblue" body="return to tv" />
          </a>
        </Link>
      </Container>
    </>
  );
}
