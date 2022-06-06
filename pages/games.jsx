import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import PageSwitch from "../components/PageSwitch";

export default function games() {
  return (
    <>
      <Head>
        <title>Pat | Gamelist</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="font-bold text-2xl">Games</h1>
        <p className="font-serif text-lg">Games I&apos;ve played</p>
        <p className="font-serif text-sm pb-4">
          these games are roughly sorted by rank
        </p>
        <ul>
          <li className="list-disc">Starwars: Jedi Fallen Order</li>
          <li className="list-disc">Elden Ring</li>
          <li className="list-disc">
            The Legend of Zelde: Breath of the Wild{" "}
          </li>
          <li className="list-disc">Darksouls Remastered</li>
          <li className="list-disc">Code Vein</li>
        </ul>
        <ul className="pt-2">
          <li className="list-disc">The Legend of Zelda: Ocarina of Time</li>
        </ul>
        <ul className="pt-2">
          <li className="list-disc">Genshin Impact</li>
        </ul>
        <ul className="pt-2">
          <li className="list-disc">Pokemon: Omega Ruby</li>
          <li className="list-disc">Pokemon: X</li>
        </ul>
        <PageSwitch right="Movies" color="MediumPurple" />
      </Container>
    </>
  );
}
