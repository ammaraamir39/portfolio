import { Container } from "./styles"
import { BrowserRouter as Router } from "react-router-dom"
import { NavHashLink, HashLink } from "react-router-hash-link"
import { useState, useEffect } from "react"
export function Header() {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("light")
  }, [])
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0]
    html.classList.toggle("light")
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Ammar "}</span>
          <span>{" Aamir/>"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a
            href="https://drive.google.com/file/d/1P7PpYMXfIGt9DgC3ednKYt5xsg2f0IQP/view?usp=drive_link"
            download
            className="button"
            target="_blank"
          >
            Resume
          </a>
        </nav>
        <div
          aria-expanded={isActive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isActive ? "Fechar menu" : "Abrir menu"}
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
