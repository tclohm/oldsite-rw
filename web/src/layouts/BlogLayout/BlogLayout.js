import { Link, routes } from "@redwoodjs/router"
import { Container, Row, Col, Button } from "reactstrap"

const BlogLayout = ({ children }) => {
  return  (
  <Container>
        <Row className="mt-5">
          <Col>
            <h1><Link to="/" className="hidden-link"><i className="far fa-hand-paper swing"></i></Link></h1>
            <h1>Hey there, my name is <span>Taylor</span></h1>
            <p>Web and iOS Developer</p>
          </Col>
          <Col sm={{ offset: 1 }}>
            <a className="link" href="https://github.com/tclohm"><i className="fab fa-github-square fa-2x"></i></a>
            <a className="link ml-3" href="https://angel.co/tlohm"><i className="fab fa-angellist fa-2x"></i></a>
            <Link to={routes.contact()}></Link>
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
