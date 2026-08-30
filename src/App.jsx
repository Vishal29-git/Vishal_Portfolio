import React, { useState, useEffect, useRef } from 'react';
import myPhoto from './assets/mypic.png'; 


const CREDENTIAL_URLS = {
  internshipCertificate: 'https://drive.google.com/file/d/13xjnnN3huNiS5zht-nt83Wyj6_d9PsnM/view?usp=drive_link', // Elevance Skills internship certificate URL
  achievements: {
    aiFluency: 'https://verify.skilljar.com/c/32g73u32fesw',        // Anthropic "AI Fluency Framework & Foundations" certificate URL
    hackathon: '#',        // Google Developer Group hackathon certificate/proof URL
    djangoWorkshop: 'https://drive.google.com/file/d/1R4LwSO9vrK2YE8g1InM_3LYYAbAlfSLd/view',   // Django REST API Workshop certificate URL
    techFusion: 'https://drive.google.com/file/d/1R6x6dIMdWWfptxEYmvkXhIkjqE8Ecoar/view',       // TechFusion Workshop certificate URL
    webDevWorkshop: 'https://drive.google.com/file/d/1R6nq4_Ub3HM0f2WeoSO2dU3pp23XL0fm/view',   // NIT Trichy Web Development Workshop certificate URL
    naanMudhalvanRPA:'https://drive.google.com/file/d/1RVrJw9czvwjsVI_n_c0jCLGbOa8xO9Is/view'
  },
  projects: {
    bulkfitAI: { github: 'https://github.com/Vishal29-git/BulkFit-AI--Resume_Screener' },
    pdfChatbot: { live: '#', github: 'https://github.com/Vishal29-git/LocalPDFChatbot' },
    aiTranslator: { live: '#', github: 'https://github.com/SanjayChellapandi/translator-web-app' },
    todoApp: {  github: '' },
    productHub: { github: 'https://github.com/Vishal29-git/ProductHub' },
    memoryGame: { live: 'https://memory-card-game-drab-eta.vercel.app/', github: 'https://github.com/Vishal29-git/MemoryCardGame' },
    firebaseAuth: { live: 'https://my-login-app-518df.web.app/', github: 'https://github.com/Vishal29-git/FASTAPI-TODOLIST' },
    gvrGrillWorks: { live: 'https://gvr-grill-8qop.vercel.app/', github: 'https://github.com/Vishal29-git/GVR-Grill' },
  },
};


const FONT_IMPORT_URL =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements'];

const MARQUEE_TECH = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'Redis', icon: 'devicon-redis-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Vercel', icon: 'devicon-vercel-original' },
];

const SKILL_GROUPS = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React.js', icon: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    title: 'Backend Development & Databases',
    icon: '⚙️',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      
    ],
  },
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'C', icon: 'devicon-c-plain colored' },
    ],
  },
  {
    title: 'AI & GenAI',
    icon: '🤖',
    skills: [
      { name: 'LangChain', icon: 'devicon-python-plain ' },
      { name: 'FAISS', icon: 'devicon-python-plain colored' },
      { name: 'Ollama', icon: 'devicon-python-plain ' },
      { name: 'Streamlit', icon: 'devicon-python-plain colored' },
      { name: 'RAG', icon: 'devicon-python-plain ' },
      { name: 'LLM', icon: 'devicon-python-plain colored' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
      { name: 'Render', icon: 'devicon-heroku-original' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    ],
  },
  {
    title: 'Testing & Tools',
    icon: '🧪',
    skills: [
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
      { name: 'Pytest', icon: 'devicon-python-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    ],
  },
];

const EXPERIENCE = [
  {
    role: 'Python Full-Stack Developer Intern',
    company: 'Elevance Skills',
    date: 'Apr 2026 – Jun 2026',
    points: [
      'Engineered high-throughput Python backend features and database-driven web applications, improving API transaction speed and system reliability for high-concurrency, multi-user workloads.',
      'Implemented Redis caching and optimized complex PostgreSQL queries, cutting database load by 35% during peak-traffic requests.',
      'Integrated the Razorpay payment gateway with RESTful APIs, OAuth 2.0, and end-to-end transactional error handling, ensuring 99.9% payment reliability across test environments.',
    ],
    credentialUrl: CREDENTIAL_URLS.internshipCertificate,
    github: 'https://github.com/Vishal29-git/Django-BookMyShow', // TODO: paste the internship's GitHub repo URL here
  },
];

const PROJECTS = [
  {
    key: 'bulkfitAI',
    title: 'BulkFit AI',
    subtitle: 'AI ATS Resume Screener',
    category: 'ai',
    tech: ['React.js', 'FastAPI', 'Ollama', 'SQLite', 'SMTP'],
    description:
      'Evaluates 20+ candidate resumes per JD, extracting profile links and computing match scores with 90%+ precision. Generates AI summaries in 15s and automates shortlist/reject emails, cutting recruiter screening time by 80%.',
  },
  {
    key: 'pdfChatbot',
    title: 'Local PDF Chatbot',
    subtitle: 'Offline RAG Document Q&A',
    category: 'ai',
    tech: ['Streamlit', 'LangChain', 'FastAPI', 'FAISS', 'Ollama'],
    description:
      'Fully offline chatbot using a RAG pipeline with FAISS vector search and LangChain for private document Q&A — no internet required. Supports persistent chat history and multi-format documents.',
  },
  {
    key: 'aiTranslator',
    title: 'AI Translator App',
    subtitle: 'Multilingual Translation Platform',
    category: 'ai',
    tech: ['Firebase', 'React.js', 'FastAPI'],
    description:
      'Full-stack platform for real-time multilingual text translation, word meaning retrieval, and document parsing (PDF, DOCX, TXT), built on React and FastAPI with Pydantic-validated APIs.',
  },
  {
    key: 'todoApp',
    title: 'Todo List Application',
    subtitle: 'Task Management API',
    category: 'fullstack',
    tech: ['FastAPI', 'PostgreSQL', 'REST API'],
    description:
      'Full-stack task manager with 8 API endpoints responding in ~150ms. Secure authentication, tested for 100+ concurrent users with 25+ automated test cases.',
  },
  {
    key: 'productHub',
    title: 'ProductHub',
    subtitle: 'Product Management System',
    category: 'fullstack',
    tech: ['React.js', 'FastAPI', 'PostgreSQL'],
    description:
      'Complete product management system with full CRUD operations, a structured data model, and a reliable PostgreSQL backend behind a REST API.',
  },
  {
    key: 'memoryGame',
    title: 'Memory Card Game',
    subtitle: 'Interactive Matching Game',
    category: 'frontend',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    description:
      'Interactive matching game with 20+ card pairs, optimized for 60% faster loading and a fully responsive layout across device sizes.',
  },
  {
    key: 'firebaseAuth',
    title: 'Firebase Auth System',
    subtitle: 'Authentication Module',
    category: 'frontend',
    tech: ['Firebase', 'React.js', 'OAuth 2.0'],
    description:
      'Secure authentication supporting email/password and Google sign-in with a 99% success rate, cutting failed logins by 75%.',
  },
  {
    key: 'gvrGrillWorks',
    title: 'GVR Grill Works',
    subtitle: 'Business Portfolio Site',
    category: 'frontend',
    tech: ['React.js', 'Firebase'],
    description:
      'Responsive business website with structured navigation, gallery sections, and Google Maps integration to improve customer engagement.',
  },
];

const ACHIEVEMENTS = [
  {
    title: 'AI Fluency Framework & Foundations',
    org: 'Anthropic Courses',
    date: 'June 2026',
    description: 'Completed a structured program covering foundational principles and frameworks of Artificial Intelligence.',
    credentialUrl: CREDENTIAL_URLS.achievements.aiFluency,
  },
  {
    title: '24-Hour Hackathon',
    org: 'Google Developer Group',
    date: 'April 2025',
    description: 'Competed with 50+ teams in a 24-hour hackathon, developing an innovative technology solution focused on Sustainable Development Goals (SDGs) and real-world challenges.',
    credentialUrl: CREDENTIAL_URLS.achievements.hackathon,
  },
  {
    title: 'Django REST API Workshop',
    org: 'AAA College of Engineering and Technology',
    date: 'October 2024',
    description: 'Completed an intensive 8-hour workshop, gaining practical experience in Django REST Framework by developing 5+ functional API endpoints and  REST API development fundamentals.',
    credentialUrl: CREDENTIAL_URLS.achievements.djangoWorkshop,
  },
  {
    title: 'Gen AI Workshop',
    org: 'IEEE Computer Society',
    date: 'September 2024',
    description: 'Gained hands-on knowledge of 6+ technologies, including Cloud Computing, DevOps, and modern software development practices.',
    credentialUrl: CREDENTIAL_URLS.achievements.techFusion,
  },
  {
    title: 'Web Development Workshop',
    org: 'NIT Trichy',
    date: 'March 2024',
    description: 'Gained practical knowledge of modern JavaScript frameworks, web development practices, and industry-standard development techniques.',
    credentialUrl: CREDENTIAL_URLS.achievements.webDevWorkshop,
  },
  {
    title: 'Naan Mudhalvan RPA Course ',
    org: 'TNSkill Corporation',
    date: 'Feb 2025',
    description: 'Gaining practical knowledge of automation concepts and tools while demonstrating initiative and commitment to professional development.',
    credentialUrl: CREDENTIAL_URLS.achievements.naanMudhalvanRPA,
  }
];

const CONTACT_LINKS = [
  { label: 'Madurai, Tamil Nadu', icon: 'fa-solid fa-location-dot', href: null },
  { label: 'vishalraghavan2904@gmail.com', icon: 'fa-solid fa-envelope', href: 'mailto:vishalraghavan2904@gmail.com' },
  { label: '+91 97905 57118', icon: 'fa-solid fa-phone', href: 'tel:+919790557118' },
  { label: 'GitHub', icon: 'fa-brands fa-github', href: 'https://github.com/Vishal29-git' },
  { label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: 'https://linkedin.com/in/vishal-29-v' },
];

const FILTERS = ['all', 'ai', 'fullstack', 'frontend'];

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');
  const [activeTab, setActiveTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState({});

  const sectionRefs = useRef({});
  const revealRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section highlight observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Object.keys(sectionRefs.current).find(
              (key) => sectionRefs.current[key] === entry.target
            );
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.35 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal-id');
            if (id) {
              setVisibleElements((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(revealRefs.current).forEach((el) => el && revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [activeTab]);

  const registerReveal = (id, el) => {
    if (el) revealRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const filteredProjects =
    activeTab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('${FONT_IMPORT_URL}');
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css');

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        ::selection { background: #0EA5E9; color: #ffffff; }

        /* Scroll Reveal Utility Classes */
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .reveal-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes blinkDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.85); }
        }
        .pulse-dot { animation: blinkDot 1.6s ease-in-out infinite; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-row:hover .marquee-track { animation-play-state: paused; }

        .nav-link { position: relative; padding-bottom: 6px; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0%; height: 2px;
          background: #0EA5E9;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after, .nav-link-active::after { width: 100%; }

        .skill-icon-card { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .skill-icon-card:hover {
          transform: translateY(-6px);
          border-color: #0EA5E9;
          box-shadow: 0 12px 24px -12px rgba(14,165,233,0.35);
        }

        .tech-chip { transition: transform 0.25s ease, border-color 0.25s ease; }
        .tech-chip:hover { transform: translateY(-4px) scale(1.05); border-color: #0EA5E9; }

        .project-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: #0EA5E9;
          box-shadow: 0 20px 40px -20px rgba(14,165,233,0.28);
        }

        .filter-pill { transition: background 0.25s ease, color 0.25s ease; }

        .cta-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -8px rgba(14,165,233,0.4); }

        .ghost-btn { transition: border-color 0.2s ease, background 0.2s ease; }
        .ghost-btn:hover { border-color: #0EA5E9; background: #E0F2FE; }

        .credential-btn { transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease; }
        .credential-btn:hover { background: #0EA5E9; color: #FFFFFF; border-color: #0EA5E9; }

        .achv-card { transition: border-color 0.25s ease, transform 0.25s ease; }
        .achv-card:hover { border-color: #0EA5E9; transform: translateY(-3px); }

        .contact-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
        .contact-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 26px -12px rgba(14,165,233,0.4); }

        .exp-card { transition: border-color 0.25s ease; }
        .exp-card:hover { border-color: #0EA5E9; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-title { font-size: 2.3rem !important; }
          .section-pad { padding: 3.25rem 1.25rem !important; }
          .story-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Scroll progress bar */}
      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${scrollProgress}%` }} />
      </div>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navInner}>
          <div style={styles.brand} onClick={() => scrollTo('Home')}>
            <div style={styles.brandAvatar}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem' }}>
                V
              </span>
            </div>
            <span style={styles.brandName}>Vishal<span style={{ color: '#0EA5E9' }}>.</span></span>
          </div>

          <div className="desktop-nav" style={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <span
                key={link}
                className={`nav-link ${activeSection === link ? 'nav-link-active' : ''}`}
                style={{
                  ...styles.navLink,
                  color: activeSection === link ? '#0F172A' : '#64748B',
                  fontWeight: activeSection === link ? 600 : 500,
                }}
                onClick={() => scrollTo(link)}
              >
                {link}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => scrollTo('Contact')}
              className="cta-btn desktop-nav"
              style={{ ...styles.navCta, display: 'inline-flex', border: 'none', cursor: 'pointer' }}
            >
              Contact
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={styles.hamburger}>
              <span style={styles.hamburgerBar} />
              <span style={styles.hamburgerBar} />
              <span style={styles.hamburgerBar} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <span key={link} style={styles.mobileLink} onClick={() => scrollTo(link)}>
                {link}
              </span>
            ))}
            <button onClick={() => scrollTo('Contact')} style={{ ...styles.mobileCta, border: 'none', cursor: 'pointer' }}>
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        ref={(el) => (sectionRefs.current['Home'] = el)}
        className="section-pad"
        style={styles.hero}
      >
        <div
          ref={(el) => registerReveal('hero', el)}
          data-reveal-id="hero"
          className={`reveal-item ${visibleElements['hero'] ? 'is-visible' : ''}`}
          style={styles.heroInner}
        >
          <div style={styles.availabilityPill}>
            <span className="pulse-dot" style={styles.pulseDot} />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-title" style={styles.heroTitle}>
            Hi, I'm <span style={{ color: '#0EA5E9' }}>Vishal V</span>
          </h1>

          <p style={styles.heroRole}>AI Full-Stack Developer · Generative AI</p>

          <p style={styles.heroSub}>
            Computer Science and Engineering graduate specializing in React.js, FastAPI, and
            Generative AI. I build scalable web applications and AI-powered solutions with clean
            architecture, efficient performance, and exceptional user experiences.
          </p>

          <div style={styles.heroActions}>
            <button
              onClick={() => scrollTo('Projects')}
              className="cta-btn"
              style={{ ...styles.primaryCta, border: 'none', cursor: 'pointer' }}
            >
              View Work
            </button>
            <button
              onClick={() => scrollTo('Contact')}
              className="ghost-btn"
              style={{ ...styles.ghostCta, cursor: 'pointer' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section style={styles.marqueeSection}>
        <div className="marquee-row" style={styles.marqueeRow}>
          <div className="marquee-track" style={styles.marqueeTrack}>
            {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
              <div key={i} className="tech-chip" style={styles.techChip} title={tech.name}>
                <i className={tech.icon} style={{ fontSize: '1.7rem' }} />
                <span style={styles.techChipLabel}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT (STACKED VERTICALLY: MY STORY -> EDUCATION) */}
      <section
        ref={(el) => (sectionRefs.current['About'] = el)}
        className="section-pad"
        style={styles.section}
      >
        <SectionHeader title="About Me" />

        <div style={styles.aboutStackedLayout}>
          {/* 1. MY STORY DIV WITH PICTURE REFERENCE STYLE */}
          <div
            ref={(el) => registerReveal('my-story', el)}
            data-reveal-id="my-story"
            className={`reveal-item ${visibleElements['my-story'] ? 'is-visible' : ''}`}
            style={styles.card}
          >
            <h3 style={styles.cardTitleAccent}>My Story</h3>
            <div className="story-content-grid" style={styles.storyGrid}>
              <div style={styles.storyImageWrapper}>
                <div style={styles.storyImageCard}>
                  {/* Profile Photo */}
                  <div style={styles.photoContainer}>
                    <img src={myPhoto} alt="Vishal V" style={styles.photoImage} />
                  </div>
                  <div style={styles.experienceBadge}>
                    <span style={styles.badgeNumber}>2026</span>
                    <span style={styles.badgeText}>CSE Graduate</span>
                  </div>
                </div>
              </div>

              <div style={styles.storyTextContent}>
                <p style={styles.paragraph}>
                  I'm a passionate developer who enjoys turning complex problems into clean, simple,
                  and elegant solutions. I love building things that actually work — and sometimes
                  even on the first try. Always curious, always learning, always coding.
                </p>
                <p style={styles.paragraph}>
                  I specialize in building modern web applications with React.js, FastAPI, and
                  Generative AI — focusing on performance, security, and user experience.
                </p>
                <div style={styles.highlightsRow}>
                  <div style={styles.highlightChip}>🚀 Full-Stack Dev</div>
                  <div style={styles.highlightChip}>🤖 AI Integration</div>
                  <div style={styles.highlightChip}>⚡ Fast APIs</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. EDUCATION DIV RENDERS BELOW MY STORY */}
          <div
            ref={(el) => registerReveal('education', el)}
            data-reveal-id="education"
            className={`reveal-item ${visibleElements['education'] ? 'is-visible' : ''}`}
            style={{ ...styles.card, ...styles.educationCard, transitionDelay: '0.15s' }}
          >
            <div style={styles.eduHeaderRow}>
              <div style={{ fontSize: '2.2rem' }}>📚</div>
              <div>
                <div style={styles.eduHeading}>Education</div>
                <div style={styles.eduDegree}>B.E. Computer Science and Engineering</div>
                <div style={styles.eduSchool}>SACS MAVMM Engineering College - Madurai</div>
              </div>
            </div>
            <div style={styles.eduFooterRow}>
              <span style={styles.eduYear}>2022 – 2026</span>
              <span style={styles.eduCgpa}>CGPA: 8.3</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        ref={(el) => (sectionRefs.current['Skills'] = el)}
        className="section-pad"
        style={{ ...styles.section, background: '#F8FAFC' }}
      >
        <SectionHeader title="Technical Skills" />

        {SKILL_GROUPS.map((group, gi) => {
          const groupKey = `skill-group-${gi}`;
          return (
            <div
              key={gi}
              ref={(el) => registerReveal(groupKey, el)}
              data-reveal-id={groupKey}
              className={`reveal-item ${visibleElements[groupKey] ? 'is-visible' : ''}`}
              style={{ ...styles.skillGroupBlock, transitionDelay: `${gi * 0.08}s` }}
            >
              <div style={styles.skillGroupHeader}>
                <span style={styles.skillGroupBar} />
                <span style={styles.skillGroupIcon}>{group.icon}</span>
                <h3 style={styles.skillGroupTitle}>{group.title}</h3>
              </div>
              <div style={styles.skillIconGrid}>
                {group.skills.map((skill, si) => (
                  <div key={si} className="skill-icon-card" style={styles.skillIconCard}>
                    <i className={skill.icon} style={{ fontSize: '2.4rem' }} />
                    <span style={styles.skillIconLabel}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* EXPERIENCE */}
      <section
        ref={(el) => (sectionRefs.current['Experience'] = el)}
        className="section-pad"
        style={styles.section}
      >
        <SectionHeader title="Internship Experience" />
        <div style={styles.expWrap}>
          {EXPERIENCE.map((exp, i) => {
            const expKey = `exp-${i}`;
            return (
              <div
                key={i}
                ref={(el) => registerReveal(expKey, el)}
                data-reveal-id={expKey}
                className={`exp-card reveal-item ${visibleElements[expKey] ? 'is-visible' : ''}`}
                style={styles.expCard}
              >
                <div style={styles.expTopRow}>
                  <div>
                    <h3 style={styles.expRole}>{exp.role}</h3>
                    <div style={styles.expCompany}>{exp.company}</div>
                  </div>
                  <span style={styles.expDate}>{exp.date}</span>
                </div>
                <ul style={styles.expList}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={styles.expListItem}>{point}</li>
                  ))}
                </ul>
                <div style={styles.projectCtaRow}>
                  <a
                    href={exp.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-btn"
                    style={styles.credentialBtn}
                  >
                    View Credential ↗
                  </a>
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.githubIconLink}
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        ref={(el) => (sectionRefs.current['Projects'] = el)}
        className="section-pad"
        style={{ ...styles.section, background: '#F8FAFC' }}
        id="projects-anchor"
      >
        <SectionHeader title="Featured Projects" />

        <div style={styles.filterRow}>
          <div style={styles.filterPillWrap}>
            {FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="filter-pill"
                style={{
                  ...styles.filterPill,
                  background: activeTab === tab ? '#0EA5E9' : 'transparent',
                  color: activeTab === tab ? '#FFFFFF' : '#64748B',
                }}
              >
                {tab === 'ai' ? 'AI' : tab}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.projectsGrid}>
          {filteredProjects.map((project, i) => {
            const cardId = `proj-${activeTab}-${i}`;
            const urls = CREDENTIAL_URLS.projects[project.key] || { live: '#', github: '#' };
            return (
              <div
                key={cardId}
                ref={(el) => registerReveal(cardId, el)}
                data-reveal-id={cardId}
                className={`project-card reveal-item ${visibleElements[cardId] ? 'is-visible' : ''}`}
                style={{
                  ...styles.projectCard,
                  transitionDelay: `${(i % 3) * 0.1}s`,
                }}
              >
                <div style={styles.projectAccentBar} />
                <div style={styles.projectCardBody}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <span style={styles.projectSubtitle}>{project.subtitle}</span>

                  <div style={styles.techTagRow}>
                    {project.tech.map((t, j) => (
                      <span key={j} style={styles.techTag}>{t}</span>
                    ))}
                  </div>

                  <p style={styles.projectDesc}>{project.description}</p>

                  <div style={styles.projectCtaRow}>
                    {project.category === 'frontend' && (
                      <a
                        href={urls.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credential-btn"
                        style={styles.credentialBtn}
                      >
                        View Credential ↗
                      </a>
                    )}
                    <a
                      href={urls.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.githubIconLink}
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        ref={(el) => (sectionRefs.current['Achievements'] = el)}
        className="section-pad"
        style={styles.section}
      >
        <SectionHeader title="Achievements & Certifications" />
        <div style={styles.achvGrid}>
          {ACHIEVEMENTS.map((a, i) => {
            const achvKey = `achv-${i}`;
            return (
              <div
                key={i}
                ref={(el) => registerReveal(achvKey, el)}
                data-reveal-id={achvKey}
                className={`achv-card reveal-item ${visibleElements[achvKey] ? 'is-visible' : ''}`}
                style={{
                  ...styles.achvCard,
                  transitionDelay: `${(i % 2) * 0.1}s`,
                }}
              >
                <div style={styles.achvIconBox}>🏆</div>
                <div style={{ flex: 1 }}>
                  <h3 style={styles.achvTitle}>{a.title}</h3>
                  <div style={styles.achvOrg}>{a.org}</div>
                  <div style={styles.achvDate}>📅 {a.date}</div>
                  <p style={styles.achvDesc}>{a.description}</p>
                  <a
                    href={a.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-btn"
                    style={styles.smallCredentialBtn}
                  >
                    View Credential ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={(el) => (sectionRefs.current['Contact'] = el)}
        className="section-pad"
        style={styles.contactSection}
      >
        <div
          ref={(el) => registerReveal('contact-box', el)}
          data-reveal-id="contact-box"
          className={`reveal-item ${visibleElements['contact-box'] ? 'is-visible' : ''}`}
        >
          <h2 style={styles.footerTitle}>Let's Work Together</h2>
          <p style={styles.footerSub}>
            I'm always excited to discuss new projects, creative ideas, or opportunities to
            contribute to your vision. Reach out through any of the channels below.
          </p>
          <div style={styles.contactGrid}>
            {CONTACT_LINKS.map((c, i) =>
              c.href ? (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-btn"
                  style={styles.contactBtn}
                >
                  <i className={c.icon} />
                  <span>{c.label}</span>
                </a>
              ) : (
                <div key={i} className="contact-btn" style={{ ...styles.contactBtn, cursor: 'default' }}>
                  <i className={c.icon} />
                  <span>{c.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>Think. Code. Improve. Repeat.</p>
      </footer>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={styles.sectionHeader}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionUnderline} />
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    color: '#0F172A',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden',
  },
  progressTrack: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '3px',
    backgroundColor: '#E2E8F0', zIndex: 1000,
  },
  progressFill: { height: '100%', background: '#0EA5E9', transition: 'width 0.15s linear' },

  navbar: {
    position: 'sticky', top: 0, zIndex: 900,
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderBottom: '1px solid #E2E8F0',
  },
  navInner: {
    maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  brand: { display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' },
  brandAvatar: {
    width: '40px', height: '40px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #0F172A, #0EA5E9)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#FFFFFF', flexShrink: 0, overflow: 'hidden',
  },
  brandName: { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#0F172A' },
  navLinks: { display: 'flex', gap: '1.75rem' },
  navLink: { cursor: 'pointer', fontSize: '0.92rem' },
  navCta: {
    background: '#0EA5E9', color: '#FFFFFF', padding: '0.6rem 1.4rem',
    borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem',
  },
  hamburger: {
    display: 'none', flexDirection: 'column', gap: '4px', alignItems: 'center',
    background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.4rem',
  },
  hamburgerBar: { width: '5px', height: '5px', borderRadius: '50%', background: '#0F172A' },
  mobileMenu: {
    display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem 1.5rem',
    gap: '1rem', borderTop: '1px solid #E2E8F0',
  },
  mobileLink: { fontSize: '1rem', fontWeight: 500, color: '#0F172A', cursor: 'pointer' },
  mobileCta: {
    background: '#0EA5E9', color: '#FFFFFF', padding: '0.7rem 1.4rem',
    borderRadius: '999px', fontWeight: 600, textAlign: 'center', marginTop: '0.5rem',
  },

  hero: {
    minHeight: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    padding: '5rem 2rem',
    background: 'linear-gradient(to bottom right, #F8FAFC, #E0F2FE)',
  },
  heroInner: { maxWidth: '720px', margin: '0 auto', width: '100%' },
  availabilityPill: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.5rem 1rem', backgroundColor: '#FFFFFF', borderRadius: '999px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)', marginBottom: '1.5rem',
    fontSize: '0.85rem', fontWeight: 500, color: '#334155', width: 'fit-content',
  },
  pulseDot: { width: '8px', height: '8px', backgroundColor: '#0EA5E9', borderRadius: '999px' },
  heroTitle: {
    fontFamily: "'Poppins', sans-serif", fontSize: '3rem', fontWeight: 700,
    lineHeight: 1.2, margin: '0 0 1rem',
  },
  heroRole: { fontSize: '1.4rem', color: '#334155', fontWeight: 600, marginBottom: '1rem' },
  heroSub: { fontSize: '1.05rem', color: '#64748B', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '620px' },
  heroActions: { display: 'flex', flexWrap: 'wrap', gap: '1rem' },
  primaryCta: {
    background: '#0EA5E9', color: '#FFFFFF', padding: '0.9rem 2rem',
    borderRadius: '999px', fontWeight: 600, fontFamily: "'Poppins', sans-serif",
  },
  ghostCta: {
    background: '#FFFFFF', border: '2px solid #E2E8F0', color: '#0F172A',
    padding: '0.9rem 2rem', borderRadius: '999px', fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
  },

  marqueeSection: {
    padding: '1.75rem 0',
    borderTop: '1px solid #E2E8F0',
    borderBottom: '1px solid #E2E8F0',
    background: '#FFFFFF',
    overflow: 'hidden',
  },
  marqueeRow: { width: '100%', overflow: 'hidden' },
  marqueeTrack: { display: 'flex', width: 'max-content', gap: '2.5rem' },
  techChip: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
    padding: '0.5rem 1rem', border: '1px solid transparent', borderRadius: '10px', minWidth: '84px',
  },
  techChipLabel: { fontSize: '0.7rem', color: '#64748B', fontWeight: 600 },

  section: { padding: '5rem 2rem' },
  sectionHeader: { maxWidth: '1200px', margin: '0 auto 3.5rem', textAlign: 'center' },
  sectionTitle: { fontFamily: "'Poppins', sans-serif", fontSize: '2.25rem', fontWeight: 700, margin: 0 },
  sectionUnderline: {
    width: '5rem', height: '4px', background: '#0EA5E9',
    margin: '1rem auto 0', borderRadius: '999px',
  },

  // STACKED ABOUT LAYOUT
  aboutStackedLayout: {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  card: {
    background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px',
    padding: '2.2rem', boxShadow: '0 10px 25px -10px rgba(15,23,42,0.06)',
  },
  cardTitleAccent: { fontFamily: "'Poppins', sans-serif", color: '#0EA5E9', fontSize: '1.4rem', marginTop: 0, marginBottom: '1.5rem' },
  storyGrid: {
    display: 'grid',
    gridTemplateColumns: '220px 1fr',
    gap: '2rem',
    alignItems: 'center',
  },
  storyImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  storyImageCard: {
    position: 'relative',
    width: '180px',
    height: '180px',
  },
  photoContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, #E0F2FE, #F1F5F9)',
    border: '2px solid #0EA5E9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 12px 20px -8px rgba(14,165,233,0.25)',
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '22px',
  },
  experienceBadge: {
    position: 'absolute',
    bottom: '-12px',
    right: '-10px',
    background: '#0F172A',
    color: '#FFFFFF',
    padding: '0.4rem 0.8rem',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  badgeNumber: { fontSize: '0.85rem', fontWeight: 800, color: '#0EA5E9' },
  badgeText: { fontSize: '0.65rem', fontWeight: 600 },
  storyTextContent: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  paragraph: { color: '#334155', lineHeight: 1.75, margin: 0, fontSize: '0.98rem' },
  highlightsRow: { display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' },
  highlightChip: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#0EA5E9',
    background: '#E0F2FE',
    padding: '0.35rem 0.8rem',
    borderRadius: '999px',
  },

  // STACKED EDUCATION CARD
  educationCard: {
    background: 'linear-gradient(135deg, #0F172A, #1E293B)',
    border: 'none',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1.5rem',
  },
  eduHeaderRow: { display: 'flex', alignItems: 'center', gap: '1.25rem' },
  eduHeading: { fontFamily: "'Poppins', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#0EA5E9' },
  eduDegree: { fontSize: '1.1rem', fontWeight: 600, color: '#FFFFFF', marginTop: '0.2rem' },
  eduSchool: { fontSize: '0.9rem', opacity: 0.8, marginTop: '0.25rem' },
  eduFooterRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  eduYear: { color: '#38BDF8', fontWeight: 600, fontSize: '0.95rem' },
  eduCgpa: {
    background: 'rgba(56,189,248,0.15)',
    color: '#38BDF8',
    padding: '0.3rem 0.8rem',
    borderRadius: '999px',
    fontWeight: 700,
    fontSize: '0.85rem',
  },

  skillGroupBlock: { maxWidth: '1200px', margin: '0 auto 3rem' },
  skillGroupHeader: { display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' },
  skillGroupBar: { width: '32px', height: '4px', background: '#0EA5E9', borderRadius: '999px' },
  skillGroupIcon: { fontSize: '1.4rem' },
  skillGroupTitle: { fontFamily: "'Poppins', sans-serif", fontSize: '1.4rem', fontWeight: 700, margin: 0 },
  skillIconGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1.25rem' },
  skillIconCard: {
    background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px',
    padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: '0.75rem', boxShadow: '0 4px 10px rgba(15,23,42,0.04)',
  },
  skillIconLabel: { fontSize: '0.85rem', fontWeight: 600, color: '#334155' },

  expWrap: { maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  expCard: {
    background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px',
    padding: '2rem', boxShadow: '0 10px 15px -8px rgba(15,23,42,0.06)',
  },
  expTopRow: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start',
    gap: '0.75rem', marginBottom: '1.25rem',
  },
  expRole: { fontFamily: "'Poppins', sans-serif", fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.25rem' },
  expCompany: { color: '#0EA5E9', fontWeight: 600, fontSize: '0.95rem' },
  expDate: {
    background: '#F1F5F9', color: '#334155', fontSize: '0.8rem', fontWeight: 600,
    padding: '0.4rem 0.9rem', borderRadius: '999px', whiteSpace: 'nowrap',
  },
  expList: { margin: '0 0 1.5rem', paddingLeft: '1.25rem' },
  expListItem: { color: '#334155', lineHeight: 1.75, marginBottom: '0.6rem', fontSize: '0.95rem' },

  credentialBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
    padding: '0.6rem 1.3rem', border: '2px solid #0EA5E9', color: '#0EA5E9',
    borderRadius: '999px', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
  },
  smallCredentialBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.9rem',
    padding: '0.4rem 1rem', border: '2px solid #0EA5E9', color: '#0EA5E9',
    borderRadius: '999px', fontWeight: 600, fontSize: '0.78rem', textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
  },

  filterRow: { maxWidth: '1200px', margin: '0 auto 3rem', display: 'flex', justifyContent: 'center' },
  filterPillWrap: {
    display: 'inline-flex', backgroundColor: '#FFFFFF', borderRadius: '999px',
    padding: '0.3rem', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0',
  },
  filterPill: {
    padding: '0.6rem 1.6rem', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem',
    border: 'none', cursor: 'pointer', textTransform: 'capitalize',
    fontFamily: "'Poppins', sans-serif",
  },

  projectsGrid: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem',
  },
  projectCard: {
    background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '18px',
    overflow: 'hidden', boxShadow: '0 10px 20px -12px rgba(15,23,42,0.1)',
  },
  projectAccentBar: { height: '6px', background: '#0EA5E9' },
  projectCardBody: { padding: '2rem' },
  projectTitle: { fontFamily: "'Poppins', sans-serif", fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.25rem' },
  projectSubtitle: { fontSize: '0.85rem', color: '#0EA5E9', fontWeight: 600 },
  techTagRow: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1rem 0' },
  techTag: {
    fontSize: '0.78rem', padding: '0.3rem 0.75rem', background: '#F1F5F9',
    borderRadius: '999px', color: '#334155', fontWeight: 500,
  },
  projectDesc: { color: '#64748B', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '1.5rem' },
  projectCtaRow: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
  githubIconLink: {
    width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '2px solid #E2E8F0', borderRadius: '999px', color: '#0F172A', textDecoration: 'none',
    fontSize: '1.1rem',
  },

  achvGrid: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem',
  },
  achvCard: {
    background: '#FFFFFF', borderRadius: '16px', padding: '1.5rem',
    display: 'flex', gap: '1rem', alignItems: 'flex-start',
    border: '1px solid #E2E8F0', boxShadow: '0 4px 10px rgba(15,23,42,0.05)',
  },
  achvIconBox: {
    width: '48px', height: '48px', background: '#E0F2FE', borderRadius: '12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0,
  },
  achvTitle: { fontFamily: "'Poppins', sans-serif", fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' },
  achvOrg: { color: '#0EA5E9', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.4rem' },
  achvDate: { fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.6rem' },
  achvDesc: { color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 },

  contactSection: {
    padding: '5rem 2rem', textAlign: 'center',
    background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#FFFFFF',
  },
  footerTitle: { fontFamily: "'Poppins', sans-serif", fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' },
  footerSub: { fontSize: '1.05rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 },
  contactGrid: {
    maxWidth: '900px', margin: '0 auto',
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',
  },
  contactBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
    color: '#FFFFFF', padding: '0.9rem 1.5rem', borderRadius: '999px',
    fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
  },

  footer: {
    padding: '2rem', backgroundColor: '#0F172A', color: '#94A3B8', textAlign: 'center',
  },
};