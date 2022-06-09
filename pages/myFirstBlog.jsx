import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Link from "next/link";


export default function FirstBlog() {
  return (
    <>
      <Head>
        <title>Pat | First Blog</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="text-xl font-bold">Something about me</h1>
        <h2 className="font-serif">(9th June 2022)</h2>
        <p className="mt-2">
          My name is Patrick Maier and as I&apos;m writing this first blog
          I&apos;m 17 years old. Born on 2nd April 2005 in the south of Germany.
        </p>
        <p>
          Recently I were thinking pretty much about my life and prior decisions
          I made. The conclusion I made was that I&apos;have wasted a lot of
          time doing nothing and with that I mean nothing. Scrolling everyday
          many hours through Tik Tok or other social media. Not doing anything
          for school or my future.
        </p>
        <p>
          But I want to change that from now on. Currently I have a short school
          break. And I&apos;ve been testing a lot of things such as new workout
          schedules or a
        </p>
        <Link href="/routine">
          <a className="text-blue-500 text-lg">Time schedule.</a>
        </Link>
        <p>
          A good friend of mine suggested me to do a list with goals... goals
          for the next 2 week, month, years, etc. I had to think a lot about it
          and to be honest this list was one of the best things that could
          happen now. Fighting with the thought of being useless to everyone,
          not being capeble of doing anything and not having any motivation for
          anything. Usually I&apos;m doing nothing in school breaks, except for
          playing games and doing nothing the whole day. But the current break
          is different. Finally learning new things, such as the programming
          language Swift, workout with 100% energy and finally working on this
          website.
        </p>
        <p>
          I think one of the most important decision I made was that I
          don&apos;t want to regret anymore and with that I have to become more
          confident. I know easier said than done. But I am Serious. &quot;When
          it feels scary to jump in, that is exactly when you to jump. Otherwise
          you end up staying in the same place forever&quot;(A Most Violent
          Year) This is one of my favourite quotes of all time. And I want to
          live after this thought...
        </p>
      </Container>
    </>
  );
}
