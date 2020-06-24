import { useState } from "react"
import { Link, routes } from "@redwoodjs/router"
import { Container, Row, Col, Button, Collapse } from "reactstrap"

const BlogLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return  (
  <Container>
        <Row className="mt-5">
          <Col>
            <h1><Link to="/" className="hidden-link"><i className="far fa-hand-paper swing"></i></Link></h1>
            <h1>Hey there, my name is <span>Taylor</span></h1>
            <p>Web and iOS Developer</p>
          </Col>
          <Col sm={{ offset: 1 }}>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
              Links
            </Button>
            <Collapse isOpen={isOpen}>
              <Row>
                <a className="link ml-5" href="https://github.com/tclohm"><i className="fab fa-github-square fa-2x"></i></a>
              </Row>
              <Row>
                <a className="link ml-5" href="https://angel.co/tlohm"><i className="fab fa-angellist fa-2x"></i></a>
              </Row>
              <Row>
                <a className="link ml-5" href="https://www.linkedin.com/in/taylorclohman/"><i className="fab fa-linkedin fa-2x"></i></a>
              </Row>
              <Row>
                <Link className="link ml-4 pl-3" to={routes.contact()}><i className="fas fa-address-card fa-2x"></i></Link>
              </Row>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={routes.projects()}>
            	<Button outline color="primary" className="inline">
            		<i className="fas fa-project-diagram"></i> Projects
            	</Button>
            </Link>
            <Link to={routes.writings()}>
            	<Button outline color="primary" className="inline ml-3">
            		<i className="fas fa-feather-alt"></i> Writing
            	</Button>
            </Link>
          </Col>
        </Row>
        <main>{children}</main>
    </Container>
    )
}

export default BlogLayout
