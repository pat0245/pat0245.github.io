import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Box from "../components/Box";
import Link from "next/link";

export default function mangas() {
  return (
    <>
      <Head>
        <title>Pat | Mangas</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <p className="font-bold text-xl">Mangas I&apos;ve read</p>
        <p className="font-serif text-lg pb-4">
          Unlike books I were able to read a lot of mangas
        </p>
        <p className="font-serif text-sm">Currently reading:</p>
        <ul className="pb-3 pt-2">
          <li className="list-disc">One Piece</li>
          <li className="list-disc">Berserk</li>
          <li className="list-disc">Record Of Ragnarok</li>
          <li className="list-disc">Vinlad Saga</li>
          <li className="list-disc">Chaninsaw Man</li>
        </ul>
        <p className="font-serif text-sm">Done reading</p>
        <ul className="pb-3 pt-2">
          <li className="list-disc">Attack On Titan (Shingeki no kyojin)</li>
          <li className="list-disc">Demon Slayer(Kimetsu no Yaiba)</li>
          <li className="list-disc">Tokyo Revengers</li>
          <li className="list-disc">Solo Leveling</li>
        </ul>
        <p className="font-serif text-sm">On my "want to read list"</p>
        <ul className="pb-6 pt-2">
          <li className="list-disc">Jujutsu Kaisen</li>
        </ul>
        <Link href="/books">
          <a>
            <Box color="lightblue" body="Return to books" />
          </a>
        </Link>
      </Container>
    </>
  );
}
