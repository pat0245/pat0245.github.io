import Link from "next/link";

import { useState, useEffect } from "react";

export default function Navigation(props) {
  const [expanded, setExpanded] = useState(props.expanded);

  useEffect(() => {}, [expanded]);

  return (
    <nav className="">
      <button onClick={() => setExpanded(!expanded)}></button>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
