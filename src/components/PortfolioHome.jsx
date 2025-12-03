import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ArrowRight,
  Star,
  Users,
  Calendar,
  Award,
  Moon,
  Sun,
  Camera,
  AlertTriangle,
  Navigation,
  Mic,
} from "lucide-react";

const PortfolioHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

const projects = [
  {
    id: "pharmerp",
    title: "PharmERP - Pharmacy Management System",
    subtitle: "Redefining pharmacy operations with intelligent automation",
    description:
      "A comprehensive pharmacy management system designed to streamline operations for small to medium-sized pharmacies. The platform reduces manual work by 60% and improves inventory management efficiency by 45% through intelligent automation and user-centered design.",
    tags: [
      "Product Strategy",
      "User Research",
      "UX/UI Design",
      "Figma",
      "Prototyping",
    ],
    metrics: [
      { value: "60%", label: "Reduction in manual work" },
      { value: "45%", label: "Faster inventory management" },
    ],
    image: "/assets/pharm.PNG",
    color: "blue",
    featured: true,
    type: "software",
    timeline: "4 months • 2025",
  },
  {
    id: "smartglasses",
    title: "Smart Glasses for Visually Impaired",
    subtitle: "Affordable assistive technology for independent navigation",
    description:
      "An innovative assistive wearable device combining OCR, text-to-speech, obstacle detection, and GPS navigation. Designed specifically for the Kenyan market with a target manufacturing cost under $150, making advanced assistive technology accessible to underserved communities.",
    tags: [
      "Hardware Design",
      "User Research",
      "CAD Modeling",
      "Arduino",
      "Usability Testing",
    ],
    metrics: [
      { value: "40%", label: "Improved obstacle detection" },
      { value: "$150", label: "Target manufacturing cost" },
    ],
    image: "/assets/smartglassforblind.webp",
    color: "green",
    featured: true,
    type: "hardware",
    timeline: "3 months • 2025",
  },
  {
    id: "happycakes",
    title: "Happy Cakes Delivery",
    description:
      "A comprehensive cake delivery platform featuring smooth ordering process, customer-centered interface, and optimized checkout experience.",
    tags: ["UX Research", "UI Design", "Prototyping", "User Testing"],
    metrics: [],
    image: "/assets/Happycakes.PNG",
    color: "purple",
    featured: false,
    externalLink:
      "https://www.figma.com/design/AeVbAxdNSqXOg4cFSGzO5X/Happy-Cakes-Delivery?m=auto&t=wKx4ZNnKeXOCLRcl-1",
    type: "software",
  },
  {
    id: "traveler",
    title: "Traveler - Travel Platform",
    description:
      "Modern travel booking platform with intuitive search functionality, package listings, and destination highlights.",
    tags: [
      "Product Design",
      "UX Strategy",
      "Responsive Design",
      "Accessibility",
    ],
    metrics: [],
    image: "/assets/Travelor.PNG",
    color: "pink",
    featured: false,
    externalLink:
      "https://www.figma.com/design/THjSLvNMoA3VUMs0D3TI7y/Traveller?m=auto&t=wKx4ZNnKeXOCLRcl-1",
    type: "software",
  },
];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-header">
            <div className="logo">
              <span className="logo-text">JE</span>
            </div>

            <div className="nav-desktop">
              <div className="nav-links">
                {["Home", "About", "Services", "Projects", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`nav-link ${
                        activeSection === item.toLowerCase() ? "active" : ""
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={toggleDarkMode}
                className="theme-toggle"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="nav-mobile">
              <button
                onClick={toggleDarkMode}
                className="theme-toggle mobile"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="mobile-menu-link"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-circle-1"></div>
          <div className="hero-circle-2"></div>
        </div>

        <div className="hero-content">
          <div className="hero-grid">
            <div className={`hero-text ${isLoaded ? "loaded" : ""}`}>
              <h1 className="hero-title">
                Hi, I'm <span className="hero-name">James Ekasiba</span>
              </h1>
              <p className="hero-role">
                Product Designer & Mechanical Engineer
              </p>
              <p className="hero-description">
                Bridging mechanical engineering with product design to create
                innovative solutions. I specialize in end-to-end product
                development, from user research and prototyping to
                implementation, with a focus on accessibility and user-centered
                design.
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="btn-primary"
                >
                  View My Work <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-secondary"
                >
                  <Mail size={20} /> Let's Talk
                </button>
              </div>
            </div>

            <div className={`hero-image ${isLoaded ? "loaded" : ""}`}>
              <div className="profile-container">
                <div className="profile-ring"></div>
                <div className="profile-inner">
                  <img
                    src="/assets/james.png"
                    alt="James Ekasiba"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon blue">
                <Star size={32} />
              </div>
              <div className="stat-number">8+</div>
              <div className="stat-label">Projects Designed</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon purple">
                <Users size={32} />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Users Interviewed</div>
            </div>
            {/* <div className="stat-item">
              <div className="stat-icon pink">
                <Calendar size={32} />
              </div>
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div> */}
            <div className="stat-item">
              <div className="stat-icon orange">
                <Award size={32} />
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Product Designer & Mechanical Engineer passionate about creating
              accessible technology solutions
            </p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <h3 className="about-title">Hello! I'm James Ekasiba</h3>
              <p className="about-text">
                A Product Designer and Mechanical Engineering student at
                Multimedia University of Kenya, with a passion for creating
                technology solutions that empower underserved communities. I
                specialize in designing accessible products that bridge the gap
                between user needs and technical feasibility.
              </p>
              <p className="about-text">
                My unique background in both mechanical engineering and product
                design allows me to approach problems from multiple
                perspectives, ensuring solutions are not only beautiful and
                usable but also technically sound and manufacturable.
              </p>

              <div className="skills-section">
                <h4 className="skills-title">Core Competencies</h4>
                <div className="skills-list">
                  {[
                    { skill: "Product Design & Strategy", level: "95%" },
                    { skill: "User Research & Testing", level: "90%" },
                    { skill: "Hardware Prototyping", level: "85%" },
                    { skill: "CAD Modeling & 3D Printing", level: "80%" },
                    { skill: "UI/UX Design & Prototyping", level: "88%" },
                  ].map((item, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{item.skill}</span>
                        <span className="skill-percentage">{item.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-download">
                <Download size={20} /> Download Resume
              </button>
            </div>

            <div className="experience-card">
              <div className="card-content">
                <h4 className="card-title">Education & Experience</h4>
                <div className="timeline">
                  <div className="timeline-item blue">
                    <h5 className="timeline-title">
                      BSc. Mechanical Engineering
                    </h5>
                    <p className="timeline-date">2020-2024 (Expected)</p>
                    <p className="timeline-company">
                      Multimedia University of Kenya
                    </p>
                    <p className="timeline-description">
                      Focus on assistive technology, product design, and
                      manufacturing processes
                    </p>
                  </div>
                  <div className="timeline-item purple">
                    <h5 className="timeline-title">
                      Software Engineering Nanodegree
                    </h5>
                    <p className="timeline-date">2023-2024</p>
                    <p className="timeline-company">Moringa School</p>
                    <p className="timeline-description">
                      300+ hours intensive training in UI/UX design, agile
                      methodologies, and full-stack development
                    </p>
                  </div>
                  <div className="timeline-item pink">
                    <h5 className="timeline-title">Lead Product Designer</h5>
                    <p className="timeline-date">2023-Present</p>
                    <p className="timeline-company">
                      Freelance & Personal Projects
                    </p>
                    <p className="timeline-description">
                      End-to-end product design for diverse clients, focusing on
                      user-centered solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Design Process</h2>
            <p className="section-subtitle">
              Following a structured design thinking approach for impactful
              solutions
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: "🔍",
                title: "Discover",
                description:
                  "Comprehensive research to understand user needs, market gaps, and business opportunities through interviews, observation, and competitive analysis.",
                gradient: "blue-cyan",
              },
              {
                icon: "📊",
                title: "Define",
                description:
                  "Synthesizing research findings to create clear problem statements, user personas, and design requirements that align with business goals.",
                gradient: "purple-pink",
              },
              {
                icon: "💡",
                title: "Ideate",
                description:
                  "Generating creative solutions through brainstorming sessions, sketching, and concept development to explore multiple design directions.",
                gradient: "orange-red",
              },
              {
                icon: "🎨",
                title: "Prototype",
                description:
                  "Creating tangible representations of solutions through wireframes, mockups, and interactive prototypes for validation.",
                gradient: "green-teal",
              },
              {
                icon: "🧪",
                title: "Test",
                description:
                  "Conducting usability testing with real users to gather feedback, identify pain points, and iterate on designs.",
                gradient: "indigo-purple",
              },
              {
                icon: "🚀",
                title: "Implement",
                description:
                  "Collaborating with developers and engineers to ensure designs are implemented correctly and meet quality standards.",
                gradient: "pink-rose",
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className={`service-icon ${service.gradient}`}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              I've worked on projects across diverse industries, focusing on
              creating meaningful impact
            </p>
          </div>

          <div className="projects-intro">
            <p>
              I am excited to work on more projects that{" "}
              <strong>spark joy</strong> and make my{" "}
              <strong>users feel heard</strong>. Each project represents a
              journey of discovery, iteration, and ultimately, delivering
              solutions that matter.
            </p>
            <p>
              From healthcare to assistive technology, I approach every
              challenge with empathy and a commitment to creating accessible,
              user-centered experiences.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""}`}
              >
                {project.featured && (
                  <div className="project-badge">Featured Project</div>
                )}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumbnail"
                  />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="project-timeline">
                        {project.timeline}
                      </span>
                      <span className={`project-type-badge ${project.type}`}>
                        {project.type === "hardware"
                          ? "Hardware Product"
                          : "Software Product"}
                      </span>
                    </div>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-description">{project.subtitle}</p>
                  )}

                  <div className="project-tags">
                    {project.tags.map((tech) => (
                      <span key={tech} className={`tag ${project.color}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-metrics">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="metric">
                          <span className="metric-value">{metric.value}</span>
                          <span className="metric-label">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {project.externalLink ? (
                    <button
                      className={`project-link ${project.color}`}
                      onClick={() =>
                        window.open(project.externalLink, "_blank")
                      }
                    >
                      View Project <ExternalLink size={16} />
                    </button>
                  ) : (
                    <button
                      className={`project-link ${project.color}`}
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      View Case Study <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Build Something Amazing</h2>
            <p className="section-subtitle">
              Ready to bring your product vision to life? Let's connect.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-title">Get In Touch</h3>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon blue">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">jamesekasiba123@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon green">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Phone</h4>
                    <p className="contact-value">+254 112 233 367</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon purple">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Location</h4>
                    <p className="contact-value">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow My Work</h4>
                <div className="social-links">
                  <button
                    className="social-btn"
                    onClick={() => window.open("https://github.com", "_blank")}
                  >
                    <Github size={24} />
                  </button>
                  <button
                    className="social-btn"
                    onClick={() =>
                      window.open("https://linkedin.com", "_blank")
                    }
                  >
                    <Linkedin size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Project Type</label>
                  <select className="form-input">
                    <option>Product Design</option>
                    <option>UX Research</option>
                    <option>Hardware Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    className="form-textarea"
                    placeholder="Tell me about your product vision..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Start Conversation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;
