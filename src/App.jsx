import { useEffect, useState } from "react";
import "./App.css";

const homeAssets = {
  logo: "https://www.figma.com/api/mcp/asset/b8b9f8d7-56c5-446a-972f-efd746d08f04.png",
  twitter: "https://www.figma.com/api/mcp/asset/15d3b5ad-e273-4a2e-a79a-0127cce2453d.png",
  social1: "https://www.figma.com/api/mcp/asset/6a829078-e6e5-476b-9288-704edbe446e3.png",
  social2: "https://www.figma.com/api/mcp/asset/b442fdd6-593e-4ca3-8f96-57ccbd0fb8fb.png",
  arrow: "https://www.figma.com/api/mcp/asset/43d4f09c-4126-4924-b719-051aeb623e97.png",
  tool1: "https://www.figma.com/api/mcp/asset/552a7ba4-8723-4f67-b942-36d8c28e5aa9.png",
  tool2: "https://www.figma.com/api/mcp/asset/03791814-9352-4de4-a542-4c318e4400b2.png",
  tool3: "https://www.figma.com/api/mcp/asset/de2403ac-31bb-402c-bc37-33213b2bd236.png",
  desktop: "https://www.figma.com/api/mcp/asset/fd0fe944-ea18-41c8-a868-702096671f89.png",
  work2bg: "https://www.figma.com/api/mcp/asset/6d30622f-b985-4ac7-8b93-2ccd1b5c25f7.svg",
  work2a: "https://www.figma.com/api/mcp/asset/08d89992-c76e-4022-a25e-04a499e8119a.png",
  work2b: "https://www.figma.com/api/mcp/asset/23fc17b7-e060-410f-a07a-819daa4a70ac.png",
  work2c: "https://www.figma.com/api/mcp/asset/d357f027-6ed9-4c93-b03f-a29ac36a1b19.png",
  work2d: "https://www.figma.com/api/mcp/asset/0824c0e1-dc7c-4abd-9f3d-016613d85c1d.png",
  work3: "https://www.figma.com/api/mcp/asset/d6bd5ca5-bbe6-4f33-9570-9babd4162aee.png",
  phone1: "https://www.figma.com/api/mcp/asset/160bb28f-31c9-4dbf-9ea2-d9a995175cf8.png",
  phone2: "https://www.figma.com/api/mcp/asset/21b7a84b-3966-4588-84e0-615de9eb4d11.png",
  phone3: "https://www.figma.com/api/mcp/asset/a7b32495-e818-4916-90bf-1f683809268d.png",
  phone4: "https://www.figma.com/api/mcp/asset/be766ec1-3173-40cc-b2a8-67211dd66af8.png",
  phone5: "https://www.figma.com/api/mcp/asset/fa862f1d-3af0-43a9-b47d-8a5f1faec1a2.png",
};

const aboutAssets = {
  logo: "https://www.figma.com/api/mcp/asset/59c0b10a-38e4-455a-a7b9-87184d733c40.png",
  twitter: "https://www.figma.com/api/mcp/asset/289c324c-2a65-4822-bd9d-e6538179ffeb.png",
  social1: "https://www.figma.com/api/mcp/asset/16bb27b8-1e8d-455f-84a0-899f9c76acaf.png",
  social2: "https://www.figma.com/api/mcp/asset/ff3a22ef-363e-429a-81a5-422f5ca0f189.png",
  photo1: "https://www.figma.com/api/mcp/asset/f77d1a7c-6796-4061-8425-ab99769f4f7b.png",
  photo2: "https://www.figma.com/api/mcp/asset/b24efa45-8ddd-443d-b980-46f61cee6427.png",
  photo3: "https://www.figma.com/api/mcp/asset/5e72833c-7c1b-423e-8a66-55866b393dac.png",
  framer: "https://www.figma.com/api/mcp/asset/8cb2283e-bd95-4825-b052-7a33a2e2f97c.png",
  figma: "https://www.figma.com/api/mcp/asset/18982f65-2126-4c62-969b-13f3de265acf.png",
  pinterest: "https://www.figma.com/api/mcp/asset/fdd7a066-66ea-4700-ba42-0128d9ef52e7.png",
  photoshop: "https://www.figma.com/api/mcp/asset/9ca649f1-0014-4665-829f-717905b1ac82.png",
  forms: "https://www.figma.com/api/mcp/asset/cd77ab63-a0ee-464b-bf84-4517aac85868.png",
  avatar1: "https://www.figma.com/api/mcp/asset/99eedde7-d23a-4006-a2f6-8ff2372f2479.png",
  avatar2: "https://www.figma.com/api/mcp/asset/aabaedd4-9942-4fae-9340-f147a3d9ee29.png",
  group3: "https://www.figma.com/api/mcp/asset/79d553a0-cecf-42af-bf09-ad753efaabcb.svg",
  group4: "https://www.figma.com/api/mcp/asset/52471b44-1222-4320-96ec-be6a60938062.svg",
};

const contactAssets = {
  logo: "https://www.figma.com/api/mcp/asset/124e222f-aeb1-4809-8b0b-0dcc622d06b9.png",
  twitter: "https://www.figma.com/api/mcp/asset/8312d3ee-9368-4aaf-b52e-82904cdda354.png",
  instagram: "https://www.figma.com/api/mcp/asset/c51de828-63b4-4678-b4b8-0fb25221f4a1.png",
  facebook: "https://www.figma.com/api/mcp/asset/18e99f62-eb50-4a21-994f-75f36550c399.png",
  emailIcon: "https://www.figma.com/api/mcp/asset/b349f122-b5b6-474d-bfc6-25d384393023.svg",
  linkedinIcon: "https://www.figma.com/api/mcp/asset/1e049cd2-ec59-4616-813d-9fb8190f2749.svg",
  behanceIcon: "https://www.figma.com/api/mcp/asset/ca7d2fe6-d92e-439a-b309-c7ee351480d1.svg",
  locationIcon: "https://www.figma.com/api/mcp/asset/3bd12c5b-6afc-4ce5-97d2-45d4253adf25.svg",
  arrow: "https://www.figma.com/api/mcp/asset/ed855fd9-8644-4db0-a601-7c29511618ed.svg",
};

// Social profiles. If your Facebook, Instagram, or X handles are different, change these three URLs.
const socialLinks = {
  whatsapp: "https://wa.me/2348108421139",
  facebook: "https://www.facebook.com/Samayo10432",
  instagram: "https://www.instagram.com/Samayo10432",
  twitter: "https://x.com/Samayo10432",
  behance: "https://www.behance.net/Samayo10432",
};

const projectLinks = {
  project1: {
    title: "Website Project",
    figma: "https://www.figma.com/design/E13Z4mjF0iFExQ7SGT8cVf/samuel-web-design",
    behance: "https://www.behance.net/Samayo10432",
  },
  project2: {
    title: "Web App Project",
    figma: "https://www.figma.com/design/E13Z4mjF0iFExQ7SGT8cVf/samuel-web-design",
    behance: "https://www.behance.net/Samayo10432",
  },
  project3: {
    title: "Dashboard Project",
    figma: "https://www.figma.com/design/E13Z4mjF0iFExQ7SGT8cVf/samuel-web-design",
    behance: "https://www.behance.net/Samayo10432",
  },
  project4: {
    title: "Mobile App Project",
    figma: "https://www.figma.com/design/E13Z4mjF0iFExQ7SGT8cVf/samuel-web-design",
    behance: "https://www.behance.net/Samayo10432",
  },
};

function SocialIcon({ type }) {
  if (type === "twitter") return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.49 22H3.38l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.26 4.02H6.4L17.8 19.9Z" fill="currentColor" /></svg>;
  if (type === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.7" r="1.2" fill="currentColor"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22 22 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.3v3h2.7v8h3.4Z" fill="currentColor"/></svg>;
}

function Socials({ assets, links = socialLinks }) {
  return (
    <div className="socials">
      <a href={links.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X"><SocialIcon type="twitter" /></a>
      <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon type="instagram" /></a>
      <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon type="facebook" /></a>
    </div>
  );
}

function Header({ about = false, contact = false }) {
  const a = contact ? contactAssets : (about ? aboutAssets : homeAssets);
  return <header className="header"><div className="header-inner">
    <div className="brand-area">
      <a className="brand-link" href="/" aria-label="Home">
        <img className="brand-logo" src={a.logo} alt="Samuel logo" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a className={!about && !contact ? "active" : ""} href="/" aria-label="Home"><span className="nav-icon" aria-hidden="true">⌂</span><span>Home</span></a>
        <a className={about ? "active" : ""} href="/about" aria-label="About Me"><span className="nav-icon" aria-hidden="true">◉</span><span>About Me</span></a>
        <a className={contact ? "active" : ""} href="/contact" aria-label="Contact"><span className="nav-icon" aria-hidden="true">✉</span><span>Contact</span></a>
      </nav>
    </div>
    <div className="contact-top">
      <a className="email" href="mailto:aiyemomisamuel6@gmail.com">aiyemomisamuel6@gmail.com</a>
      <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">08108421139</a>
      <Socials assets={a} />
    </div>
  </div></header>;
}

function CTA({ children, href = "/contact" }) {
  return <a className="cta" href={href}><span>{children}</span><span className="cta-arrow">→</span></a>;
}

function ProjectOptions({ project, onClose }) {
  const links = projectLinks[project];
  if (!links) return null;

  return (
    <div className="project-options" aria-label={`${links.title} links`}>
      <div className="project-options-copy">
        <strong>{links.title}</strong>
        <span>Choose where you want to view this project.</span>
      </div>
      <div className="project-option-links">
        <a href={links.figma} target="_blank" rel="noreferrer">
          <span>🎨</span> View Figma File <span>→</span>
        </a>
        <a href={links.behance} target="_blank" rel="noreferrer">
          <span>🔗</span> View on Behance <span>→</span>
        </a>
        <button type="button" onClick={onClose}>
          <span>←</span> Back to Home
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (project) => {
    setActiveProject((current) => current === project ? null : project);
  };

  return <main className="home-page">
    <Header />
    <section className="hero" id="home"><p className="eyebrow">Hey there&nbsp; I m Samuel</p><h1>Freelance UI/UX Designer &amp; Web Designer</h1><p className="hero-copy">I help business grow by crafting amazing web experiences. If<br />you’re looking for a designer and developer that likes to get stuff<br />done, let’s talk.</p><CTA href="#work">see my work</CTA></section>
    <section className="tools"><p>I had the pleasure of working with these tools</p><div className="tool-row"><img src={homeAssets.tool1} alt="Design tool" /><img src={homeAssets.tool2} alt="Design tool" /><img src={homeAssets.tool3} alt="Design tool" /><span className="tool-mark">↓</span></div></section>
    <section className="work-intro" id="work"><h2>My Work</h2><p>I specialize in website design and landing pages, but I’ve also<br />designed successful Mobile and web apps.</p></section>

    <section className="project project-one">
      <button className="project-image-button" type="button" onClick={() => openProject("project1")} aria-label="Open Website Project options">
        <img src={homeAssets.desktop} alt="Website project" />
      </button>
      {activeProject === "project1" && <ProjectOptions project="project1" onClose={() => setActiveProject(null)} />}
    </section>

    <section className="project project-two">
      <button className="project-image-button project-two-button" type="button" onClick={() => openProject("project2")} aria-label="Open Web App Project options">
        <img className="work2-bg" src={homeAssets.work2bg} alt="" />
        <div className="work2-images"><img src={homeAssets.work2b} alt="Web app project" /><img src={homeAssets.work2a} alt="Web app project" /><img src={homeAssets.work2c} alt="Web app project" /><img src={homeAssets.work2d} alt="Web app project" /></div>
      </button>
      {activeProject === "project2" && <ProjectOptions project="project2" onClose={() => setActiveProject(null)} />}
    </section>

    <section className="project project-three">
      <button className="project-image-button" type="button" onClick={() => openProject("project3")} aria-label="Open Dashboard Project options">
        <img src={homeAssets.work3} alt="Dashboard project" />
      </button>
      {activeProject === "project3" && <ProjectOptions project="project3" onClose={() => setActiveProject(null)} />}
    </section>

    <section className="project project-four">
      <button className="project-image-button project-four-button" type="button" onClick={() => openProject("project4")} aria-label="Open Mobile App Project options">
        <div className="phones"><img src={homeAssets.phone1} alt="Mobile app screen" /><img src={homeAssets.phone2} alt="Mobile app screen" /><img src={homeAssets.phone3} alt="Mobile app screen" /><img src={homeAssets.phone4} alt="Mobile app screen" /><img src={homeAssets.phone5} alt="Mobile app screen" /></div>
      </button>
      {activeProject === "project4" && <ProjectOptions project="project4" onClose={() => setActiveProject(null)} />}
    </section>

    <section className="availability" id="contact"><div className="availability-content"><h2>I am available for freelance work</h2><p>If you’re looking for a designer and developer that likes to get stuff<br />done, let’s talk.</p><div className="availability-contact"><a className="email" href="mailto:aiyemomisamuel6@gmail.com">aiyemomisamuel6@gmail.com</a><a href="tel:08108421139">08108421139</a></div><CTA>Get a Project in Mind? Let’s talk!</CTA></div></section>
    <footer className="footer"><p className="copyright">(c) Copyright Samuel 2022. All rights reserved.</p><div className="footer-right"><div className="legal"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; condition</a></div><Socials assets={homeAssets} /></div></footer>
  </main>;
}

function About() {
  const a = aboutAssets;
  const [toolMode, setToolMode] = useState("design");

  const designTools = [
    [a.framer, "Framer"],
    [a.figma, "Figma"],
    [a.pinterest, "Pinterest"],
    [a.photoshop, "Adobe Photoshop"],
    [a.forms, "Google Form"],
  ];

  const developmentTools = [
    ["https://cdn.simpleicons.org/visualstudiocode/007ACC", "VS Code"],
    ["https://cdn.simpleicons.org/github/181717", "GitHub"],
    ["https://cdn.simpleicons.org/vercel/000000", "Vercel"],
    ["https://cdn.simpleicons.org/supabase/3ECF8E", "Supabase"],
    ["https://cdn.simpleicons.org/react/61DAFB", "React"],
  ];

  const activeTools = toolMode === "design" ? designTools : developmentTools;

  return <main className="about-page">
    <Header about />
    <section className="about-intro"><h1>I’m Aiyemomi Samuel</h1><div className="about-copy"><p>I’m a Product Designer with a background in Applied Geophysics. My analytical and problem-solving skills have shaped how I approach design, helping me create clean, intuitive, and user-friendly digital experiences.</p><p>I design mobile apps, web apps, landing pages, and websites, focusing on turning ideas into simple and engaging products that solve real user needs.</p></div></section>
    <section className="about-photos"><img src={a.photo1} alt="Samuel" /><img src={a.photo2} alt="Samuel" /><img src={a.photo3} alt="Samuel" /></section>
    <section className="promises"><h2>Regardless of project size,<br />you will always get:</h2><div className="promise-grid"><div><h3>1. On-time delivery</h3><p>I know time is money so I don’t want to waste yours. Or mine. So I guarantee that I will always deliver what you pay for as promised.</p></div><div><h3>2. Quality</h3><p>I don’t want to put my name on something subpar so my first concern is always quality. No matter what, you will love the end result.</p></div></div></section>
    <section className="about-highlight"><div className="about-highlight-heading"><span>What I bring to a project</span><h2>Design thinking with a<br />development mindset.</h2></div><div className="about-highlight-grid"><article><span className="highlight-number">01</span><h3>Problem solving</h3><p>I approach every project by first understanding the problem, the users, and the goal. This helps me create solutions that are useful and easy to understand.</p></article><article><span className="highlight-number">02</span><h3>Design &amp; development</h3><p>I can take an idea from wireframe and interface design to a functional digital experience, making communication between design and development much easier.</p></article><article><span className="highlight-number">03</span><h3>Continuous learning</h3><p>I’m always improving my design and development skills, exploring new tools, and learning better ways to create digital products.</p></article></div></section>
    <section className="about-services"><div><h3>I can design a responsive and accessible website</h3><p>My goal is to build accessible and responsive user interfaces for the web and mobile, while preserving the best practices for proper user experience.</p></div><div><h3>UI/UX Designer</h3><p>I design clean, intuitive, and user-friendly digital experiences that help people understand, navigate, and enjoy products. From wireframes and user flows to high-fidelity designs and prototypes, I turn ideas into thoughtful interfaces that are ready for development.<br /><br />I design the experience. Developers bring it to life.</p></div><div><h3>I develop mobile app for iOS and Android</h3><p>I recently started developing mobile apps and I love it. It’s a different process compared to traditional website design but I’ve been successful in all projects so far.</p></div></section>
    <section className="about-tools">
      <div className="tools-switch" role="tablist" aria-label="Tools category">
        <button type="button" className={toolMode === "design" ? "selected" : ""} onClick={() => setToolMode("design")} aria-selected={toolMode === "design"}>Tools I Use for Design</button>
        <button type="button" className={toolMode === "development" ? "selected" : ""} onClick={() => setToolMode("development")} aria-selected={toolMode === "development"}>Tools I Use for Development</button>
      </div>
      <div className="about-tool-grid" key={toolMode}>
        {activeTools.map(([icon, name]) => (
          <div className="tool-card" key={name}>
            <img src={icon} alt={name} />
            <strong>{name}</strong>
          </div>
        ))}
      </div>
    </section>
    <section className="about-contact" id="contact"><div><h2>If you’re looking for a designer and developer<br />that likes to get stuff done, let’s talk.</h2></div><div className="about-contact-details"><a href="mailto:aiyemomisamuel6@gmail.com">aiyemomisamuel6@gmail.com</a><a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">+2348108421139</a></div></section>
    <footer className="footer about-footer"><p className="copyright">(c) Copyright Samuel 2022. All rights reserved.</p><div className="footer-right"><div className="legal"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; condition</a></div><Socials assets={a} /></div></footer>
  </main>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${form.get("name") || "my portfolio"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name") || ""}\nEmail: ${form.get("email") || ""}\nProject type: ${form.get("projectType") || ""}\n\nProject details:\n${form.get("message") || ""}`
    );
    setSubmitted(true);
    window.location.href = `mailto:aiyemomisamuel6@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <Header contact />
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <h1>LET'S DESIGN<br />SOMETHING THAT<br />WORKS.</h1>
          <p>I’m a Product Designer focused on creating mobile apps, web apps, and<br />functional websites from scratch. Have an idea, project, or product in<br />mind? Let’s talk about it.</p>
        </div>
      </section>

      <section className="contact-main">
        <aside className="contact-info">
          <h2>Have a project in<br />mind?</h2>
          <p>Let’s discuss your idea, goals,<br />and what you want to build.</p>
          <div className="contact-info-links">
            <a href="mailto:aiyemomisamuel6@gmail.com"><img src={contactAssets.emailIcon} alt="" />aiyemomisamuel6@gmail.com</a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer"><span className="contact-link-icon">◉</span> WhatsApp: 08108421139</a>
            <a href={socialLinks.behance} target="_blank" rel="noreferrer"><img src={contactAssets.behanceIcon} alt="" />Behance</a>
            <a href="mailto:aiyemomisamuel6@gmail.com"><img src={contactAssets.locationIcon} alt="" />Available remotely</a>
          </div>
          <div className="contact-social-links">
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer"><span className="contact-social-icon"><SocialIcon type="facebook" /></span> Facebook</a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer"><span className="contact-social-icon"><SocialIcon type="instagram" /></span> Instagram</a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer"><span className="contact-social-icon"><SocialIcon type="twitter" /></span> Twitter / X</a>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          </div>
          <label>Project Type<select name="projectType" defaultValue="Mobile App"><option>Mobile App</option><option>Web App</option><option>Website</option><option>Landing Page</option><option>UI/UX Design</option></select></label>
          <label>Tell me about your project<textarea name="message" placeholder="Briefly describe your goals and timelines..." required /></label>
          <button type="submit">START A PROJECT <span>→</span></button>
          {submitted && <p className="form-note">Your email app should open with the project details ready to send.</p>}
        </form>
      </section>

      <section className="contact-statement">
        <div>
          <h2>FROM IDEA TO EXPERIENCE.</h2>
          <p>I design digital products from the ground up, focusing<br />on clear user experiences, thoughtful interfaces, and<br />functional solutions that work across devices.</p>
        </div>
      </section>

      <footer className="footer contact-footer">
        <p className="copyright">(c) Copyright Samuel. All rights reserved.</p>
        <div className="footer-right"><div className="legal"><a href="/">Home</a><a href="/about">About Me</a></div><Socials assets={contactAssets} /></div>
      </footer>
    </main>
  );
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname.toLowerCase());
  useEffect(() => { const onPop = () => setPath(window.location.pathname.toLowerCase()); window.addEventListener("popstate", onPop); return () => window.removeEventListener("popstate", onPop); }, []);
  useEffect(() => { const handler = (e) => { const link = e.target.closest("a"); if (!link || link.target || link.origin !== window.location.origin || link.hash || !link.pathname.startsWith("/")) return; e.preventDefault(); window.history.pushState({}, "", link.pathname); setPath(link.pathname.toLowerCase()); window.scrollTo({ top: 0, behavior: "smooth" }); }; document.addEventListener("click", handler); return () => document.removeEventListener("click", handler); }, []);
  return path === "/about" ? <About /> : path === "/contact" ? <Contact /> : <Home />;
}
