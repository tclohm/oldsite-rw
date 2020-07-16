import { Link, routes } from "@redwoodjs/router"
import { useSessionStorage } from "../../hooks/useSessionStorage"
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from "reactstrap"
import BlogLayout from "src/layouts/BlogLayout"

import readrr from "../../../public/readrr.png"
import boundtime from "../../../public/boundtime.png"
import essentialism from "../../../public/essentialism.png"

const ProjectPage = () => {

	const [onHome, setOnHome] = useSessionStorage("onHome", false); 
	const [onProject, setonProject] = useSessionStorage("onProject", true);

	function home(event) {
		setOnHome(!onHome)
		setonProject(!onProject)
	}

	return (
		<BlogLayout>
			<div className="mt-3">
				<Breadcrumb>
						<BreadcrumbItem><Link to={routes.home()}><i className="fas fa-home" onClick={home}></i></Link></BreadcrumbItem>
						<BreadcrumbItem active><i className="fas fa-project-diagram"></i></BreadcrumbItem>
				</Breadcrumb>
			</div>
			<Container className="fade-up-and-in-animation">
				<a href="https://readrr.app">
				<Row className="mt-5 fade-up-and-in-animation">
					<Col xs={{ size: 4 }}>
                    <img className="img-fluid rounded mt-sm-3 mt-md-2 mt-lg-0 mt-5 img-max-height" src={readrr}/>
                </Col>
                <Col xs={{ size: 7 }}>
                    <Row>
                        <Col className="mt-md-5 pt-md-3 mt-5" xs={{ size: 12 }}>
                            <h4 className="blog-title">Readrr</h4>
                            <p className="blog-para">Goodreads but without the clutter</p>
                            <i className="date-font mr-3 fab fa-js-square fa-2x"></i>
                            <i className="date-font mr-3 fab fa-css3 fa-2x"></i>
                            <i className="date-font mr-3 fab fa-aws fa-2x"></i>
                            <i className="date-font fas fa-database fa-2x"></i>
                        </Col>
                    </Row>
                </Col>
				</Row>
				</a>
				<a href="https://apps.apple.com/us/app/boundtime/id1462086577?ls=1">
				<Row className="mt-5 fade-up-and-in-animation">
					<Col xs={{ size: 4 }}>
                    <img className="img-fluid rounded mt-sm-3 mt-md-2 mt-lg-0 mt-5 img-max-height" src={boundtime}/>
                </Col>
                <Col xs={{ size: 7 }}>
                    <Row>
                        <Col className="mt-md-5 pt-md-3 mt-5" xs={{ size: 12 }}>
                            <h4 className="blog-title">boundtime</h4>
                            <p className="blog-para">An iPhone app that tells us how much time we have until we are 78.6 years old</p>
                            <i className="date-font mr-3 fab fa-swift fa-2x"></i>
                            <i className="date-font fas fa-mobile fa-2x"></i>
                        </Col>
                    </Row>
                </Col>
				</Row>
				</a>
				<a href="https://essentialism-kse2qjaax.now.sh">
				<Row className="mt-5 fade-up-and-in-animation">
					<Col xs={{ size: 4 }}>
                    <img className="img-fluid rounded mt-sm-3 mt-md-2 mt-lg-0 mt-5 img-max-height" src={essentialism}/>
                </Col>
                <Col xs={{ size: 7 }}>
                    <Row>
                        <Col className="mt-md-5 pt-md-3 mt-5" xs={{ size: 12 }}>
                            <h4 className="blog-title">Essentialism</h4>
                            <p className="blog-para">App inspired by the New York Times best selling book "Essentialism" by Greg McKeown</p>
                            <i className="date-font mr-3 fab fa-js-square fa-2x"></i>
                            <i className="date-font fab fa-css3 fa-2x"></i>
                        </Col>
                    </Row>
                </Col>
				</Row>
				</a>
			</Container>
		</BlogLayout>
	)
}

export default ProjectPage
