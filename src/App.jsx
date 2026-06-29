import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Todo List Application',
      category: 'fullstack',
      tech: ['FastAPI', 'PostgreSQL', 'REST API'],
      description: 'Full-stack task management app with 8 API endpoints responding in 150ms. Features secure authentication and handles 100+ users efficiently.',
      metrics: [
        { label: 'API Endpoints', value: '8' },
        { label: 'Response Time', value: '150ms' },
        { label: 'Active Users', value: '100+' },
        { label: 'Test Cases', value: '25+' }
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'ProductHub',
      category: 'fullstack',
      tech: ['React.js', 'FastAPI', 'PostgreSQL'],
      description: 'Complete product management system with CRUD operations. Features structured data model and reliable PostgreSQL backend.',
      metrics: [
        { label: 'Operations', value: 'Full CRUD' },
        { label: 'Backend', value: 'REST API' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Frontend', value: 'React' }
      ],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Memory Card Game',
      category: 'frontend',
      tech: ['React.js', 'JavaScript', 'CSS3'],
      description: 'Interactive matching game with 20+ card pairs. Optimized for 60% faster loading and responsive across all devices.',
      metrics: [
        { label: 'Card Pairs', value: '20+' },
        { label: 'Speed Boost', value: '60%' },
        { label: 'Screen Sizes', value: '5+' },
        { label: 'Scoring', value: 'Real-time' }
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Firebase Auth System',
      category: 'frontend',
      tech: ['Firebase', 'React.js', 'OAuth 2.0'],
      description: 'Secure authentication supporting email/password and Google sign-in with 99% success rate. Reduced failed logins by 75%.',
      metrics: [
        { label: 'Success Rate', value: '99%' },
        { label: 'Auth Types', value: 'OAuth 2.0' },
        { label: 'Users', value: '30+' },
        { label: 'Error Reduction', value: '75%' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },

    {
      title: 'GVR Grill Works- Business Portfolio',
      category: 'frontend',
      tech: ['Firebase', 'React.js', 'OAuth 2.0'],
      description: ' Designed and deployed a responsive business website with structured navigation, gallery sections, and Google Maps integration to improve user engagement.',
      metrics: [
        { label: 'Success Rate', value: '99%' },
        { label: 'Auth Types', value: 'OAuth 2.0' },
        { label: 'Users', value: '500+' },
        { label: 'Error Reduction', value: '75%' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'AI-Powered Translator App',
      category: 'AI',
      tech: ['Firebase', 'React.js', 'FastAPI '],
      description: '  Built a full-stack AI-powered translation platform enabling real-time multilingual text translation, word meaning retrieval, and document parsing (PDF, DOCX, TXT) using React and FastAPI.',
      metrics: [
        { label: 'Success Rate', value: '99%' },
        { label: 'Auth Types', value: 'Pydantic' },
        { label: 'Users', value: '100+' },
        { label: 'Error Reduction', value: '85%' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Local PDF Chatbot ',
      category: 'AI',
      tech: ['Streamlit', 'Langchain', 'FastAPI ', 'FAISS', 'Ollama'],
      description: '  Built a fully offline AI-powered PDF chatbot using RAG pipeline with FAISS vector search, LangChain for private document Q&A without internet connectivity, featuring persistent chat history and multi-format support (PDF, DOCX).',
      metrics: [
        { label: 'Success Rate', value: '99%' },
        { label: 'AI Model', value: 'Phi-4' },
        { label: 'Users', value: '50+' },
        { label: 'Error Reduction', value: '85%' }
      ],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },

  ];

  const skills = [
    { category: 'Programming Languages', items: 'Python, Java, JavaScript (ES6+)' },
    { category: 'Frontend Technologies', items: 'HTML5, CSS3, Bootstrap, React.js ' },
    { category: 'Backend Technologies', items: 'FastAPI, Django, SQLAlchemy (ORM)' },
    { category: 'Databases', items: 'PostgreSQL, MySQL, ChromaDB (VectorDB), Redis' },
    { category: 'AI/ML', items: 'RAG Pipeline, LLM Architecture, NLP, LangChain, FAISS, Streamlit, Ollama' },

    { category: 'Cloud & DevOps', items: 'AWS (EC2, S3), Firebase,Supabase, Render, Vercel, Docker, CI/CD Pipeline, Git, GitHub' },
    { category: 'Testing & Tools', items: 'Postman, Pytest, Unit Testing, VS Code' },
  ];

  const achievements = [
    {
      title: 'AI Fluency Framework & Foundations',
      organization: 'Anthropic Courses',
      date: 'June 2026',
      description: 'Completed a structured program covering foundational principles and frameworks of Artificial Intelligence',
      color: '#ea6208'
    },

    {
      title: '24-Hour Hackathon',
      organization: 'Google Developer Group',
      date: ' April 2025',
      description: 'Competed with 50+ teams on sustainable development goals',
      color: '#eab308'
    },
    {
      title: 'Django REST API Workshop',
      organization: 'AAA College of Engineering and Technology',
      date: 'October 2024',
      description: 'Built 5+ working endpoints in 8-hour intensive workshop',
      color: '#3b82f6'
    },

    {
      title: 'TechFusion Workshop',
      organization: 'Thiagarajar College',
      date: 'September 2024',
      description: 'Learned 6+ technologies including cloud computing and DevOps',
      color: '#a855f7'
    },
    {
      title: 'Web Development Workshop',
      organization: 'NIT Trichy',
      date: 'March 2024',
      description: 'Modern JavaScript frameworks and best practices',
      color: '#10b981'
    },

  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#111827', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: '#e5e7eb', zIndex: 9999 }}>
        <div style={{ height: '100%', background: 'linear-gradient(to right, #7c3aed, #a855f7, #ec4899)', width: scrollProgress + '%', transition: 'width 0.3s' }} />
      </div>

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 2rem', background: 'linear-gradient(to bottom right, #f5f3ff, #fae8ff)', flex: 1 }}>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#ffffff', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '9999px' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Available for opportunities</span>
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Hi, I'm <br />
              <span style={{ background: 'linear-gradient(to right, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Vishal V
              </span>
            </h1>

            <p style={{ fontSize: '1.5rem', color: '#374151', marginBottom: '1rem', fontWeight: 500 }}>
              AI Full Stack Developer | Generative AI
            </p>

            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', lineHeight: 1.75 }}>
              Computer Science and Engineering graduate specializing in React.js, FastAPI, and Generative AI. I develop scalable web applications and AI-powered solutions with clean architecture, efficient performance, and exceptional user experiences.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <a href="mailto:vishalraghavan2904@gmail.com" style={{ padding: '1rem 2rem', background: 'linear-gradient(to right, #7c3aed, #a855f7)', color: '#ffffff', borderRadius: '9999px', fontWeight: 600, textDecoration: 'none' }}>
                Get In Touch
              </a>
              <a href="#projects" style={{ padding: '1rem 2rem', backgroundColor: '#ffffff', border: '2px solid #d1d5db', borderRadius: '9999px', fontWeight: 600, textDecoration: 'none', color: '#111827' }}>
                View Work
              </a>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/Vishal29-git" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', fontSize: '20px' }}><i className="fa-brands fa-github"></i></a>
              <a href="https://linkedin.com/in/vishal-29-v" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', fontSize: '20px' }}> <i className="fa-brands fa-linkedin-in"></i></a>
              <a href="mailto:vishalraghavan2904@gmail.com" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textDecoration: 'none', fontSize: '20px' }}><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>


      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>About Me</h2>
            <div style={{ width: '6rem', height: '4px', background: 'linear-gradient(to right, #7c3aed, #ec4899)', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#7c3aed' }}>My Story</h3>
              <p style={{ color: '#374151', lineHeight: 1.75, marginBottom: '1rem' }}>
                I'm a passionate developer who enjoys turning complex problems into clean, simple, and elegant solutions. I love building things that actually work (and sometimes even on the first try 😄). Always curious, always learning, and always coding.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.75 }}>
                I specialize in building modern web applications with React.js, FastAPI and Generative AI, focusing on performance, security, and user experience. Every project is an opportunity to learn and push the boundaries of what's possible.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#7c3aed' }}>What I Do</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                {[
                  { icon: '💻', title: 'Frontend Development', desc: 'React.js, Responsive UI' },
                  { icon: '🖥️', title: 'Backend Development', desc: 'Python, FastAPI, REST APIs' },
                  { icon: '🗄️', title: 'Database Design', desc: 'PostgreSQL, Firebase' },
                  { icon: '⚡', title: 'API Development', desc: 'RESTful, Authentication, OAuth' },
                  { icon: '🤖', title: 'AI Solutions', desc: 'Generative AI, RAG, LangChain' },
                  { icon: '🔧', title: 'DevOps & Tools', desc: 'Git, Docker, CI/CD' },

                ].map((service, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.5rem' }}>{service.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{service.title}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: '#7c3aed' }}>Contact Info</h4>
                {[
                  { icon: '📍', label: 'Location', value: 'Madurai, Tamil Nadu' },
                  { icon: '✉️', label: 'Email', value: 'vishalraghavan2904@gmail.com' },
                  { icon: '📞', label: 'Phone', value: '+91 9790557118' }
                ].map((info, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{info.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{info.label}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'linear-gradient(to bottom right, #7c3aed, #a855f7)', padding: '1.5rem', borderRadius: '1rem', color: '#ffffff', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📚</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Education</div>
                <div style={{ opacity: 0.9, marginBottom: '0.25rem' }}>BE Computer Science</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.75rem' }}>SACS MAVMM Engineering College</div>
                <div style={{ opacity: 0.9 }}>2022 - 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Technical Skills</h2>
            <div style={{ width: '6rem', height: '4px', background: 'linear-gradient(to right, #7c3aed, #ec4899)', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {skills.map((skill, i) => (
              <div key={i} style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {skill.category}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', lineHeight: '1.6' }}>
                  {skill.items}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Featured Projects</h2>
            <div style={{ width: '6rem', height: '4px', background: 'linear-gradient(to right, #7c3aed, #ec4899)', margin: '0 auto 2rem' }} />

            <div style={{ display: 'inline-flex', backgroundColor: '#ffffff', borderRadius: '9999px', padding: '0.25rem', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
              {['all', 'fullstack', 'frontend', 'AI'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.5rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    border: 'none',
                    background: activeTab === tab ? 'linear-gradient(to right, #7c3aed, #a855f7)' : 'transparent',
                    color: activeTab === tab ? '#ffffff' : '#6b7280',
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((project, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ height: '8px', background: project.gradient }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{project.title}</h3>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    {project.tech.map((tech, j) => (
                      <span key={j} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#f3f4f6', color: '#374151', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.75 }}>{project.description}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    {project.metrics.map((metric, j) => (
                      <div key={j} style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.75rem' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7c3aed', marginBottom: '0.25rem' }}>{metric.value}</div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Achievements & Certifications</h2>
            <div style={{ width: '6rem', height: '4px', background: 'linear-gradient(to right, #7c3aed, #ec4899)', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {achievements.map((achievement, i) => (
              <div key={i} style={{ backgroundColor: '#f9fafb', borderRadius: '1rem', padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: achievement.color, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '1.5rem', flexShrink: 0 }}>
                    🏆
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{achievement.title}</h3>
                    <div style={{ color: '#7c3aed', fontWeight: 500, marginBottom: '0.5rem' }}>{achievement.organization}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                      📅 {achievement.date}
                    </div>
                    <p style={{ color: '#6b7280' }}>{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(to bottom right, #7c3aed, #a855f7)', color: '#ffffff' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Let's Work Together</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '42rem', margin: '0 auto 3rem' }}>
            I'm always excited to discuss new projects, creative ideas, or opportunities to contribute to your vision.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <a href="mailto:vishalvadivel2904@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: '#ffffff', color: '#7c3aed', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}>
              📧 <span>Send Email</span>
            </a>
            <a href="https://linkedin.com/in/vishal-29-v" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'rgba(124, 58, 237, 0.7)', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}>
              <i className="fa-brands fa-linkedin-in"></i> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Vishal29-git" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'rgba(124, 58, 237, 0.7)', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none' }}>
              <i className="fa-brands fa-github"></i> <span>GitHub</span>
            </a>
          </div>


        </div>
      </section>

      <footer style={{ padding: '2rem', backgroundColor: '#111827', color: '#9ca3af', textAlign: 'center' }}>
        <p>Think. Code. Improve. Repeat</p>
      </footer>
    </div>
  );
}