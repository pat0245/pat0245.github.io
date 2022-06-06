import Navigation from "../components/Navigation";
import Head from "next/head";
import { useEffect } from "react";
import Container from "../components/Container";

export default function Routine() {
  useEffect(() => {
    const slots = document.querySelectorAll(".day .slot");
    let counts = new Map();

    // Aggregate counts for each slot type
    slots.forEach((slot) => {
      const type = slot.getAttribute("data-type");
      const count = counts.get(type) ?? 0;
      counts.set(type, count + 1);
    });

    // Update (footer > .summary) with data
    const list = document.getElementById("summary-list");
    const sortedCounts = new Map(
      [...counts.entries()].sort((a, b) => b[1] - a[1])
    );
    sortedCounts.forEach((count, type) => {
      // % of awake time
      const percentage = (count / (24 * 7 - 8 * 7)) * 100;

      // Create slot div
      const div = document.createElement("div");
      div.classList = "slot";
      div.style.paddingInlineEnd = `calc(${percentage * 3}px + 0.5rem)`;
      if (type == "none") div.setAttribute("data-type", "leisure");
      else div.setAttribute("data-type", type);

      // Create data text
      const p = document.createElement("p");
      const span1 = document.createElement("span");
      if (type != "sleep") span1.innerText = `${percentage.toFixed(0)}%`;
      p.appendChild(span1);
      // const span2 = document.createElement("span");
      // span2.classList = "secondary";
      // span2.innerText = ` (✕ ${count})`;
      // p.appendChild(span2);

      // Fuse together
      const listItem = document.createElement("li");
      listItem.appendChild(div);
      listItem.appendChild(p);
      list.appendChild(listItem);
    });

    // Populate slots with text
    const allSlots = document.getElementsByClassName("slot");
    for (const slot of allSlots) {
      const type = slot.getAttribute("data-type");
      if (type != "none") slot.innerText = type;
    }
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Routine</title>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/routine.css" />
      </Head>

      <Navigation />

      <Container className="pt-24">
        <header className="window-padding">
          <div className="card">
            <div className="celestial-body"></div>
            <marquee>
              <h1>Welcome!</h1>
              <p className="subtitle">Have a great</p>
            </marquee>
          </div>
          <p className="secondary">
            Hello traveller! You&apos;ve stumbled upon my weekly routine. This
            page was handwritten in HTML, this page only displays properly in
            Safari Technology Preview and the latest Firefox versions. This
            whole page was designed by
          </p>
          <a
            href="https://valwal.com"
            className="text-xl scale-rotate block text-blue-600"
          >
            Valentin Walter
          </a>
        </header>
        <main className="window-padding">
          <div className="container">
            <div className="timeline">
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
              <div className="time"></div>
            </div>
            <div className="day">
              <h2>Mon</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="sleep"></div>
              </div>
            </div>
            <div className="day">
              <h2>Tue</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="meditate"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
              </div>
            </div>
            <div className="day">
              <h2>Wed</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
              </div>
            </div>
            <div className="day">
              <h2>Thu</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
              </div>
            </div>
            <div className="day">
              <h2>Fri</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot" data-type="school"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="none"></div>
              </div>
            </div>
            <div className="day">
              <h2>Sat</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="none"></div>
              </div>
            </div>
            <div className="day">
              <h2>Sun</h2>
              <div className="slots">
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="preamble"></div>
                <div className="slot" data-type="meditate"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot double" data-type="workout"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="block"></div>
                <div className="slot" data-type="none"></div>
                <div className="slot" data-type="sleep"></div>
                <div className="slot" data-type="sleep"></div>
              </div>
            </div>
          </div>
        </main>
        <footer className="window-padding">
          <div className="summary">
            <h2>Summary</h2>
            <ul id="summary-list"></ul>
            <p className="secondary">% of awake time</p>
          </div>
          <div className="legend">
            <h2>Legend</h2>
            <ul>
              <li>
                <div className="slot" data-type="leisure"></div>
                <p className="secondary">
                  &rarr; books, entertainment etc. (empty slots)
                </p>
              </li>
              <li>
                <div className="slot" data-type="preamble"></div>
                <p className="secondary">
                  &rarr; wake up &rarr; breakfast &rarr; journal
                </p>
              </li>
              <li>
                <div className="slot" data-type="block"></div>
                <p className="secondary">
                  &rarr; generic work slot/ Spending time with friends
                  (espeacially on weekends)
                </p>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
    </>
  );
}
