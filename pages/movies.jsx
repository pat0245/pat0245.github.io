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
        <p className="text-xl font-bold">Movies</p>
        <p className="font-serif text-lg">
          Some of the movies I&apos;ve watched:
        </p>
        <p className="font-serif text-sm">
          My Top 3 (not sorted and might change from time to time):
        </p>
        <ul className="pb-6 pt-5">
          <li className="list-disc">Ready Player One</li>
          <li className="list-disc">Starwars: Revenge of the Sith</li>
          <li className="list-disc">The Dark Knight Trilogy</li>
        </ul>
        <ul className="pb-6 pt-4">
          <li className="list-disk">The Amazing Spiderman</li>
          <li className="list-disk">The Amazing Spiderman 2</li>
          <li className="list-disk">The Batman</li>
          <li className="list-disk">Zack Synder&apos;s Justice League</li>
          <li className="list-disk">American Psycho</li>
          <li className="list-disc">Avengers: Endgame</li>
          <li className="list-disc">Avengers: Infinity War</li>
          <li className="list-disc">The Avengers</li>
          <li className="list-disc">Avengers: Age of Ultron</li>
          <li className="list-disc">Iron Man</li>
          <li className="list-disc">iron Man 3</li>
          <li className="list-disc">Iron Man 2</li>
          <li className="list-disc">Black Panther</li>
          <li className="list-disc">Captain America: The First Avenger</li>
        </ul>
        <PageSwitch left="Games" right="Books" color="MediumOrchid" />
      </Container>
    </>
  );
}
