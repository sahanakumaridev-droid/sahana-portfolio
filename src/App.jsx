import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import profilePhoto from './assets/photo.jpg'

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '21+', label: 'Products Shipped' },
  { value: '95%', label: 'AI Automation' },
  { value: 'Live', label: 'Client Services' },
]

const SKILL_CATEGORIES = [
  {
    kicker: '01',
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Angular',
      'Vite',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Flutter',
    ],
  },
  {
    kicker: '02',
    title: 'Backend & Databases',
    skills: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'PHP',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Firebase',
    ],
  },
  {
    kicker: '03',
    title: 'AI, LLMs & Automation',
    skills: [
      'Generative AI',
      'LLM Integration',
      'OpenAI / Claude APIs',
      'LangChain',
      'RAG (Retrieval-Augmented Generation)',
      'Vector Databases',
      'SEO AI Automation Tool',
      'AI-Driven SEO & Content Automation',
      '95/5 Autonomous Workflow Architecture',
    ],
  },
  {
    kicker: '04',
    title: 'Cloud, DevOps & Delivery',
    skills: [
      'AWS',
      'Docker',
      'CI/CD',
      'Git / GitHub',
      'Linux/Server Management',
      'DigitalOcean',
      'Hostinger',
      'GoDaddy',
      'Namecheap',
    ],
  },
]

const EXPERIENCE = [
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Vation Digital',
    location: 'Bengaluru, India',
    period: 'Sep 2024 – Present',
    current: true,
    highlights: [
      'Built scalable backend services and APIs with 24/7 geo-location tracking',
      'Integrated new technologies that increased product capabilities and runtime performance',
      'Developed reusable components that reduced delivery effort across multiple product lines',
      'Implemented debugging strategies that reduced defect rates in production',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'Firebase', 'RESTful APIs'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Narayana Hrudayala SDC',
    location: 'Bangalore, India',
    period: 'Nov 2023 – Jun 2024',
    current: false,
    highlights: [
      'Modernized legacy codebases to current engineering standards',
      'Documented technical workflows to onboard new engineers faster',
      'Designed interfaces that simplified operations for clinical and internal teams',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'RESTful API', 'Firebase'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Z EKSTA Technology Pvt. Ltd.',
    location: 'Bangalore, India',
    period: 'Jan 2023 – Oct 2023',
    current: false,
    highlights: [
      'Updated legacy applications to modern Flutter architecture',
      'Coordinated with project management on database and delivery timelines',
      'Shipped customized mobile solutions for diverse clients',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'GetX', 'Firebase'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Milvik Technology India Service Pvt. Ltd.',
    location: 'Bangalore, India',
    period: 'Jan 2021 – Jan 2023',
    current: false,
    highlights: [
      'Introduced agile practices and engineering quality bars',
      'Verified stability, security, and scalability of mobile applications',
      'Delivered features consistently across sprint cycles',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'RESTful API', 'Firebase'],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Skilled Answers Infosolutions Pvt. Ltd.',
    location: 'India',
    period: 'Jan 2020 – Jan 2021',
    current: false,
    highlights: [
      'Improved product development cadence with agile delivery',
      'Verified stability and security of mobile applications',
    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    title: 'Software Engineer',
    company: 'Torry Harris Integration Solutions',
    location: 'India',
    period: 'Jan 2019 – Jan 2020',
    current: false,
    highlights: [
      'Designed mobile interfaces using native Android technologies',
      'Incorporated offline storage, performance tuning, and threading',
    ],
    tech: ['Android SDK', 'Java'],
  },
]

const FEATURED_PRODUCT = {
  name: 'SEO AI Automation Tool',
  eyebrow: 'Flagship product · Live in production',
  category: 'Service-based SEO & content automation for paying clients',
  summary:
    'The SEO AI Automation Tool is the product I highlight first: an enterprise-grade platform that uses LLMs, RAG, and AI SEO automation to research, draft, optimize, and publish content at scale. Clients are already live on this as a managed, service-based offering — not a prototype.',
  framework:
    'The 95/5 Autonomous Workflow Architecture keeps 95% of SEO and content operations fully automated, with 5% human validation. That mix cuts operational overhead while keeping brand and quality control. Successful client accounts run on this service every day.',
  capabilities: [
    'Keyword, SERP, and content-gap research driven by LLMs and RAG',
    'On-page SEO drafts, internal linking, and publishing pipelines',
    'Client work delivered as an ongoing service — live accounts in production',
    'Human-in-the-loop review only for high-stakes brand or compliance checks',
  ],
  stack: ['Python', 'LLMs', 'RAG', 'SEO Automation', 'Node.js', 'PostgreSQL', 'AWS'],
}

const PROJECTS = [
  { name: 'Seven Pro', category: 'Web Application', location: 'Production' },
  { name: 'Revive App', category: 'Medicine Delivery App', location: 'Production' },
  { name: 'SEO AI Automation Tool', category: 'Service-based SEO platform · live clients', location: 'Production' },
  { name: 'BiteNxt', category: 'Dental Hospital App', location: 'India' },
  { name: 'FFA', category: 'Field Force Administration', location: 'India' },
  { name: 'Cadenca', category: 'Pilot Scheduler App', location: 'Remote' },
  { name: 'Dating App', category: 'Social Dating Platform', location: 'Remote' },
  { name: 'HomeMine', category: 'Real Estate Web App', location: 'Remote' },
  { name: 'MyPlaces', category: 'Location & Mapping', location: 'Remote' },
  { name: 'GeoTag', category: 'Geo Tagging Mobile App', location: 'Remote' },
  { name: 'CutBookings', category: 'Web & Mobile Booking', location: 'Remote' },
  { name: 'CIC Survey', category: 'Airport Survey App', location: 'Remote' },
  { name: 'Milvik Health+', category: 'Healthcare App', location: 'India' },
  { name: 'NHCARE', category: 'Healthcare App', location: 'India' },
  { name: 'KingsApp Doctor', category: 'Healthcare App', location: 'India' },
  { name: 'GradsGateWay', category: 'Education Platform', location: 'India' },
  { name: 'Jibika', category: 'Flutter Application', location: 'India' },
  { name: 'Euclea', category: 'Flutter Application', location: 'India' },
  { name: 'MI Book', category: 'Flutter Application', location: 'India' },
  { name: 'Milkiyat', category: 'Flutter Application', location: 'India' },
  { name: 'Namah', category: 'Nurse Application', location: 'India' },
]

const EDUCATION = [
  { degree: 'BCA — Bachelor of Computer Applications', institution: 'Indian Academy Degree College Autonomous', year: '2018' },
  { degree: 'Pre-University (CBSE)', institution: 'Indian Academy PU College', year: '2014' },
  { degree: 'High School (CBSE)', institution: 'Siddhartha English High School', year: '2012' },
]

const TECH_BADGES = ['React', 'TypeScript', 'Next.js', 'Python', 'RAG', 'SEO AI', 'AWS', 'PostgreSQL']

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeCard({ children, className = '', style }) {
  const ref = useFadeIn()
  return (
    <div className={`fade-in ${className}`} ref={ref} style={style}>
      {children}
    </div>
  )
}

function Nav({ active, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const listRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    ['home', 'Home'],
    ['about', 'About'],
    ['skills', 'Skills'],
    ['featured', 'Product'],
    ['experience', 'Experience'],
    ['projects', 'Work'],
    ['contact', 'Contact'],
  ]

  function slideTo(el) {
    const list = listRef.current
    const indicator = indicatorRef.current
    if (!list || !indicator || !el) return
    const lr = list.getBoundingClientRect()
    const ar = el.getBoundingClientRect()
    const x = ar.left - lr.left
    const w = ar.width
    indicator.style.transform = `translate3d(${x}px, 0, 0) scaleX(${w})`
  }

  function slideToActive() {
    const el = listRef.current?.querySelector('a.active')
    if (el) slideTo(el)
  }

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => slideToActive())
    const onResize = () => slideToActive()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [active])

  function scrollTo(id) {
    setMenuOpen(false)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a
          className="nav-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
        >
          SK
        </a>
        <div className="nav-links" ref={listRef} onMouseLeave={slideToActive}>
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          <ul className="nav-list">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onMouseEnter={(e) => slideTo(e.currentTarget)}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(id)
                }}
              >
                {label}
              </a>
            </li>
          ))}
          </ul>
        </div>
        <a className="nav-btn" href="mailto:sahanakumari501@gmail.com">
          Hire Me
        </a>
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollTo(id)
            }}
          >
            {label}
          </a>
        ))}
        <a href="mailto:sahanakumari501@gmail.com" className="mobile-hire">
          Hire Me
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-tag">Open to remote &amp; hybrid roles</p>
          <h1 className="hero-name">
            Sahana <span>Kumari</span>
          </h1>
          <p className="hero-role">Full-Stack Software Engineer &amp; AI Systems Architect</p>
          <p className="hero-desc">
            Building scalable full-stack web applications, high-performance APIs, and next-generation
            AI automation — including a production{' '}
            <mark className="hl hl-seo">SEO AI Automation Tool</mark> with clients already running
            successfully on a service-based model. Specializing in products that achieve{' '}
            <mark className="hl hl-ai">95% AI automation</mark> with{' '}
            <mark className="hl hl-human">5% human-in-the-loop</mark> oversight.
          </p>
          <div className="hero-btns">
            <a
              className="btn-primary btn-seo"
              href="#featured"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View SEO AI Automation Tool
            </a>
            <a className="btn-outline" href="mailto:sahanakumari501@gmail.com">
              Contact
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-portrait">
            <div className="avatar-frame">
              <div className="avatar-inner">
                <img src={profilePhoto} alt="Sahana Kumari" />
              </div>
              <div className="about-badge">Bangalore · Remote-ready</div>
            </div>
          </div>
          <div className="hero-badges" aria-hidden="true">
            {TECH_BADGES.map((b, i) => (
              <div
                className={`tech-badge${b === 'SEO AI' ? ' badge-seo' : ''}`}
                key={b}
                style={{ animationDelay: `${0.55 + i * 0.05}s` }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const ref = useFadeIn()
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">01 — About</span>
          <h2 className="section-title">Engineer. Architect. Operator.</h2>
          <div className="section-line" />
        </div>
        <div className="about-text">
            <h3>Sahana Kumari</h3>
            <p>
              Full-stack software engineer and AI systems architect with{' '}
              <strong>5+ years</strong> shipping production software across web, mobile, APIs, and
              cloud. I design systems that scale, then automate the operational layer.
            </p>
            <p>
              I built the <mark className="hl hl-seo">SEO AI Automation Tool</mark> — an LLM and RAG
              product that researches, writes, and optimizes content at scale. Clients are already
              live on it as a <mark className="hl hl-live">service-based offering</mark>. Operating
              model: <mark className="hl hl-ai">95% autonomous execution</mark>,{' '}
              <mark className="hl hl-human">5% human validation</mark>.
            </p>
            <div className="about-highlights">
              {[
                ['Email', 'sahanakumari501@gmail.com'],
                ['Phone', '+91 8618046831'],
                ['Location', 'Bangalore, India — available worldwide'],
                ['Availability', 'Freelance, contract, and full-time'],
              ].map(([label, text]) => (
                <div className="highlight-item" key={label}>
                  <span className="highlight-label">{label}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const ref = useFadeIn()
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">02 — Skills</span>
          <h2 className="section-title">Technical skills matrix</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <FadeCard className="skill-card" key={cat.title}>
              <div className="skill-card-header">
                <span className="skill-kicker">{cat.kicker}</span>
                <span className="skill-card-title">{cat.title}</span>
              </div>
              <div className="skill-chips">
                {cat.skills.map((s) => (
                  <span
                    className={`chip${s.includes('SEO AI') ? ' chip-seo' : ''}`}
                    key={s}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProduct() {
  const ref = useFadeIn()
  const p = FEATURED_PRODUCT
  return (
    <section id="featured" className="featured">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">03 — Featured</span>
          <h2 className="section-title">
            <span className="title-seo">SEO AI Automation Tool</span>
          </h2>
          <div className="section-line" />
        </div>
        <FadeCard className="featured-card">
          <div className="featured-copy">
            <p className="featured-eyebrow">{p.eyebrow}</p>
            <h3 className="featured-name">{p.name}</h3>
            <p className="featured-category">{p.category}</p>
            <p className="featured-summary">{p.summary}</p>
            <p className="featured-framework">{p.framework}</p>
            <ul className="featured-list">
              {p.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="exp-tech">
              {p.stack.map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="featured-metrics" aria-label="Automation framework">
            <div className="metric-block metric-ai">
              <div className="metric-value">95%</div>
              <div className="metric-label">AI automation</div>
              <p>LLM, RAG, and SEO pipelines run end-to-end without waiting on a queue.</p>
            </div>
            <div className="metric-block metric-human">
              <div className="metric-value">5%</div>
              <div className="metric-label">Human validation</div>
              <p>Reviewers intervene only on brand, legal, or high-stakes exceptions.</p>
            </div>
            <div className="metric-block metric-live">
              <div className="metric-value">Live</div>
              <div className="metric-label">Service-based clients</div>
              <p>Paying accounts are already running successfully on this SEO AI service.</p>
            </div>
          </div>
        </FadeCard>
      </div>
    </section>
  )
}

function Experience() {
  const ref = useFadeIn()
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">04 — Experience</span>
          <h2 className="section-title">Selected experience</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <FadeCard className={`timeline-item${job.current ? ' current' : ''}`} key={i}>
              <div className="exp-card">
                {job.current && (
                  <div className="current-badge">
                    <span className="current-dot" />
                    Current
                  </div>
                )}
                <div className="exp-header">
                  <div>
                    <div className="exp-title">{job.title}</div>
                    <div className="exp-company">{job.company}</div>
                    <div className="exp-location">{job.location}</div>
                  </div>
                  <div className="exp-period">{job.period}</div>
                </div>
                <ul className="exp-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {job.tech.map((t) => (
                    <span className="tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const ref = useFadeIn()
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">05 — Work</span>
          <h2 className="section-title">Selected products</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <FadeCard
              className={`project-card${p.name === 'SEO AI Automation Tool' ? ' project-seo' : ''}${p.name === 'Seven Pro' || p.name === 'Revive App' ? ' project-accent' : ''}`}
              key={i}
            >
              <div className="project-meta">
                <span className="project-location">{p.location}</span>
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-category">{p.category}</div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  const ref = useFadeIn()
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">06 — Education</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <FadeCard className="edu-card" key={i}>
              <div>
                <div className="edu-year">{e.year}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-institution">{e.institution}</div>
              </div>
            </FadeCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useFadeIn()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handle(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function submit(e) {
    e.preventDefault()
    window.location.href = `mailto:sahanakumari501@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header fade-in" ref={ref}>
          <span className="section-number">07 — Contact</span>
          <h2 className="section-title">Let’s build the next system</h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <div className="contact-intro">
            <h3>Open to remote &amp; hybrid roles</h3>
            <p>
              Available for full-stack product work, high-performance APIs, and the SEO AI Automation
              Tool already serving live clients. If you need a 95/5 operating model in production, we
              should talk.
            </p>
            <div className="contact-links">
              {[
                { label: 'Email', value: 'sahanakumari501@gmail.com', href: 'mailto:sahanakumari501@gmail.com' },
                { label: 'Phone', value: '+91 8618046831', href: 'tel:+918618046831' },
                { label: 'Location', value: 'Bangalore · Remote worldwide', href: '#contact' },
              ].map((c) => (
                <a className="contact-link" key={c.label} href={c.href}>
                  <div className="contact-link-info">
                    <div className="contact-link-label">{c.label}</div>
                    <div className="contact-link-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handle} placeholder="Alex Chen" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="alex@company.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject} onChange={handle} placeholder="Role or project" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handle} placeholder="What are you building?" required />
            </div>
            <button className="form-submit" type="submit">
              {sent ? 'Opening email…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a className="social-link" href="mailto:sahanakumari501@gmail.com">
            Email
          </a>
          <a className="social-link" href="tel:+918618046831">
            Phone
          </a>
          <a className="social-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="social-link" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-text">
          Designed &amp; built by <span>Sahana Kumari</span>
        </p>
        <p className="footer-text footer-sub">Full-Stack Software Engineer &amp; AI Systems Architect</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'featured', 'experience', 'projects', 'education', 'contact']
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <div className="menu-scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProduct />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
