import { useState, useEffect, useRef } from 'react'

// ─── DATA ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: '5+',  label: 'Years Experience' },
  { value: '12+', label: 'Projects Delivered' },
  { value: '20+', label: 'Technologies' },
  { value: '6',   label: 'Companies' },
]

const SKILL_CATEGORIES = [
  {
    icon: '📱', title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Firebase', 'Bloc', 'GetX', 'Provider', 'Dio/http', 'geolocator', 'flutter_map', 'workmanager'],
  },
  {
    icon: '🌐', title: 'Web Frontend',
    skills: ['React', 'Angular', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '⚙️', title: 'Backend & APIs',
    skills: ['Node.js', 'PHP', 'Python', 'RESTful APIs', 'JSON APIs', 'Express.js'],
  },
  {
    icon: '🗄️', title: 'Databases',
    skills: ['MongoDB', 'SQL', 'MySQL', 'Firebase Firestore'],
  },
  {
    icon: '☁️', title: 'Cloud & DevOps',
    skills: ['AWS', 'Digital Ocean', 'cPanel', 'Linux Servers', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    icon: '🤖', title: 'AI & Machine Learning',
    skills: ['Python', 'LLM Integration', 'AI Tools Training', 'Machine Learning', 'NLP', 'AI APIs'],
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
      'Built scalable Backend & APIs with 24/7 Geo Location tracking',
      'Integrated new technologies increasing capabilities and overall performance',
      'Developed reusable components reducing development effort across multiple projects',
      'Implemented effective debugging strategies resulting in fewer software defects',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'geolocator', 'Firebase', 'workmanager', 'flutter_map', 'RESTful APIs'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Narayana Hrudayala SDC',
    location: 'Bangalore, India',
    period: 'Nov 2023 – Jun 2024',
    current: false,
    highlights: [
      'Modernized legacy codebases to current development standards',
      'Documented technical workflows to educate newly hired engineers',
      'Planned and developed interfaces for simplified management and ease of use',
      'Designed customized solutions for client proposals',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'RESTful API', 'Dio', 'Firebase'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Z EKSTA Technology Pvt. Ltd.',
    location: 'Bangalore, India',
    period: 'Jan 2023 – Oct 2023',
    current: false,
    highlights: [
      'Updated legacy codebases to modern Flutter development standards',
      'Coordinated with project management on database development timelines',
      'Delivered customized mobile solutions for diverse clients',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'GetX', 'RESTful API', 'Firebase'],
  },
  {
    title: 'Software Engineer — Flutter Developer',
    company: 'Milvik Technology India Service Pvt. Ltd.',
    location: 'Bangalore, India',
    period: 'Jan 2021 – Jan 2023',
    current: false,
    highlights: [
      'Introduced agile methodologies and development best practices',
      'Verified stability, security, and scalability of mobile applications',
      'Delivered features consistently on time across sprint cycles',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'RESTful API', 'Dio', 'Firebase'],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Skilled Answers Infosolutions Pvt. Ltd.',
    location: 'India',
    period: 'Jan 2020 – Jan 2021',
    current: false,
    highlights: [
      'Introduced agile methodologies enhancing product development',
      'Verified stability and security of Mobile Applications',
      'Worked on sprint timelines delivering quality mobile solutions',
    ],
    tech: ['Flutter', 'Dart', 'BLOC', 'Firebase'],
  },
  {
    title: 'Software Engineer',
    company: 'Torry Harris Integration Solutions',
    location: 'India',
    period: 'Jan 2019 – Jan 2020',
    current: false,
    highlights: [
      'Designed immersive user interfaces using native mobile technologies',
      'Used Android SDK to produce highly effective and nuanced content',
      'Incorporated offline storage, performance tuning, and threading into apps',
    ],
    tech: ['Android SDK', 'Java', 'Mobile Development'],
  },
]

const PROJECTS = [
  { name: 'Jibika',         category: 'Flutter App',    icon: '💼', color: '#4ade80' },
  { name: 'Euclea',         category: 'Flutter App',    icon: '📚', color: '#60a5fa' },
  { name: 'MI Book',        category: 'Flutter App',    icon: '📖', color: '#f472b6' },
  { name: 'Milkiyat',       category: 'Flutter App',    icon: '🏠', color: '#fb923c' },
  { name: 'Milvik Health+', category: 'Healthcare App', icon: '🏥', color: '#34d399' },
  { name: 'Namah',          category: 'Flutter App',    icon: '🧘', color: '#a78bfa' },
  { name: 'NHCARE',         category: 'Healthcare App', icon: '❤️', color: '#2dd4bf' },
  { name: 'KingsApp Doctor',category: 'Healthcare App', icon: '👨‍⚕️', color: '#fb7185' },
  { name: 'FFA',            category: 'Flutter App',    icon: '🎯', color: '#facc15' },
  { name: 'BiteNxt',        category: 'Food Tech App',  icon: '🍕', color: '#f97316' },
  { name: 'GradsGateWay',   category: 'Education App',  icon: '🎓', color: '#818cf8' },
]

const EDUCATION = [
  { degree: 'BCA — Bachelor of Computer Applications', institution: 'Indian Academy Degree College Autonomous', year: '2018', icon: '🎓' },
  { degree: 'Pre-University (CBSE)', institution: 'Indian Academy PU College', year: '2014', icon: '📚' },
  { degree: 'High School (CBSE)',    institution: 'Siddhartha English High School', year: '2012', icon: '🏫' },
]

const TECH_BADGES = ['Flutter', 'Dart', 'React', 'Node.js', 'Python', 'AWS', 'Firebase', 'MongoDB']

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav({ active, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

  function scrollTo(id) {
    setMenuOpen(false)
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a className="nav-logo" href="#" onClick={e => { e.preventDefault(); scrollTo('home') }}>SK.</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l}`}
                className={active === l ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l) }}
              >{l.charAt(0).toUpperCase() + l.slice(1)}</a>
            </li>
          ))}
        </ul>
        <a className="nav-btn" href="mailto:sahanakumari501@gmail.com">Hire Me</a>
        <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={e => { e.preventDefault(); scrollTo(l) }}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
        <a href="mailto:sahanakumari501@gmail.com" style={{ color: 'var(--green)', marginTop: '1rem' }}>✉ Hire Me</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="hero-content">
          <div className="hero-tag">Available for freelance work</div>
          <h1 className="hero-name">
            Sahana<br /><span>Kumari</span>
          </h1>
          <p className="hero-role">Senior Flutter Developer &amp; Full-Stack Engineer</p>
          <p className="hero-desc">
            5+ years building cross-platform mobile apps, web solutions, and AI-powered systems.
            Expert in Flutter, React, Node.js, Python, AWS, and Digital Ocean deployments.
          </p>
          <div className="hero-btns">
            <a className="btn-primary" href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work ↓
            </a>
            <a className="btn-outline" href="mailto:sahanakumari501@gmail.com">
              Get In Touch →
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map(s => (
              <div className="stat-item" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-badges">
          {TECH_BADGES.map(b => <div className="tech-badge" key={b}>{b}</div>)}
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
          <span className="section-number">01. About</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <div className="avatar-inner">
                <img src="/photo.jpg" alt="Sahana Kumari" />
              </div>
              <div className="about-badge">📍 Bangalore, India</div>
            </div>
          </div>
          <div className="about-text">
            <h3>Hi there! I'm Sahana 👋</h3>
            <p>
              I'm a Software Developer with <strong style={{ color: 'var(--green)' }}>5+ years of experience</strong> in Mobile
              Application Development. I've built and delivered <strong style={{ color: 'var(--green)' }}>12+ cross-platform projects</strong> for
              Android, iOS, and Web across healthcare, education, fintech, and food-tech domains.
            </p>
            <p>
              Beyond mobile, I'm proficient in full-stack web development (React, Angular, Vue.js, Node.js, PHP),
              cloud deployments on <strong style={{ color: 'var(--green)' }}>AWS and Digital Ocean</strong>, and AI/ML integration with
              Python and LLMs — making me a versatile engineer for end-to-end project delivery.
            </p>
            <div className="about-highlights">
              {[
                ['📧', 'sahanakumari501@gmail.com'],
                ['📞', '+91 8618046831'],
                ['📍', 'Bangalore, India 560077'],
                ['💼', 'Open to Freelance & Full-time Opportunities'],
                ['🌐', 'Available for Remote Work Worldwide'],
              ].map(([icon, text]) => (
                <div className="highlight-item" key={text}>
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
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
          <span className="section-number">02. Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map(cat => {
            const cardRef = useFadeIn()
            return (
              <div className="skill-card fade-in" key={cat.title} ref={cardRef}>
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <span className="skill-card-title">{cat.title}</span>
                </div>
                <div className="skill-chips">
                  {cat.skills.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            )
          })}
        </div>
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
          <span className="section-number">03. Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => {
            const itemRef = useFadeIn()
            return (
              <div className={`timeline-item${job.current ? ' current' : ''} fade-in`} key={i} ref={itemRef}>
                <div className="exp-card">
                  {job.current && (
                    <div className="current-badge">
                      <span className="current-dot" />Current Role
                    </div>
                  )}
                  <div className="exp-header">
                    <div>
                      <div className="exp-title">{job.title}</div>
                      <div className="exp-company">{job.company}</div>
                      <div className="exp-location">📍 {job.location}</div>
                    </div>
                    <div className="exp-period">{job.period}</div>
                  </div>
                  <ul className="exp-highlights">
                    {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                  <div className="exp-tech">
                    {job.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            )
          })}
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
          <span className="section-number">04. Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => {
            const cardRef = useFadeIn()
            return (
              <div
                className="project-card fade-in"
                key={i}
                ref={cardRef}
                style={{ '--color': p.color }}
              >
                <div className="project-icon">{p.icon}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-category">{p.category}</div>
                <div className="project-arrow">↗</div>
              </div>
            )
          })}
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
          <span className="section-number">05. Education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-line" />
        </div>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => {
            const eduRef = useFadeIn()
            return (
              <div className="edu-card fade-in" key={i} ref={eduRef}>
                <div className="edu-icon">{e.icon}</div>
                <div>
                  <div className="edu-year">{e.year}</div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-institution">{e.institution}</div>
                </div>
              </div>
            )
          })}
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
    setForm(f => ({ ...f, [name]: value }))
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
          <span className="section-number">06. Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <div className="contact-intro">
            <h3>Let's Work Together!</h3>
            <p>
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a Flutter mobile app, a web application, AI integration,
              or cloud deployment — I'd love to hear about your project.
            </p>
            <div className="contact-links">
              {[
                { icon: '✉️', label: 'Email', value: 'sahanakumari501@gmail.com', href: 'mailto:sahanakumari501@gmail.com' },
                { icon: '📞', label: 'Phone', value: '+91 8618046831', href: 'tel:+918618046831' },
                { icon: '📍', label: 'Location', value: 'Bangalore, India 560077', href: '#' },
                { icon: '💬', label: 'Available on', value: 'Upwork • LinkedIn • Email', href: '#' },
              ].map(c => (
                <a className="contact-link" key={c.label} href={c.href}>
                  <span className="contact-link-icon">{c.icon}</span>
                  <div className="contact-link-info">
                    <div className="contact-link-label">{c.label}</div>
                    <div className="contact-link-value">{c.value}</div>
                  </div>
                  <span>→</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handle} placeholder="Project Inquiry" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={handle} placeholder="Tell me about your project..." required />
            </div>
            <button className="form-submit" type="submit">
              {sent ? '✓ Opening Email...' : 'Send Message →'}
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
          <a className="social-link" href="mailto:sahanakumari501@gmail.com">✉ Email</a>
          <a className="social-link" href="tel:+918618046831">📞 Phone</a>
          <a className="social-link" href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a className="social-link" href="https://github.com" target="_blank" rel="noreferrer">⚡ GitHub</a>
        </div>
        <p className="footer-text" style={{ marginTop: '1rem' }}>
          Designed &amp; Built by <span>Sahana Kumari</span> · Senior Flutter &amp; Full-Stack Developer
        </p>
        <p className="footer-text" style={{ marginTop: '0.4rem', opacity: 0.6 }}>
          sahanakumari501@gmail.com · +91 8618046831 · Bangalore, India
        </p>
      </div>
    </footer>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
