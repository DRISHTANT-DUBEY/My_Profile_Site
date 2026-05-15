import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38C40lUupBDvu1bisFv555G8mlE/hf_20260514_170613_2370e216-946e-425f-8b43-677e801665d0.mp4'

const pills = ['AI & LLM Tooling', 'Open Source', 'CS Education', 'Developer Tools', 'India 🇮🇳']

const socialLinks = [
  { id: 'sGh', label: 'GitHub',   href: 'https://github.com/DRISHTANT-DUBEY' },
  { id: 'sLi', label: 'LinkedIn', href: '#' },
  { id: 'sTw', label: 'Twitter',  href: '#' },
]

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const onCanPlay = () => vid.classList.add('ready')
    vid.addEventListener('canplay', onCanPlay)
    const timer = setTimeout(() => vid.classList.add('ready'), 2500)
    return () => {
      vid.removeEventListener('canplay', onCanPlay)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="hero__overlay" />
      <div className="hero__vignette" />

      {/* Location badge */}
      <div className="loc-badge">
        <div className="loc-badge__dot" />
        INDIA · AVAILABLE FOR WORK
      </div>

      {/* Main content */}
      <div className="hero__body">
        <div className="hero__left">
          <div className="hero__label">
            Software Engineer
            <span className="hero__label-sep" />
            3+ Years
            <span className="hero__label-sep" />
            India
          </div>

          <h1 className="hero__name" id="heroName">
            Drishtant
            <br />
            <em>Dubey.</em>
          </h1>

          <p className="hero__tagline">
            <strong>Building innovative, disruptive AI tooling</strong> — and educational
            content that empowers the next generation of engineers across India and beyond.
          </p>

          <div className="hero__pills">
            {pills.map((p) => (
              <div key={p} className="pill">{p}</div>
            ))}
          </div>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary" id="cta1">
              View Projects <span className="btn__arr">→</span>
            </a>
            <a href="#" className="btn btn--ghost" id="cta2">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Vertical social links — desktop only */}
        <div className="hero__social">
          <ul className="soc-list">
            {socialLinks.map(({ id, label, href }) => (
              <li key={id}>
                <a href={href} id={id} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="soc-line" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <div className="scroll-cue__bar" />
        <div className="scroll-cue__nub" />
      </div>
    </section>
  )
}
