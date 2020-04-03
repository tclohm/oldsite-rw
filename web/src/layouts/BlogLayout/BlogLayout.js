import { Link, routes } from "@redwoodjs/router"
import { Container, Row, Col, Button } from "reactstrap"

const BlogLayout = ({ children }) => {
  return  (
  <Container>
        <Row className="mt-5">
          <Col>
            <h1><i className="far fa-hand-paper swing"></i></h1>
            <h1>Hey there, my name is <span>Taylor</span></h1>
            <p>Web and iOS Developer</p>
          </Col>
          <Col sm={{ offset: 1 }}>
            <a className="link mt-1" href="https://github.com/tclohm"><i className="fab fa-github-square fa-2x"></i></a>
            <a className="link ml-3" href="https://angel.co/tlohm"><i className="fab fa-angellist fa-2x"></i></a>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 1 }}>
            <Link to={routes.projects()}><Button outline color="primary">Projects</Button></Link>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Link to={routes.writings()}><Button outline color="primary">Writing</Button></Link>
          </Col>
        </Row>
        <main>{children}</main>
    </Container>
    )
}

export default BlogLayout
