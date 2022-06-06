import { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Layout(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navigation
        expanded={expanded}
        setExpanded={(expanded) => setExpanded(expanded)}
      />
      <Menu menuExpanded={`${expanded}`} />
      <div className="" data-menu-expanded={expanded}>
        {props.children}
      </div>
    </>
  );
}

function Menu(props) {
  return (
    <div className="" data-menu-expanded={props.menuExpanded}>
      <div className="bg-purple-400">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}
