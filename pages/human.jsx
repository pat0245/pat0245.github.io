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
        <h2 className="text-xl pt-2 pb-2 font-bold">Evolving and Revolving</h2>
        <p>
          The human is a very unique thing on earth. We somehow evolved from the animals and 
          to this very day we are still evolving. In fact we are constantly evolving. Not our physical appearance but 
          our mind is changing. But we have to differ betweem two cases of change. Evolving and Revolving. When we Revolve 
          we do change, but only for a short time. For example it is the urge to go to the gym for physical change. But in the end 
          you do it for a short time and after that you are the same. This action goes by motivation. Motvation is good but it 
          will not last forever. To evolve one has to chnage this motivation into discipline. Evolving is the change forever. 
          There is no way back after you have evolved. Revolving is a common &quot;problem&quot; among the human. We want to be better
          and we are trying to change as hard as possible. But in the end this motivation will go away. And you have to use 
          energy for your goals. Many people will stop chasing their goals in this moment. But if you really want to achieve it you have 
          to use energy. No one said it would be easy. In fact it is hard... very hard. But if you are able to inspire yourself you will 
          be the person who always wanted to be.
        </p>
      </Container>
    </>
  );
}
