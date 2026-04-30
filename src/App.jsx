import { useState, useEffect, useRef } from "react";
 
const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
 
const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Angular"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
  Concepts: ["OOP", "REST APIs", "JWT", "MVC", "Agile Scrum"],
};
 
const PROJECTS = [
  {
    title: "Emotion-Based Music Player",
    emoji: "🎵",
    points: [
      "Integrated MediaPipe/DeepFace for high-accuracy facial landmark tracking.",
      "Designed a Tkinter/Streamlit GUI for user interaction and debugging.",
      "Optimized frame processing for smooth real-time performance and reduced latency.",
      "Built a dynamic music-player module that auto-switches playlists based on detected emotion.",
    ],
    tags: ["Python", "MediaPipe", "DeepFace", "Streamlit", "Tkinter"],
  },
];
 
const TIMELINE = [
  {
    year: "2025",
    role: "Full Stack Web Developer Intern",
    company: "TekkyBench",
    duration: "6 Months",
    points: [
      "Developed responsive UI components in React.js improving loading speed and UX.",
      "Designed and consumed RESTful APIs for frontend-backend data communication.",
      "Integrated MongoDB with Node.js for dynamic data storage.",
      "Optimized API calls with basic caching, reducing response time by up to 30%.",
      "Collaborated in Agile sprints and managed Git version control for releases.",
    ],
  },
];
 
const EDUCATION = [
  { degree: "B.E – Information Science & Engineering", inst: "Visvesvaraya Technological University", year: "2021–2025", score: "CGPA: 7.4" },
  { degree: "Pre-University", inst: "SS Margol PU College, Shahabad", year: "", score: "64%" },
  { degree: "SSLC", inst: "Mini Rose Public School, Shahabad", year: "", score: "58.8%" },
];
 
export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const titles = ["Full Stack Developer", "React.js Enthusiast", "API Architect", "Problem Solver"];
  const titleRef = useRef(0);
  const charRef = useRef(0);
  const dirRef = useRef(1);
 
  useEffect(() => {
    const interval = setInterval(() => {
      const cur = titles[titleRef.current];
      if (dirRef.current === 1) {
        charRef.current++;
        setTyped(cur.slice(0, charRef.current));
        if (charRef.current === cur.length) {
          dirRef.current = -1;
          setTimeout(() => {}, 1200);
        }
      } else {
        charRef.current--;
        setTyped(cur.slice(0, charRef.current));
        if (charRef.current === 0) {
          dirRef.current = 1;
          titleRef.current = (titleRef.current + 1) % titles.length;
        }
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const c = setInterval(() => setShowCursor(p => !p), 500);
    return () => clearInterval(c);
  }, []);
 
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };
 
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0a0f", color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0a0f; } ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 2px; }
        html { scroll-behavior: smooth; }
        .nav-link { transition: color 0.2s; cursor: pointer; } .nav-link:hover { color: #a78bfa; }
        .skill-pill { transition: all 0.2s; } .skill-pill:hover { background: #7c3aed !important; color: #fff !important; transform: translateY(-2px); }
        .card { transition: transform 0.25s, box-shadow 0.25s; } .card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(124,58,237,0.25) !important; }
        .cta-btn { transition: all 0.2s; } .cta-btn:hover { background: #6d28d9 !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,0.4); }
        .ghost-btn { transition: all 0.2s; } .ghost-btn:hover { background: rgba(124,58,237,0.15) !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px);} to {opacity:1; transform:translateY(0);} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(124,58,237,0.5)} 70%{box-shadow:0 0 0 14px rgba(124,58,237,0)} 100%{box-shadow:0 0 0 0 rgba(124,58,237,0)} }
        .avatar { animation: float 4s ease-in-out infinite, pulse-ring 2.5s ease-out infinite; }
        .hero-text { animation: fadeUp 0.7s ease both; }
        .hero-sub { animation: fadeUp 0.7s 0.15s ease both; }
        .hero-ctas { animation: fadeUp 0.7s 0.3s ease both; }
        .section-fade { animation: fadeUp 0.6s ease both; }
        .dot-grid { background-image: radial-gradient(rgba(124,58,237,0.18) 1px, transparent 1px); background-size: 28px 28px; }
        .glow-line { background: linear-gradient(90deg, transparent, #7c3aed, transparent); height: 1px; }
        @media (max-width: 640px) { .hero-name { font-size: 2.6rem !important; } .section-title { font-size: 1.8rem !important; } }
      `}</style>
 
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(124,58,237,0.15)", padding: "0 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#a78bfa", letterSpacing: 1 }}>SANJU</span>
          <div style={{ display: "flex", gap: "1.8rem" }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" onClick={() => scrollTo(l)} style={{ fontSize: "0.88rem", fontWeight: 500, color: active === l ? "#a78bfa" : "#9ca3af", letterSpacing: 0.5 }}>{l}</span>
            ))}
          </div>
          <a href="https://github.com/Sanjuismart" target="_blank" rel="noopener noreferrer" style={{ background: "#7c3aed", color: "#fff", padding: "6px 16px", borderRadius: 20, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }} className="cta-btn">GitHub</a>
        </div>
      </nav>
 
      {/* HERO */}
      <section id="about" className="dot-grid" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80, paddingBottom: 60, padding: "80px 2rem 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="avatar" style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#fff", userSelect: "none" }}>S</div>
 
          <p className="hero-sub" style={{ color: "#7c3aed", fontWeight: 600, letterSpacing: 3, fontSize: "0.78rem", textTransform: "uppercase", marginBottom: "0.8rem" }}>Available for Opportunities</p>
 
          <h1 className="hero-name hero-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: "3.8rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.2rem", background: "linear-gradient(135deg, #e8e6f0 30%, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Hi, I'm Sanju
          </h1>
 
          <div className="hero-sub" style={{ fontSize: "1.4rem", fontWeight: 500, color: "#a78bfa", marginBottom: "1.4rem", minHeight: 36 }}>
            {typed}<span style={{ opacity: showCursor ? 1 : 0, color: "#7c3aed" }}>|</span>
          </div>
 
          <p className="hero-sub" style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: 1.75, maxWidth: 620, margin: "0 auto 2.4rem" }}>
            Full Stack Developer passionate about building responsive, scalable web applications using React.js, Node.js, Express.js and MongoDB. Strong in REST APIs, Agile practices and clean code.
          </p>
 
          <div className="hero-ctas" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("Projects")} style={{ background: "#7c3aed", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 28, fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}>View Projects</button>
            <button className="ghost-btn" onClick={() => scrollTo("Contact")} style={{ background: "transparent", color: "#a78bfa", border: "1.5px solid #7c3aed", padding: "12px 28px", borderRadius: 28, fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}>Contact Me</button>
            <a href="https://www.linkedin.com/in/sanju-kumbar-986709296" target="_blank" rel="noopener noreferrer" style={{ background: "#0a66c2", color: "#fff", border: "none", padding: "12px 24px", borderRadius: 28, fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }} className="cta-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
 
          <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
            {[["6 Months", "Experience"], ["2", "Projects"], ["10+", "Technologies"], ["7.4", "CGPA"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#a78bfa" }}>{num}</div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <div className="glow-line" style={{ margin: "0 2rem" }} />
 
      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeader title="Technical Skills" sub="Technologies I work with" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="card" style={{ background: "#111118", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 16, padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#a78bfa", marginBottom: "1rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2 }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map(s => (
                    <span key={s} className="skill-pill" style={{ background: "rgba(124,58,237,0.12)", color: "#c4b5fd", padding: "4px 10px", borderRadius: 20, fontSize: "0.78rem", fontWeight: 500, cursor: "default", border: "1px solid rgba(124,58,237,0.2)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <div className="glow-line" style={{ margin: "0 2rem" }} />
 
      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionHeader title="Experience" sub="Where I've worked" />
          {TIMELINE.map((t, i) => (
            <div key={i} className="card" style={{ marginTop: "2.5rem", background: "#111118", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "linear-gradient(180deg,#7c3aed,#a78bfa)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: "0.5rem" }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#e8e6f0" }}>{t.role}</div>
                  <div style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.9rem" }}>{t.company}</div>
                </div>
                <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", padding: "4px 12px", borderRadius: 20, fontSize: "0.8rem", fontWeight: 600, height: "fit-content", border: "1px solid rgba(124,58,237,0.3)" }}>{t.duration} · {t.year}</span>
              </div>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {t.points.map((p, j) => <li key={j} style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.65 }}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
 
      <div className="glow-line" style={{ margin: "0 2rem" }} />
 
      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHeader title="Projects" sub="Things I've built" />
          <div style={{ display: "grid", gap: "1.5rem", marginTop: "2.5rem" }}>
            {PROJECTS.map((p, i) => (
              <div key={i} className="card" style={{ background: "#111118", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 20, padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "1.8rem" }}>{p.emoji}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#e8e6f0" }}>{p.title}</h3>
                </div>
                <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.2rem" }}>
                  {p.points.map((pt, j) => <li key={j} style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.65 }}>{pt}</li>)}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {p.tags.map(t => <span key={t} className="skill-pill" style={{ background: "rgba(124,58,237,0.12)", color: "#c4b5fd", padding: "3px 10px", borderRadius: 20, fontSize: "0.75rem", border: "1px solid rgba(124,58,237,0.2)" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <div className="glow-line" style={{ margin: "0 2rem" }} />
 
      {/* EDUCATION */}
      <section id="education" style={{ padding: "80px 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionHeader title="Education" sub="My academic background" />
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {EDUCATION.map((e, i) => (
              <div key={i} className="card" style={{ background: "#111118", border: "1px solid rgba(124,58,237,0.15)", borderRadius: 16, padding: "1.4rem 1.8rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#e8e6f0", fontSize: "0.95rem" }}>{e.degree}</div>
                  <div style={{ color: "#6b7280", fontSize: "0.82rem", marginTop: 4 }}>{e.inst} {e.year && `· ${e.year}`}</div>
                </div>
                <span style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", padding: "4px 14px", borderRadius: 20, fontSize: "0.82rem", fontWeight: 700, border: "1px solid rgba(124,58,237,0.25)" }}>{e.score}</span>
              </div>
            ))}
          </div>
 
          {/* Achievements */}
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#a78bfa", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.78rem" }}>Key Achievements</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Built a full-stack application end-to-end (UI + Backend + Database)", "Improved API performance using optimization and caching", "Participated in Agile development life cycle (sprints, stand-ups)"].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "#9ca3af", fontSize: "0.9rem" }}>
                  <span style={{ color: "#7c3aed", marginTop: 3, flexShrink: 0 }}>▸</span>{a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <div className="glow-line" style={{ margin: "0 2rem" }} />
 
      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 2rem 60px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <SectionHeader title="Contact" sub="Let's build something together" />
          <p style={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: 1.75, margin: "1.5rem 0 2.5rem" }}>
            I'm open to full-time roles, internships and freelance projects. Feel free to reach out!
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <ContactCard icon="✉️" label="Email" value="sanjukumbar408@gmail.com" href="mailto:sanjukumbar408@gmail.com" />
            <ContactCard icon="📞" label="Phone" value="+91 8762374480" href="tel:+918762374480" />
            <ContactCard icon="💼" label="LinkedIn" value="sanju-kumbar" href="https://www.linkedin.com/in/sanju-kumbar-986709296" />
            <ContactCard icon="🐙" label="GitHub" value="Sanjuismart" href="https://github.com/Sanjuismart" />
          </div>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "1.5rem", borderTop: "1px solid rgba(124,58,237,0.15)", color: "#4b5563", fontSize: "0.8rem" }}>
        Designed & Built by <span style={{ color: "#a78bfa", fontWeight: 600 }}>Sanju</span> · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
 
function SectionHeader({ title, sub }) {
  return (
    <div className="section-fade">
      <p style={{ color: "#7c3aed", fontWeight: 600, letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{sub}</p>
      <h2 className="section-title" style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#e8e6f0" }}>{title}</h2>
    </div>
  );
}
 
function ContactCard({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card" style={{ background: "#111118", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 14, padding: "1.2rem 1.8rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 220 }}>
      <span style={{ fontSize: "1.4rem" }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{ color: "#6b7280", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
        <div style={{ color: "#c4b5fd", fontWeight: 500, fontSize: "0.85rem" }}>{value}</div>
      </div>
    </a>
  );
}