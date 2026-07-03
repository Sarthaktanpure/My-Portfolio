import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPinned,
  MessageSquare,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";
import {
  contactLinks,
  dsa,
  experience,
  flagshipProject,
  hackathons,
  projects,
  skills,
  site,
  stats,
} from "../data/content";
import { SectionReveal } from "./SectionReveal";

const MotionArticle = motion.article;
const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Chip({ children, accent = false }) {
  return <span className={accent ? "chip chip--accent" : "chip"}>{children}</span>;
}

function SectionKicker({ text, icon }) {
  const Icon = icon;

  return (
    <div className="section-kicker">
      <Icon size={14} />
      <span>{text}</span>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const hasLive = Boolean(project.liveHref);
  const hasGithub = Boolean(project.githubHref);

  return (
    <MotionArticle className="project-card" variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }}>
      <div className={`project-card__visual project-card__visual--${project.accent}`}>
        <div className="project-card__screen">
          <div className="project-card__screen-top">
            <span />
            <span />
            <span />
          </div>
          <div className="project-card__screen-body">
            <p>{project.tag}</p>
            <h3>{project.name}</h3>
            <div className="project-card__signal">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="project-card__body">
        <p className="project-card__eyebrow">{project.tag}</p>
        <h3>{project.name}</h3>
        <p className="project-card__summary">{project.summary}</p>

        <div className="project-card__chips">
          {project.stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>

        <div className="project-card__links">
          {hasLive ? (
            <a href={project.liveHref} target="_blank" rel="noreferrer">
              Live demo <ArrowRight size={15} />
            </a>
          ) : (
            <span className="project-card__disabled">Live demo unavailable</span>
          )}

          {hasGithub ? (
            <a href={project.githubHref} target="_blank" rel="noreferrer">
              GitHub <Github size={15} />
            </a>
          ) : (
            <span className="project-card__disabled">GitHub private</span>
          )}
        </div>
      </div>
    </MotionArticle>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 760 220" role="img" aria-label="MedVision AI architecture diagram" className="architecture-diagram">
      <defs>
        <linearGradient id="pipelineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#pipelineGlow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M140 110H240" />
        <path d="M300 110H400" />
        <path d="M460 110H560" />
        <path d="M620 110H700" />
        <path d="M280 110l10 -8m-10 8l10 8" />
        <path d="M440 110l10 -8m-10 8l10 8" />
        <path d="M600 110l10 -8m-10 8l10 8" />
      </g>
      {[
        { x: 40, label: "React Upload" },
        { x: 200, label: "Node / Express" },
        { x: 360, label: "REST Bridge" },
        { x: 520, label: "Flask Microservice" },
        { x: 640, label: "CNN + Grad-CAM" },
      ].map((node, index) => (
        <g key={node.label}>
          <rect x={node.x} y="72" rx="20" ry="20" width="140" height="76" className="architecture-diagram__node" />
          <text x={node.x + 70} y="104" textAnchor="middle" className="architecture-diagram__label">
            {node.label}
          </text>
          <text x={node.x + 70} y="126" textAnchor="middle" className="architecture-diagram__index">
            0{index + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

function HeatmapCard() {
  return (
    <div className="heatmap-card">
      <div className="heatmap-card__scan">
        <div className="heatmap-card__overlay heatmap-card__overlay--one" />
        <div className="heatmap-card__overlay heatmap-card__overlay--two" />
        <div className="heatmap-card__overlay heatmap-card__overlay--three" />
        <div className="heatmap-card__frame" />
      </div>
      <div className="heatmap-card__meta">
        <p>Grad-CAM explainability</p>
        <span>Heatmap overlay turns a black-box prediction into a readable signal.</span>
      </div>
    </div>
  );
}

function DsaTreeDiagram() {
  return (
    <div className="dsa-visual-card">
      <div className="panel__title-row">
        <Sparkles size={18} />
        <h3>Tree anatomy</h3>
      </div>
      <svg viewBox="0 0 620 420" role="img" aria-label="Binary tree relationships diagram" className="dsa-diagram">
        <defs>
          <linearGradient id="treeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="treeNode" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.92)" />
            <stop offset="100%" stopColor="rgba(255, 107, 53, 0.18)" />
          </linearGradient>
        </defs>

        <rect x="12" y="12" width="596" height="396" rx="24" className="dsa-diagram__frame" />
        <path d="M310 82V108" className="dsa-diagram__guide" />
        <path d="M310 122L212 188" className="dsa-diagram__edge" />
        <path d="M310 122L408 188" className="dsa-diagram__edge" />
        <path d="M212 206L150 286" className="dsa-diagram__edge" />
        <path d="M212 206L274 286" className="dsa-diagram__edge" />
        <path d="M408 206L344 286" className="dsa-diagram__edge" />
        <path d="M408 206L476 286" className="dsa-diagram__edge" />
        <path d="M150 286L118 338" className="dsa-diagram__edge dsa-diagram__edge--soft" />
        <path d="M150 286L184 338" className="dsa-diagram__edge dsa-diagram__edge--soft" />

        <path d="M94 305L214 305L158 208Z" className="dsa-diagram__subtree" />

        {[
          { x: 310, y: 122, label: "A" },
          { x: 212, y: 206, label: "B" },
          { x: 408, y: 206, label: "C" },
          { x: 150, y: 286, label: "D" },
          { x: 274, y: 286, label: "E" },
          { x: 344, y: 286, label: "F" },
          { x: 476, y: 286, label: "G" },
          { x: 118, y: 338, label: "H" },
          { x: 184, y: 338, label: "I" },
          { x: 274, y: 338, label: "J" },
        ].map((node) => (
          <g key={node.label} className="dsa-diagram__node-group">
            <circle cx={node.x} cy={node.y} r="22" className="dsa-diagram__node" />
            <text x={node.x} y={node.y + 7} textAnchor="middle" className="dsa-diagram__node-label">
              {node.label}
            </text>
          </g>
        ))}

        <g className="dsa-diagram__callout dsa-diagram__callout--top">
          <text x="310" y="44" textAnchor="middle">Root</text>
          <path d="M310 52V80" className="dsa-diagram__callout-line" />
        </g>
        <g className="dsa-diagram__callout dsa-diagram__callout--left">
          <text x="62" y="202">Parent node</text>
          <path d="M168 196H104" className="dsa-diagram__callout-line" />
        </g>
        <g className="dsa-diagram__callout dsa-diagram__callout--left-lower">
          <text x="34" y="252">Child node</text>
          <path d="M136 246H100" className="dsa-diagram__callout-line" />
        </g>
        <g className="dsa-diagram__callout dsa-diagram__callout--bottom">
          <text x="160" y="390" textAnchor="middle">Subtree</text>
          <path d="M160 352V366" className="dsa-diagram__callout-line" />
        </g>
        <g className="dsa-diagram__callout dsa-diagram__callout--right">
          <text x="490" y="252">Sibling nodes</text>
          <path d="M430 246H468" className="dsa-diagram__callout-line dsa-diagram__callout-line--dashed" />
        </g>
        <g className="dsa-diagram__levels">
          <text x="540" y="112">Level 0</text>
          <text x="540" y="170">Level 1</text>
          <text x="540" y="228">Level 2</text>
          <text x="540" y="286">Level 3</text>
        </g>
      </svg>
    </div>
  );
}

function DsaGraphDiagram() {
  return (
    <div className="dsa-visual-card">
      <div className="panel__title-row">
        <BrainCircuit size={18} />
        <h3>Graph connectivity</h3>
      </div>
      <svg viewBox="0 0 620 420" role="img" aria-label="Weighted graph connectivity diagram" className="dsa-diagram">
        <defs>
          <linearGradient id="graphStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a92ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8dc1ff" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="graphNode" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
            <stop offset="100%" stopColor="rgba(74,146,255,0.18)" />
          </linearGradient>
        </defs>

        <rect x="12" y="12" width="596" height="396" rx="24" className="dsa-diagram__frame dsa-diagram__frame--graph" />

        <g className="dsa-diagram__graph-lines">
          <path d="M310 70L156 136" className="dsa-diagram__graph-edge" />
          <path d="M310 70L444 152" className="dsa-diagram__graph-edge" />
          <path d="M310 70L308 178" className="dsa-diagram__graph-edge" />
          <path d="M156 136L126 282" className="dsa-diagram__graph-edge" />
          <path d="M156 136L220 232" className="dsa-diagram__graph-edge" />
          <path d="M220 232L308 322" className="dsa-diagram__graph-edge" />
          <path d="M308 178L308 322" className="dsa-diagram__graph-edge" />
          <path d="M444 152L308 322" className="dsa-diagram__graph-edge" />
          <path d="M126 282L308 322" className="dsa-diagram__graph-edge" />
          <path d="M220 232L444 152" className="dsa-diagram__graph-edge dsa-diagram__graph-edge--accent" />
        </g>

        {[
          { x: 310, y: 70, label: "V1" },
          { x: 156, y: 136, label: "V5" },
          { x: 444, y: 152, label: "V2" },
          { x: 308, y: 178, label: "V6" },
          { x: 126, y: 282, label: "V4" },
          { x: 220, y: 232, label: "V7" },
          { x: 308, y: 322, label: "V3" },
        ].map((node) => (
          <g key={node.label} className="dsa-diagram__node-group">
            <circle cx={node.x} cy={node.y} r="24" className="dsa-diagram__node dsa-diagram__node--graph" />
            <text x={node.x} y={node.y + 8} textAnchor="middle" className="dsa-diagram__node-label dsa-diagram__node-label--graph">
              {node.label}
            </text>
          </g>
        ))}

        <text x="52" y="362" className="dsa-diagram__caption">
          Connected graph with shared paths and a few alternate routes.
        </text>
      </svg>
    </div>
  );
}

export function Sections() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const submitContact = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    );

    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="page-shell">
      <SectionReveal id="home" className="section hero-section">
        <div className="hero-grid">
          <MotionDiv className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <SectionKicker text="Signal / Precision / Shipping" icon={Sparkles} />
            <h1>
              <span className="hero-name">{site.name}</span>
              <span className="hero-role">{site.tagline}</span>
            </h1>
            <p className="hero-positioning">{site.positioning}</p>

            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                View Work <ArrowRight size={16} />
              </a>
              <a className="button button--secondary" href={site.resumeHref} target="_blank" rel="noreferrer">
                View resume <ExternalLink size={16} />
              </a>
            </div>

            <div className="hero-contacts">
              <a href={`mailto:${site.contactEmail}`}>
                <Mail size={15} /> {site.contactEmail}
              </a>
              <a href={`tel:${site.contactPhone.replace(/\s+/g, "")}`}>
                <Phone size={15} /> {site.contactPhone}
              </a>
              <a href={site.linkedInHref} target="_blank" rel="noreferrer">
                <ExternalLink size={15} /> LinkedIn
              </a>
            </div>
          </MotionDiv>

          <MotionDiv
            className="hero-panel panel"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-panel__top">
              <div>
                <p>Deployment summary</p>
                <h2>Engineering-grade portfolio</h2>
              </div>
              <span className="hero-panel__status">Live</span>
            </div>

            <div className="hero-panel__grid">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>

            <div className="hero-panel__trace">
              <div>
                <span>Current focus</span>
                <strong>Explainable AI, real-time systems, and production delivery</strong>
              </div>
              <div className="hero-panel__trace-line">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </MotionDiv>
        </div>
      </SectionReveal>

      <SectionReveal
        id="about"
        className="section"
        eyebrow="About"
        title="A builder who cares about proof, not just polish."
        description="I combine strong fundamentals, contest-ready DSA, and practical freelance delivery to build systems that feel polished in the browser and dependable in production."
      >
        <div className="about-grid">
          <div className="panel">
            <p className="panel__label">Education</p>
            <div className="panel__title-row">
              <GraduationCap size={18} />
              <h3>Rank 1 in cohort at PREC</h3>
            </div>
            <p className="panel__body">{site.education}</p>
          </div>

          <div className="panel">
            <p className="panel__label">Working style</p>
            <div className="panel__title-row">
              <Rocket size={18} />
              <h3>Ship, iterate, explain</h3>
            </div>
            <p className="panel__body">
              I like bringing structure to messy product ideas: define the flow, pick the right stack, ship a stable version,
              then explain the result clearly to the person using it.
            </p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        id="skills"
        className="section"
        eyebrow="Skills"
        title="A focused stack, grouped by how I actually work."
        description="Not a wall of logos. Just the technologies I reach for when I need to build, deploy, and support a real product."
      >
        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.title} className="panel skill-panel">
              <p className="panel__label">{group.title}</p>
              <h3>{group.title}</h3>
              <p className="panel__body">{group.note}</p>
              <div className="chip-row">
                {group.items.map((item) => (
                  <Chip key={item} accent={item === "React.js" || item === "Java"}>
                    {item}
                  </Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal
        id="medvision"
        className="section flagship-section"
        eyebrow="Flagship Project"
        title={flagshipProject.name}
        description={flagshipProject.shortName}
      >
        <div className="flagship-layout">
          <div className="panel flagship-copy">
            <p className="panel__body">{flagshipProject.summary}</p>

            <div className="flagship-bullets">
              {flagshipProject.bullets.map((bullet) => (
                <div key={bullet} className="flagship-bullet">
                  <ShieldCheck size={16} />
                  <p>{bullet}</p>
                </div>
              ))}
            </div>

            <div className="chip-row">
              {flagshipProject.stack.map((item) => (
                <Chip key={item} accent={item === "Grad-CAM" || item === "TensorFlow"}>
                  {item}
                </Chip>
              ))}
            </div>

            <a className="text-link" href={flagshipProject.githubHref} target="_blank" rel="noreferrer">
              GitHub repository <ArrowRight size={16} />
            </a>
          </div>

          <div className="flagship-visual">
            <div className="panel">
              <p className="panel__label">Architecture</p>
              <ArchitectureDiagram />
            </div>
            <div className="panel">
              <p className="panel__label">Explainability motif</p>
              <HeatmapCard />
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        id="projects"
        className="section"
        eyebrow="Other Projects"
        title="Production-minded builds across trading, commerce, video, and freelance delivery."
        description="Each project card keeps the implementation details close to the outcome so the narrative stays concrete."
      >
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </SectionReveal>

      <SectionReveal
        id="dsa"
        className="section"
        eyebrow="DSA / Problem Solving"
        title={dsa.headline}
        description={dsa.detail}
      >
        <div className="dsa-layout">
          <div className="panel dsa-card">
            <div className="panel__title-row">
              <BrainCircuit size={18} />
              <h3>Contest-ready Java problem solving</h3>
            </div>
            <p className="panel__body">
              I use problem solving as a design constraint practice: break the problem down, reason under time pressure,
              and keep the implementation clean enough to trust in a contest.
            </p>
            <a className="text-link" href={dsa.href} target="_blank" rel="noreferrer">
              Open LeetCode profile <ArrowRight size={16} />
            </a>
          </div>

          <div className="dsa-visuals">
            <DsaTreeDiagram />
            <DsaGraphDiagram />

            <div className="panel contribution-card dsa-visual-card dsa-visual-card--wide">
              <div className="contribution-grid" aria-label="DSA activity heatmap">
                {dsa.grid.flatMap((row, rowIndex) =>
                  row.map((cell, cellIndex) => (
                    <span
                      key={`${rowIndex}-${cellIndex}`}
                      className={cell ? "contribution-grid__cell contribution-grid__cell--active" : "contribution-grid__cell"}
                    />
                  )),
                )}
              </div>
              <div className="contribution-card__legend">
                <span>Arrays</span>
                <span>Graphs</span>
                <span>DP</span>
                <span>Trees</span>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        id="hackathons"
        className="section"
        eyebrow="Hackathons"
        title="Fast execution in competitive environments."
        description="These results show I can go from idea to implementation while the clock is still running."
      >
        <div className="timeline-grid">
          {hackathons.map((hackathon, index) => (
            <article key={hackathon.name} className="panel timeline-card">
              <div className="timeline-card__index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{hackathon.name}</h3>
              <p className="timeline-card__result">{hackathon.result}</p>
              <p className="panel__body">{hackathon.detail}</p>
            </article>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal
        id="experience"
        className="section"
        eyebrow="Experience"
        title={experience.title}
        description={`${experience.company} · ${experience.period}`}
      >
        <div className="panel experience-card">
          <div>
            <p className="panel__label">Delivery story</p>
            <h3>{experience.company}</h3>
            <p className="panel__body">{experience.detail}</p>
          </div>
          <div className="experience-card__highlights">
            {experience.highlights.map((item) => (
              <div key={item} className="experience-card__item">
                <ChevronRight size={16} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        id="contact"
        className="section contact-section"
        eyebrow="Contact"
        title="Let's build something that earns trust."
        description="Whether it's a product role, collaboration, or client work, I'm happy to talk about systems, shipping, and explainable AI."
      >
        <div className="contact-grid">
          <form className="panel contact-form" onSubmit={submitContact}>
            <div className="field-grid">
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="field">
              <span>Message</span>
              <textarea
                rows={6}
                value={formState.message}
                onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell me what you're building..."
              />
            </label>

            <button className="button button--primary" type="submit">
              Send message <MessageSquare size={16} />
            </button>
          </form>

          <aside className="panel contact-aside">
            <p className="panel__label">Direct links</p>
            <div className="contact-links">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>

            <div className="contact-actions">
              <a className="button button--secondary" href={site.resumeHref} download>
                Download resume
              </a>
              <a className="button button--ghost" href={site.githubHref} target="_blank" rel="noreferrer">
                GitHub <Github size={16} />
              </a>
            </div>

            <div className="contact-note">
              <MapPinned size={16} />
              <p>India-based, open to remote roles and high-trust product teams.</p>
            </div>
          </aside>
        </div>
      </SectionReveal>

      <footer className="site-footer">
        <div>
          <strong>{site.name}</strong>
          <p>Built with Vite, React, Framer Motion, and a signal-first design system.</p>
        </div>
        <a href="#home">
          Back to top <ArrowRight size={16} />
        </a>
      </footer>
    </main>
  );
}
