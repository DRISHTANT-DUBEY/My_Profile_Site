import { useEffect, useRef } from 'react'

const projects = [
  {
    num: '01 / 03',
    title: 'ContextFlow',
    desc: 'Visual context management for LLM apps. Visualize and optimize token usage across complex prompt chains in real time.',
    tags: ['Python', 'FastAPI', 'React', 'LLM'],
    href: '#',
    svg: (
      <svg width="100%" height="110" viewBox="0 0 370 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="80" height="86" rx="8" fill="rgba(44,194,149,0.07)" stroke="rgba(44,194,149,0.14)" strokeWidth="0.8"/>
        <rect x="109" y="22" width="80" height="66" rx="8" fill="rgba(44,194,149,0.05)" stroke="rgba(44,194,149,0.1)" strokeWidth="0.8"/>
        <rect x="204" y="12" width="80" height="86" rx="8" fill="rgba(44,194,149,0.07)" stroke="rgba(44,194,149,0.14)" strokeWidth="0.8"/>
        <rect x="299" y="28" width="58" height="54" rx="8" fill="rgba(44,194,149,0.1)" stroke="rgba(44,194,149,0.2)" strokeWidth="0.8"/>
        <text x="24" y="58" fill="rgba(44,194,149,0.5)" fontFamily="monospace" fontSize="7.5">system</text>
        <text x="119" y="60" fill="rgba(44,194,149,0.38)" fontFamily="monospace" fontSize="7.5">context</text>
        <text x="214" y="58" fill="rgba(44,194,149,0.5)" fontFamily="monospace" fontSize="7.5">user</text>
        <text x="307" y="58" fill="rgba(44,194,149,0.6)" fontFamily="monospace" fontSize="7.5">out</text>
        <path d="M94 55 L109 55" stroke="rgba(44,194,149,0.2)" strokeWidth="1"/>
        <path d="M189 55 L204 55" stroke="rgba(44,194,149,0.2)" strokeWidth="1"/>
        <path d="M284 55 L299 55" stroke="rgba(44,194,149,0.2)" strokeWidth="1"/>
        <rect x="14" y="76" width="50" height="3" rx="1.5" fill="rgba(44,194,149,0.15)"/>
        <rect x="14" y="83" width="35" height="3" rx="1.5" fill="rgba(44,194,149,0.08)"/>
      </svg>
    ),
  },
  {
    num: '02 / 03',
    title: 'DevPath',
    desc: 'AI-powered CS learning platform generating personalized coding exercises, explanations and learning paths for engineering students in India.',
    tags: ['Next.js', 'OpenAI', 'MongoDB', 'Education'],
    href: '#',
    svg: (
      <svg width="100%" height="110" viewBox="0 0 430 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="120" height="86" rx="8" fill="rgba(44,194,149,0.06)" stroke="rgba(44,194,149,0.1)" strokeWidth="0.8"/>
        <rect x="26" y="24" width="80" height="5" rx="2.5" fill="rgba(44,194,149,0.2)"/>
        <rect x="26" y="34" width="60" height="3.5" rx="1.75" fill="rgba(44,194,149,0.1)"/>
        <rect x="26" y="44" width="60" height="3.5" rx="1.75" fill="rgba(44,194,149,0.07)"/>
        <rect x="26" y="54" width="60" height="3.5" rx="1.75" fill="rgba(44,194,149,0.1)"/>
        <rect x="26" y="64" width="45" height="3.5" rx="1.75" fill="rgba(44,194,149,0.07)"/>
        <rect x="149" y="12" width="130" height="86" rx="8" fill="rgba(44,194,149,0.04)" stroke="rgba(44,194,149,0.08)" strokeWidth="0.8"/>
        <text x="160" y="32" fill="rgba(44,194,149,0.4)" fontFamily="monospace" fontSize="8">Lesson 3 · Arrays</text>
        <rect x="160" y="40" width="100" height="3" rx="1.5" fill="rgba(44,194,149,0.12)"/>
        <rect x="160" y="48" width="80" height="3" rx="1.5" fill="rgba(44,194,149,0.08)"/>
        <rect x="160" y="68" width="108" height="22" rx="6" fill="rgba(44,194,149,0.14)" stroke="rgba(44,194,149,0.22)" strokeWidth="0.8"/>
        <text x="172" y="82" fill="rgba(44,194,149,0.65)" fontFamily="monospace" fontSize="8">✦ AI Explain</text>
        <rect x="294" y="12" width="122" height="86" rx="8" fill="rgba(44,194,149,0.05)" stroke="rgba(44,194,149,0.1)" strokeWidth="0.8"/>
        <text x="305" y="32" fill="rgba(44,194,149,0.38)" fontFamily="monospace" fontSize="7.5">Progress</text>
        <rect x="305" y="40" width="90" height="5" rx="2.5" fill="rgba(44,194,149,0.08)"/>
        <rect x="305" y="40" width="62" height="5" rx="2.5" fill="rgba(44,194,149,0.28)"/>
        <text x="305" y="58" fill="rgba(44,194,149,0.3)" fontFamily="monospace" fontSize="7">68% complete</text>
      </svg>
    ),
  },
  {
    num: '03 / 03',
    title: 'PromptForge',
    desc: 'Open-source prompt engineering workspace with version control, A/B testing, and performance analytics for AI teams moving fast.',
    tags: ['TypeScript', 'LangChain', 'Vercel', 'OSS'],
    href: '#',
    svg: (
      <svg width="100%" height="110" viewBox="0 0 440 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="102" height="86" rx="8" fill="rgba(44,194,149,0.05)" stroke="rgba(44,194,149,0.1)" strokeWidth="0.8"/>
        <rect x="24" y="24" width="72" height="5" rx="2.5" fill="rgba(44,194,149,0.18)"/>
        <rect x="24" y="36" width="55" height="3.5" rx="1.75" fill="rgba(44,194,149,0.1)"/>
        <rect x="24" y="44" width="55" height="3.5" rx="1.75" fill="rgba(44,194,149,0.07)"/>
        <rect x="24" y="52" width="55" height="3.5" rx="1.75" fill="rgba(44,194,149,0.12)"/>
        <rect x="24" y="60" width="55" height="3.5" rx="1.75" fill="rgba(44,194,149,0.07)"/>
        <rect x="24" y="68" width="40" height="3.5" rx="1.75" fill="rgba(44,194,149,0.1)"/>
        <rect x="130" y="12" width="296" height="54" rx="8" fill="rgba(44,194,149,0.04)" stroke="rgba(44,194,149,0.1)" strokeWidth="0.8"/>
        <text x="142" y="30" fill="rgba(44,194,149,0.4)" fontFamily="monospace" fontSize="7.5">v2.4.1 — production</text>
        <rect x="142" y="38" width="230" height="4" rx="2" fill="rgba(44,194,149,0.14)"/>
        <rect x="142" y="47" width="180" height="4" rx="2" fill="rgba(44,194,149,0.08)"/>
        <rect x="142" y="56" width="140" height="4" rx="2" fill="rgba(44,194,149,0.08)"/>
        <rect x="130" y="76" width="140" height="22" rx="7" fill="rgba(44,194,149,0.07)" stroke="rgba(44,194,149,0.12)" strokeWidth="0.8"/>
        <rect x="282" y="76" width="144" height="22" rx="7" fill="rgba(44,194,149,0.13)" stroke="rgba(44,194,149,0.22)" strokeWidth="0.8"/>
        <text x="155" y="90" fill="rgba(44,194,149,0.4)" fontFamily="monospace" fontSize="8">Run A/B Test</text>
        <text x="296" y="90" fill="rgba(44,194,149,0.62)" fontFamily="monospace" fontSize="8">Analytics →</text>
      </svg>
    ),
  },
]

export default function Projects() {
  const stageRef = useRef(null)

  useEffect(() => {
    const cards = stageRef.current?.querySelectorAll('.pcard')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sect" id="projects">
      <div className="sect__inner">
        <div className="sect__head reveal">
          <div>
            <div className="sect__badge">Selected Work</div>
            <h2 className="sect__title">PROJECTS</h2>
          </div>
          <div className="sect__right">
            <p className="sect__desc">
              Building AI systems and developer tools that challenge how we think about software in the age of LLMs.
            </p>
            <a href="#" className="sect__link">View all projects →</a>
          </div>
        </div>

        <div className="proj-stage" ref={stageRef}>
          <div className="proj-stage__glow" />
          {projects.map((p) => (
            <div key={p.title} className="pcard">
              <div className="pcard__header">
                <span className="pcard__num">{p.num}</span>
                <a href={p.href} className="pcard__arrow">↗</a>
              </div>
              <div className="pcard__title">{p.title}</div>
              <div className="pcard__desc">{p.desc}</div>
              <div className="pcard__preview">{p.svg}</div>
              <div className="pcard__tags">
                {p.tags.map((t) => (
                  <span key={t} className="ptag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
