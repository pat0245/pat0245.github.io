import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Link from "next/link";

export default function Inspiration() {
  return (
    <>
      <Head>
        <title>Pat | Human</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="text-3xl font-bold pt-2">The Human</h1>
        <p className="pt-2">
          Welcome to my talk about the human. I am neither an expert nor have I
          read or learned much about the human but here I&apos;m trying to talk
          about human problems and stuff.
        </p>
        <h2 className="text-xl pt-2 pb-2 font-bold">
          Evolving and Revolving(5th August 2022)
        </h2>
        <p>
          The human is a very unique thing on earth. We somehow evolved from the
          animals and to this very day we are still evolving. In fact we are
          constantly evolving. Not our physical appearance but our mind is
          changing. But we have to differ betweem two cases of change. Evolving
          and Revolving. When we Revolve we do change, but only for a short
          time. For example it is the urge to go to the gym for physical change.
          But in the end you do it for a short time and after that you are the
          same. This action goes by motivation. Motvation is good but it will
          not last forever. To evolve one has to chnage this motivation into
          discipline. Evolving is the change forever. There is no way back after
          you have evolved. Revolving is a common &quot;problem&quot; among the
          human. We want to be better and we are trying to change as hard as
          possible. But in the end this motivation will go away. And you have to
          use energy for your goals. Many people will stop chasing their goals
          in this moment. But if you really want to achieve it you have to use
          energy. No one said it would be easy. In fact it is hard... very hard.
          But if you are able to inspire yourself you will be the person who
          always wanted to be.
        </p>
        <h2 className="text-xl pt-2 pb-2 font-bold">Love (8th August 2022)</h2>
        <p>
          One of the most complicated feelings is love. Many animals
          &quot;use&quot; any partner to &quot;reproduce&quot; their kind. We
          humans on the other hand used to search for our partner, which whom we
          want to spend our whole life and with whom we wanted to
          &quot;make&quot; our descendants. I used the term &quot;used to
          search&quot; on purpose beacause these kind of releationships are very
          rare nowadays. We used to find our &quot;better half&quot; and even
          when they fought. They always found a way to fix the releationships. I
          am not an expert in this territory, since I weren&apos;t in a love
          releationship yet. But to me it seems that many couples aren&apos;t
          fighting for their releationship. I don&apos;t want to bad talk some
          couples. There are still some exceptions. But sadly those are very
          rare. Now lets talk about love in general. It is very difficult to
          describe. And every human is feeling it in a different way. For me it
          is mostly a feeling in the stomache. Many people know it as butterflys
          in one&apos;s stomache. At the same time it is a horrible and a good
          feeling. But these &quot;butterflys&quot; are getting less with the
          time you spend with the this &quot;special&quot; person. Love has it
          good and bad sides. It is able to grant you more motivation and
          strength. But most importantly it is able to get you happines and
          comfort. On the other hand we have a state after one has lost their
          love. &quot;Heartbroken&quot;. The intensity of this feeling can
          differ. But I would that emptyness is a good way to describe it.
          People are dealing with this differently and there is no generall cure
          for it... Love is very dangerous. It is able to change humans and
          force to do bad stuff. But on the other hand it is beautiful. It can
          change humans in the positive way and let them do things, which were
          impossible for them before.
        </p>
      </Container>
    </>
  );
}
