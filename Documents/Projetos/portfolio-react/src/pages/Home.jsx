import { useEffect } from "react";

// Estilo das habilidades
const skillStyle = {
  background: "#14243a",
  color: "#38bdf8",
  border: "1px solid #244563",
  padding: "10px 16px",
  borderRadius: "8px",
  fontSize: "14px"
};

const contactStyle = {
  color: "#38bdf8",
  textDecoration: "none", 
  background: "#14243a",
  border: "1px solid #244563",
  padding: "15px",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  position: "relative"
};

function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".experience-card, .skill-card, #projetos .project-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 100px 0px"
      }
    );

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 3) * 120}ms`;

      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main
      style={{
        background: "#08111f",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "20px",
        width: "100%",
        overflowX: "hidden"
      }}
    >
      {/* INÍCIO */}
      <section id="inicio">
        <div className="hero-container">

          <div className="hero-text">
            <h1>Olá, eu sou Luis Felipe!</h1>
            
            <h2>
              Técnico de Suporte N2 | Desenvolvedor Full Stack em formação
            </h2>

            <p>
              Profissional de Tecnologia da Informação,
              apaixonado por desenvolvimento e infraestrutura.
            </p>
          </div>

            <img
          src="/images/foto-perfil.jpg"
          alt="Foto de perfil de Luis Felipe"
          className="profile-photo"
          />

        </div>
      </section>

      {/* SOBRE MIM */}
      <section
        id="sobre"
        style={{
          marginTop: "70px",
          maxWidth: "850px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.8"
        }}
      >
        <h2 style={{ color: "#38bdf8" }}>
          Sobre mim
        </h2>

        <p>
          Sou profissional de Tecnologia da Informação,
          formado na área desde agosto de 2021, com experiência
          em suporte técnico, infraestrutura e atendimento
          especializado a usuários.
        </p>

        <p>
          Atualmente atuo como Técnico de Suporte N2 na
          SEEDUC-RJ, trabalhando na resolução de incidentes,
          suporte a usuários e manutenção dos serviços de TI.
        </p>

        <p>
          Também venho ampliando meus conhecimentos em
          desenvolvimento de software, estudando Java,
          Spring Boot, JavaScript, React e bancos de dados
          relacionais.
        </p>

        <p>
          Meu objetivo é unir minha experiência em suporte
          e infraestrutura com o desenvolvimento de soluções
          tecnológicas eficientes.
        </p>
      </section>
    
{/* EXPERIÊNCIA PROFISSIONAL */}
<section id="experiencia" className="experience-section">

  <h2>Experiência Profissional</h2>

  <div className="experience-list">

    <article className="experience-card">
      <div className="experience-indicator"></div>
      <h3>Técnico de Suporte N2</h3>
      <h4>SEEDUC-RJ</h4>
      <p>
        Atuação no suporte técnico de segundo nível,
        análise e resolução de incidentes, suporte
        especializado aos usuários e administração
        de recursos de TI.
      </p>
    </article>

    <article className="experience-card">
      <div className="experience-indicator"></div>
      <h3>Técnico de Suporte de TI II</h3>
      <h4>SEFAZ-RJ</h4>
      <p>
        Suporte técnico a usuários, manutenção de 
        equipamentos, diagnóstico de problemas e 
        atendimento de demandas de infraestrutura.
      </p>
    </article>

    <article className="experience-card">
      <div className="experience-indicator"></div>
      <h3>Suporte Técnico ao Usuário</h3>
      <h4>ALOC</h4>
      <p>
        Atendimento técnico, suporte aos usuários
        e resolução de problemas relacionados
        a equipamentos e sistemas.
      </p>
    </article>

    <article className="experience-card">
      <div className="experience-indicator"></div>
      <h3>Oficial de Rede</h3>
      <h4>SEREDE S.A.</h4>
      <p>
        Experiência em atividades relacionadas
        a redes e infraestrutura de telecomunicações.
      </p>
    </article>

  </div>
</section>

{/* HABILIDADES TÉCNICAS */}
<section id="habilidades" className="skills-section">

  <h2>Habilidades técnicas</h2>

  <div className="skills-grid">

    <article className="skill-card">
      <h3>Desenvolvimento</h3>
      <div className="skills-tags">
        {[
          "Java",
          "Spring Boot",
          "JavaScript",
          "React",
          "HTML5",
          "CSS3",
          "SQL",
          "PostgreSQL"
        ].map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>

    <article className="skill-card">
      <h3>Suporte e Infraestrutura</h3>
      <div className="skills-tags">
        {[
          "Windows 10/11",
          "Active Directory",
          "Microsoft Entra ID",
          "Microsoft Exchange",
          "Microsoft 365",
          "Suporte N2",
          "Administração de acessos",
          "Redes de computadores"
        ].map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>

    <article className="skill-card">
      <h3>Cloud e ferramentas</h3>
      <div className="skills-tags">
        {[
          "AWS",
          "Microsoft Azure",
          "Git",
          "GitHub",
          "VS Code",
          "Power BI"
        ].map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>

  </div>
</section>

{/* PORTFÓLIO */}
<section
  id="projetos"
  style={{
    marginTop: "70px",
    maxWidth: "1000px"
  }}
>
  <h2 style={{ color: "#38bdf8" }}>
    Meus projetos
  </h2>

  <p style={{
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginBottom: "30px"
  }}>
    Conheça alguns dos meus projetos pessoais e 
    aplicações desenvolvidas durante minha jornada
    de aprendizado em tecnologia.
  </p>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px"
  }}>

    {/* PROJETO STEAM */}
    <article className="project-card" style={{
      background: "#14243a",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #244563",
      transition: "transform 0.3s, border 0.3s, opacity 0.7s ease, filter 0.7s ease"
    }}>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginTop: "15px"
      }}>
        <span style={{ fontSize: "30px" }}>🎮</span>
        <h3 style={{ color: "#38bdf8", margin: 0 }}>
        Bot de Progresso da Steam
        </h3>
      </div>

      <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
        Aplicação desenvolvida para acompanhar o 
        progresso dos jogos, identificar conquistas
        pendentes e monitorar jogos próximos de 
        100% de conclusão.
      </p>

      <p style={{ color: "#38bdf8", lineHeight: "1.8" }}>
        Java | Spring Boot | React | PostgreSQL
      </p>

      <div style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <span className="project-button-disabled">
          Projeto em desenvolvimento
        </span>
      </div>

      <p style={{
        color: "#94a3b8",
        fontSize: "13px",
        marginTop: "15px"
      }}>
        Código-fonte privado durante o desenvolvimento.
      </p>

      <div style={{ marginTop: "20px" }}>
        <span className="project-button-disabled">
          Disponível em breve
        </span>
      </div>
    </article>

    <article className="project-card" style={{
      background: "#14243a",
      padding: "25px",
      borderRadius: "12px",
      border: "1px solid #244563",
      transition: "transform 0.3s, border 0.3s, opacity 0.7s ease, filter 0.7s ease"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "15px"
      }}>
      <span style={{ fontSize: "30px" }}>🖥️</span>
      <h3 style={{ color: "#38bdf8", margin: 0 }}>
        Portfólio Profissional
      </h3>
      </div>

      <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
        Website responsivo desenvolvido para apresentar
        minha trajetória profissional, habilidades
        técnicas e projetos na área de tecnologia.
      </p>

      <p style={{ color: "#38bdf8", lineHeight: "1.8" }}>
        React | JavaScript | HTML5 | CSS3
      </p>

    <div style={{
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px"
    }}>
      <a
        href="https://portf-lio-react-three.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="project-button"
      >
        Ver Projeto
      </a>

      <a
        href="https://github.com/lfsantos91/portf-lio-react"
        target="_blank"
        rel="noreferrer"
        className="project-button"
      >
        Ver Código
      </a>
    </div>

    </article>

  </div>
</section>

{/* CONTATO */}
  <section
    id="contato"
    style={{
      marginTop: "70px",
      marginBottom: "50px",
      maxWidth: "850px"
    }}
  >
    <h2 style={{ color: "#38bdf8" }}>
      Vamos conversar?
    </h2>

    <p style={{ lineHeight: "1.8" }}>
      Estou aberto a oportunidades profissionais,
      novos desafios e projetos na área de Tecnologia
      da Informação e Desenvolvimento de Software.
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "30px"
      }}
    >
      <a
        href="mailto:lfsantos9195@gmail.com"
        className="contact-button"
        style={contactStyle}
      >
        <strong>Email:</strong> lfsantos9195@gmail.com
      </a>

      <a
        href="https://github.com/lfsantos91"
        className="contact-button"
        target="_blank"
        rel="noreferrer"
        style={contactStyle}
      >
        <strong>GitHub:</strong> github.com/lfsantos91
      </a>

      <a
        href="https://www.linkedin.com/in/luis-felipe1991/"
        className="contact-button"
        target="_blank"
        rel="noreferrer"
        style={contactStyle}
      >
        <strong>LinkedIn:</strong> Meu Perfil Profissional
      </a>
    </div>  
  </section>

  <footer className="site-footer">
    <p>
      @ {new Date().getFullYear()} Luis Felipe.
      Todos os direitos reservados.
    </p>

    <p>
      Desenvolvido com React ❤️
    </p>
  </footer>
</main>
);
}

export default Home;