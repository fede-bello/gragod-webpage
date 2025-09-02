import { content } from "./content";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav
        links={[
          { label: "Objectives", href: "#tldr" },
          { label: "Why", href: "#why" },
          { label: "Method", href: "#method" },
          { label: "Results", href: "#results" },
          { label: "Contributions", href: "#contributions" },
          { label: "Authors", href: "#authors" },
        ]}
      />
      <Hero
        title={content.title}
        subtitle={`${content.subtitle}`}
        ctas={content.ctas}
      />
      <main id="main" className="container" role="main">
        <Section id="tldr" title="Objectives">
          <ul>
            {content.tldr.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section id="why" title="Why is it important?">
          <ul>
            {content.why.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section id="method" title="Method overview">
          <div>
            {content.method.map((m) => (
              <p key={m}>{m}</p>
            ))}
          </div>
        </Section>

        <Section id="results" title="Results at a glance">
          <ul>
            {content.resultsHighlights.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div className="grid cols-3" style={{ marginTop: "0.75rem" }}></div>
        </Section>

        <Section id="contributions" title="Contributions">
          <ul>
            {content.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section id="authors" title="Authors">
          <p>{content.authors}</p>
          {content.affiliation ? (
            <p className="muted">{content.affiliation}</p>
          ) : null}
          {content.contacts ? (
            <p className="muted">Contact: {content.contacts.join(" · ")}</p>
          ) : null}
        </Section>
      </main>

      <footer role="contentinfo">
        <div className="container">
          <small className="muted">© {new Date().getFullYear()} GraGOD.</small>
        </div>
      </footer>
    </>
  );
}
