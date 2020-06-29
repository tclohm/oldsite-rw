import { useState } from "react"
import { Link, routes } from "@redwoodjs/router"
import { Container, Row, Col, Button, Collapse } from "reactstrap"
import { useSessionStorage } from "../../hooks/useSessionStorage"

const BlogLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useSessionStorage("linksOpen", false);
  const [onContact, setOnContact] = useSessionStorage("onContact", false);
  const [onProject, setOnProject] = useSessionStorage("onProject", false);
  const [onWriting, setOnWriting] = useSessionStorage("onWriting", false);
  const [onHome, setOnHome] = useSessionStorage("onHome", true);

  function toggle(event) {
    console.log(event.currentTarget.name)
    switch (event.currentTarget.name) {
      case "links":
        const contactBtn = document.querySelector('.contact-links')
        setIsOpen(!isOpen)
        break
      case "projects":
        if (onWriting) { setOnWriting(!onWriting) }
        if (onContact) { setOnContact(!onContact) }
        if (!onProject) { setOnProject(!onProject) }
        break
      case "writings":
        if (onProject) { setOnProject(!onProject) }
        if (onContact) { setOnContact(!onContact) }
        if (!onWriting) { setOnWriting(!onWriting) }
        break
      case "email":
        if (onWriting) { setOnWriting(!onWriting) } 
        if (onProject) { setOnProject(!onProject) }
        if (!onContact) { setOnContact(!onContact) }
        break
      default:
        if (onWriting) { setOnWriting(!onWriting) } 
        if (onProject) { setOnProject(!onProject) }
        if (onContact) { setOnContact(!onContact) }
        break
    }
  }

  

  return  (
  <Container>
        <Row className="mt-5">
          <Col>
            <h1><Link to="/" className="hidden-link"><i className="far fa-hand-paper swing home" onClick={toggle}></i></Link></h1>
            <h1>Hey there, my name is <span>Taylor</span></h1>
            <p>Web and iOS Developer</p>
          </Col>
          <Col xs={{ offset: 1 }}>
            <Link to={routes.contact()}>
              {onContact ?
                <Button 
                  color="primary" 
                  className="inline mr-3 email"
                  onClick={toggle}
                  name="email">
                  <i className="fas fa-envelope"></i> Me
                </Button>
                :
                <Button 
                  outline color="primary" 
                  className="inline mr-3 email"
                  onClick={toggle}
                  name="email">
                  <i className="fas fa-envelope"></i> Me
                </Button>
              }
            </Link>
            {isOpen ?
              <Button 
              color="info"
              active 
              onClick={toggle} 
              name="links" 
              className="mr-1 contact-links">
              <i className="fas fa-link"></i>
              </Button>
              :
              <Button 
              color="info" 
              onClick={toggle} 
              name="links" 
              className="mr-1 contact-links">
              <i className="fas fa-link"></i>
            </Button>
            }
            <Col xs={{ offset: 7 }}>
            <Collapse isOpen={isOpen}>
              <Row>
                <a className="link ml-4 pl-2 mt-2" href="https://github.com/tclohm"><i className="fab fa-github-square fa-2x"></i></a>
              </Row>
              <Row>
                <a className="link ml-4 pl-2" href="https://angel.co/tlohm"><i className="fab fa-angellist fa-2x"></i></a>
              </Row>
              <Row>
                <a className="link ml-4 pl-2 mb-0" href="https://www.linkedin.com/in/taylorclohman/"><i className="fab fa-linkedin fa-2x"></i></a>
              </Row>
            </Collapse>
            </Col>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={{ size: 6 }}>
            <Link to={routes.projects()}>
              {onProject ?
                <Button 
                color="primary" 
                className="inline projects"
                name="projects" 
                onClick={toggle}>
                <i className="fas fa-project-diagram"></i> Projects
                </Button>
                :
                <Button 
                  outline color="primary" 
                  className="inline projects"
                  name="projects" 
                  onClick={toggle}>
                  <i className="fas fa-project-diagram"></i> Projects
                </Button>
              }
            </Link>
            <Link to={routes.writings()}>
            	{onWriting ?
                <Button 
                color="primary" 
                className="inline ml-3 writings"
                name="writings"
                onClick={toggle}>
                <i className="fas fa-feather-alt"></i> Writing
                </Button>
                :
                <Button 
                  outline color="primary" 
                  className="inline ml-3 writings"
                  name="writings"
                  onClick={toggle}>
                  <i className="fas fa-feather-alt"></i> Writing
                </Button>
              }
            </Link>
          </Col>
        </Row>
        <main>{children}</main>
    </Container>
    )
}

export default BlogLayout
