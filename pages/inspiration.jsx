import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Head from "next/head";
import Link from "next/link";

export default function Inspiration() {
  return (
    <>
      <Head>
        <title>Pat | Inspiration</title>
        <meta name="description" content="Patrick Maier's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Container className="p-24">
        <h1 className="text-xl font-bold">Inspiration</h1>
        <h2 className="font-serif">(9th June 2022)</h2>
        <p className="mt-2 mb-2">
          There are many people who inspired me in different sections of my
          life. And in this blog I&apos;ll talk a lot about the problems I had
          and still have and today I want to talk about the people who had the
          greatest impact.
        </p>
        <Link href="https://valwal.com">
          <a className="text-xl text-blue-500">Valentin Walter</a>
        </Link>
        <p>
          One of my dearest friends. I know him since kindergarten and
          we&apos;ve always been together. In school and in private. I never
          were the most social person. Rather one who avoid people. In the 5th
          and 6th grade he was even one of the 2 friends I had. And I still
          appreciate that he never abandoned me. I were an awful person at that
          time and he is still there. And I&apos;m very thankful that he was
          always there for me... If you somehow read this: Vielen Dank Vale!
        </p>
        <p>
          He was also the one who helped me with programming and webdeveloping.
        </p>
        <h2 className="text-xl mt-2">Denis Gabriel Costan</h2>
        <p>
          Unfortunately he has no website, so I cannot link him. He is one of my
          &quot;newer&quot; friends. But still one of my dearest friends. In 8th
          grade he was my neighbour in school. I still wasn&apos;t the most
          social person and felt uncomfortable speaking to other people except
          my friends. 8th grade was also the first class without my elemntary
          school friends. Due to one leaving the school and the other going in
          the other &quot;course&quot;. We also had our complications at the
          beginning and i still werer a awful person at that time. Anger issues,
          annoying people for fun. But we still managed to become friends. He
          showed me the fun side of the life. And if you are seeing this:
          I&apos;m sorry for everything in the past and I&apos;m thankful for
          you being kind to me ;)
        </p>
        <h2 className="text-xl mt-2">Zyzz</h2>
        <p>
          Zyzz, a name everyone who is a little more involved with wight
          training has heard of. Zyzz is not a person. It is a lifestyle. To put
          it in a nutshell, getting a aesthetic body and enjoying youre life
          with parties and stuff. The Man behind this lifestsyle was Aziz
          Shavershian. Sadly he died even before I could start to workout... He
          inspired more people to go to the gym, than any other person. He was
          not the reason I started, but the reason I started it again and now
          doing it serious. My training started I think 2-3 years before it was
          due to me being unhappy about my weight and strength... But more about
          this an an other and seperate blog. Zyzz was able convice many
          insecure teenagers to start with the gym. But most importantly he
          didn&apos;t care about other people opionion. He was thin, was being
          bullied and changed that. He had a goal and he reached this goal.
        </p>
        <h2 className="text-xl mt-2">Myself</h2>
        <p>
          People who inspire you are very valuable but in the end you should be
          the one who inspires you. It is not easy what I am trying to tell you
          but I&apos;ll try my best. You are your biggest enemy. You constantly
          try to beat your &quot;past self&quot; to become better, to not repeat
          the same mistakes, to not regret. There are many reasons why you want
          to be better than in the past. No human is perfect, we are evolving
          with every second. (if you want to learn more about my theory and
          opionion about the human you can visit my &quot;human blog&quot;) Our
          past self is constantly motivating you. If you can&apos;t inspire
          yourself other people will also fail to inspire you. They can only
          inspire you if you want to be inspired, if you want to change
          something. Everything is in your mind. If you think that you are
          useless, let me tell you you are not. Unless you think that you are.
          You will automaticly do less, so stop think this crap. Your attitude
          is defining who you are. I might have drifted apart from what I wanted
          to say but remember: You are the only one who can define who you are.
        </p>
        <h2 className="text-xl mt-2">Andrew & Tristan Tate</h2>
        <p>
          The Tate-Brothers you either like or dislike them. And infact they are
          saying much crap... but on the other hand there are many truths and
          facts. Lets take Andrews example with the rich man. If you see someone
          with a really expensive car at a gas station, do you think that they
          went to college and studied something? No, this is mostly the last
          thing you would think. Rich dad or something illegal/ uncommon would
          be your first thought. And it is true. If you want to have lots of
          money, getting a 9-5 job is one of the worst things to do. Yeah if you
          invest the money you have lots of it when you are old... but one
          question, would you rather drive your expensive car at 65 or at 25?
          Another thing is if you work a 9-5 job you won&apos;t have much time
          for your family. I personally want to watch my kids grow up and spend
          lots of time with them and my future wife.
        </p>
      </Container>
    </>
  );
}
