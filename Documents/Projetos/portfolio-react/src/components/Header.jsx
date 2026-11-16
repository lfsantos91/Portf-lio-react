import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));


    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
  };
}, []);

  useEffect(() => {
    const handlekeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handlekeyDown);

    return () => {
      window.removeEventListener("keydown", handlekeyDown);
    };
  }, []);

  return (
    <>
    <header className="header">
      <div className="header-container">

        <a href="#inicio" className="logo">
          Luis Felipe Santos da Silva<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >

          {menuOpen ? "Fechar" : "Menu"}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav active" : "nav"}>

          <a
           href="#inicio"
           className={activeSection === "inicio" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Início
          </a>
          
          <a
           href="#sobre"
           className={activeSection === "sobre" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Sobre
          </a>

          <a
           href="#experiencia"
           className={activeSection === "experiencia" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Experiência
          </a>

           <a
           href="#habilidades"
           className={activeSection === "habilidades" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Habilidades
          </a>

           <a
           href="#projetos"
           className={activeSection === "projetos" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Projetos
          </a>

          <a
           href="#contato"
           className={activeSection === "contato" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
           >
            Contatos
           </a>

          <a
            href="https://github.com/lfsantos91"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#38bdf8"
              style={{ display: "block" }}
            >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.1 3.42 1.6.1-.72.39-1.22.7-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/luis-felipe1991/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#38bdf8"
              style={{ display: "block" }}
            >
              <path d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.86 0 1.55-.67 1.55-1.5v-17c0-.83-.69-1.5-1.55-1.5ZM8 19H5V9h3v10ZM6.5 7.73a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.57 2.84-1.57 3.03 0 3.73 2 3.73 4.6V19Z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>

    {showTopButton && (
      <button
        className="back-to-top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        ↑
      </button>
    )}
    </>
  );
}

export default Header;