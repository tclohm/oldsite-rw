import BlogLayout from "src/layouts/BlogLayout"
import { Container, Row, Col } from "reactstrap"

const HomePage = () => {
	return (
		<>
			<BlogLayout></BlogLayout>
			<Container>
			<Row className="mt-5">
				<Col>
					<h5>
						Welcome
					</h5>
					<h5>
						I love working with great people
					</h5>
					<h5>
						and building tools and apps
					</h5>
					<div className="memoji mt-5 ml-5"></div>
				</Col>
			</Row>
			</Container>
			<div className="illustration">
				<div className="center">
					<div className="circle index-1"></div>
					<div className="circle index-2"></div>
					<div className="circle index-3"></div>
					<div className="circle index-4"></div>
					<div className="circle index-5"></div>
					<div className="disc index-1">
						<div className="inner"></div>
					</div>
					<div className="disc index-2">
						<div className="inner"></div>
					</div>
					<div className="disc index-3">
						<div className="inner"></div>
					</div>
					<div className="disc index-4">
						<div className="inner"></div>
					</div>
					<div className="disc index-5">
						<div className="inner"></div>
					</div>
				</div>
			</div>
		</>
  	)
}

export default HomePage
