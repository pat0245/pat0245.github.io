import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import PageSwitch from "../components/PageSwitch";
import Box from "../components/Box";
import Link from "next/link";

export default function tvshows() {
  return (
    <>
      <Head>
        <title>Pat | Tvshows</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="font-bold text-2xl">Tv shows</h1>
        <p className="font-serif text-lg">Shows I&apos;ve watched</p>
        <ul className="pb-6">
          <li className="list-disc">
           Moon Knight
          </li>
          <li className="list-disc">Starwars: The Clone Wars</li>
          <li className="list-disc">
            Stranger Things (haven&apos;t watched the last 2 Sessions yet)
          </li>
        </ul>
        <PageSwitch left="Anime" color="MediumPurple" />
        <Link href="/tv">
            <a>
                <Box color="Lightblue" body="return to tv"/>
            </a>
        </Link>
      </Container>
    </>
  );
}
