import { content } from "./content";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Nav from "./components/Nav";
import Highlight from "./components/Highlight";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav
        links={[
          { label: "Objectives", href: "#objectives" },
          { label: "Why", href: "#why" },
          { label: "Method", href: "#method" },
          { label: "Conclusions", href: "#conclusions" },
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
        <Section id="objectives" title="Objectives">
          <ul>
            {content.objectives.map((t) => (
              <li key={t}>
                <Highlight text={t} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="why" title="Why Is It Important?">
          <ul>
            {content.why.map((t) => (
              <li key={t}>
                <Highlight text={t} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="method" title="How Does It Work?">
          <div>
            {content.method.map((m) => (
              <p key={m}>
                <Highlight text={m} />
              </p>
            ))}
          </div>
        </Section>

        <Section id="conclusions" title="Our Main Conclusions">
          <ul>
            {content.conclusions.map((r) => (
              <li key={r}>
                <Highlight text={r} />
              </li>
            ))}
          </ul>
          <div className="grid cols-3" style={{ marginTop: "0.75rem" }}></div>
        </Section>

        <Section id="contributions" title="Contributions">
          <ul>
            {content.contributions.map((c) => (
              <li key={c}>
                <Highlight text={c} />
              </li>
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
