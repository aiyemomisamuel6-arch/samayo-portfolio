import { useEffect, useState } from "react";
import "./App.css";
import samayoLogo from "./assets/images/SamayoLogo.png";
import figmaIcon from "./assets/images/figma.svg";
import GithubIcon from "./assets/images/github.svg";
import vscodeIcon from "./assets/images/vscode.svg";
import AdobeIcon from "./assets/images/Adobe.svg";
import work1Image from "./assets/images/work1.png";
import work2bgImage from "./assets/images/work2bg.png";
import work2aImage from "./assets/images/work2a.png";
import work2bImage from "./assets/images/work2b.png";
import work2cImage from "./assets/images/work2c.png";
import work2dImage from "./assets/images/work2d.png";
import work3Image from "./assets/images/work3.png";
import phone1Image from "./assets/images/phone1.png";
import phone2Image from "./assets/images/phone2.png";
import phone3Image from "./assets/images/phone3.png";
import phone4Image from "./assets/images/phone4.png";
import phone5Image from "./assets/images/phone5.png";
// import project3Video from "./assets/videos/splashfurniture.mp4";import photo1about from "./assets/images/photo1about.png";
import photo2about from "./assets/images/photo2about.png";
import photo3about from "./assets/images/photo3about.png";
import AdobePhotoshopIcon from "./assets/images/AdobePhotoshop.svg";
import figmaIconAbout from "./assets/images/figma.svg";
import framerIcon from "./assets/images/framer.svg";
import pinterestIcon from "./assets/images/pinterest.svg";
import GithubIconAbout from "./assets/images/github.svg";
import vscodeIconAbout from "./assets/images/vscode.svg";
import formsIcon from "./assets/images/forms.svg";


const homeAssets = {
  logo: samayoLogo,
  twitter: "/images/twitter.png",
  social1: "/images/social1.png",
  social2: "/images/social2.png",
  arrow: "/images/arrow.png",
  tool1: figmaIcon,
  tool2: GithubIcon,
  tool3: vscodeIcon,
  tool4: AdobeIcon,

  desktop: work1Image,
  work2bg: work2bgImage,
  work2a: work2aImage,
  work2b: work2bImage,
  work2c: work2cImage,
  work2d: work2dImage,

  work3: work3Image,


  phone1: phone1Image,
  phone2: phone2Image,
  phone3: phone3Image,
  phone4: phone4Image,
  phone5: phone5Image,
};

const aboutAssets = {
  logo: samayoLogo,
  twitter: "https://www.figma.com/api/mcp/asset/289c324c-2a65-4822-bd9d-e6538179ffeb.png",
  social1: "https://www.figma.com/api/mcp/asset/16bb27b8-1e8d-455f-84a0-899f9c76acaf.png",
  social2: "https://www.figma.com/api/mcp/asset/ff3a22ef-363e-429a-81a5-422f5ca0f189.png",
  photo1: photo1about,
  photo2: photo2about,
  photo3: photo3about,
  framer: framerIcon,
  figma: figmaIconAbout,
  pinterest: pinterestIcon,
  photoshop: AdobePhotoshopIcon,
  github: GithubIconAbout,
  vscode: vscodeIconAbout,
  forms: formsIcon,
  avatar1: "https://www.figma.com/api/mcp/asset/99eedde7-d23a-4006-a2f6-8ff2372f2479.png",
  avatar2: "https://www.figma.com/api/mcp/asset/aabaedd4-9942-4fae-9340-f147a3d9ee29.png",
  group3: "https://www.figma.com/api/mcp/asset/79d553a0-cecf-42af-bf09-ad753efaabcb.svg",
  group4: "https://www.figma.com/api/mcp/asset/52471b44-1222-4320-96ec-be6a60938062.svg",
};

const contactAssets = {
  logo: samayoLogo,
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
    figma: "https://www.figma.com/design/mIGEedTvWO3E2JP0yAOlrD/Untitled?node-id=43-2&t=ttgv3VJ68z5azw7g-1",
    behance: "https://www.behance.net/Samayo10432",
  },
  project2: {
    title: "Web App Project",
    figma: "https://www.figma.com/design/b5epNodiZ4F6ZqciO3LQZt/GROUP-C?node-id=24-2&t=ttgv3VJ68z5azw7g-1",
    behance: "https://www.behance.net/Samayo10432",
  },
  project3: {
    title: "Dashboard Project",
    figma: "https://www.figma.com/design/E13Z4mjF0iFExQ7SGT8cVf/samuel-web-design",
    behance: "https://www.behance.net/Samayo10432",
  },
  project4: {
    title: "Mobile App Project",
    figma: "https://www.figma.com/design/JQu4egVVpP6oSmqGgFJ2JZ/Bank-with-Antonia?node-id=0-1&t=ttgv3VJ68z5azw7g-1",
    behance: "https://www.behance.net/Samayo10432",
  },
};

function SocialIcon({ type }) {
  if (type === "twitter") return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.49 22H3.38l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.26 4.02H6.4L17.8 19.9Z" fill="currentColor" /></svg>;
  if (type === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon-svg"><path d="M13.4 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22 22 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.3v3h2.7v8h3.4Z" fill="currentColor" /></svg>;
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

    <div className="tool-row">
      <img src={homeAssets.tool1} alt="Figma" />
      <img src={homeAssets.tool2} alt="GitHub" />
      <img src={homeAssets.tool3} alt="VS Code" />
      <img src={homeAssets.tool4} alt="Adobe" />
      <span className="tool-mark">↓</span>
    </div>
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
      <div className="project-video-wrapper">
        <div className="project-video-placeholder">
          <p> Splash Furniture — Website Walkthrough </p>
          <p>Video coming soon</p>
        </div>

        <p className="project-video-caption">
          Splash Furniture — Website Walkthrough
        </p>

        <a className="cta project-book-cta" href="/contact">
          <span>Book a Project Like This</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
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
    [a.forms, "Google Forms"],
  ];

  const developmentTools = [
    [a.vscode, "VS Code"],
    [a.github, "GitHub"],
    ["https://cdn.simpleicons.org/vercel/000000", "Vercel"],
    ["https://cdn.simpleicons.org/supabase/3ECF8E", "Supabase"],
    ["https://cdn.simpleicons.org/react/61DAFB", "React"],
  ];

  const activeTools =
    toolMode === "design" ? designTools : developmentTools;


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

        <div className="contact-info-links">
          <a href="mailto:aiyemomisamuel6@gmail.com">
            <span className="contact-link-icon" aria-hidden="true">✉</span>
            aiyemomisamuel6@gmail.com
          </a>

          <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
            <span className="contact-link-icon" aria-hidden="true">◉</span>
            WhatsApp: 08108421139
          </a>

          <a href={socialLinks.behance} target="_blank" rel="noreferrer">
            <span className="contact-link-icon" aria-hidden="true">Bē</span>
            Behance
          </a>

          <a href="#contact">
            <span className="contact-link-icon" aria-hidden="true">⌖</span>
            Available remotely
          </a>
        </div>


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
