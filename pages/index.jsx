import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Box from "../components/Box";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pat | Home</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navigation />

        <Container className="mt-20 mx-4">
          <h1 className="font-bold text-xl">Hello</h1>
          <p className="text-l">and welcome to my website!!</p>
          <ul className="list-disc mx-4 rotate-scale origin-left">
            <li>
              <Link href="/about">
                <a className="underline text-blue-900">more about me</a>
              </Link>
            </li>
          </ul>
          <h1 className="font-bold text-xl">Blog</h1>
          <p>in this blog I will tell you something about my life and stuff.</p>
          <div className="">
            <Link href="/myFirstBlog">
              <a className="m-2">
                <Box 
                  color="antiquewhite"
                  title="More about me"
                  body="My first blog where I tell you something about me"
                />
              </a>
            </Link>
          </div>
          <h1 className="font-bold text-xl">Special Thanks!</h1>
          <p>
            to the person who thought me how to programm and inspired this
            website:
          </p>
          <Link href="https://valwal.com">
            <a className="text-xl scale-rotate block text-blue-600">Valentin Walter</a>
          </Link>
        </Container>
    </>
  );
}
