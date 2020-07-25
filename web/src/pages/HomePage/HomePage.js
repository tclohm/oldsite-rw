import { useState } from "react";
import BlogLayout from "src/layouts/BlogLayout"
import { useAuth } from "@redwoodjs/auth"
import { Container, Row, Col, Tooltip } from "reactstrap"

const HomePage = () => {
	const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
	const [aboutIsOpen, setAboutIsOpen] = useState(false);
	const toggleAbout = () => setAboutIsOpen(!aboutIsOpen);

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
					<div className="circle"> 
						<div className="memoji mt-5 ml-5" 
						id="aboutblurb" 
						href="#"
						alt="apple memoji"
						>
						</div>
					</div>
					<Tooltip 
							placement="right" 
							isOpen={aboutIsOpen} 
							toggle={toggleAbout} 
							target="aboutblurb">
								<h6>Hi. I'm Taylor. I'm a software developer, and I enjoy learning.
								For more than ten years, I have been working with non-profits, 
								entrepreneurs, and engineers to help them build products and relationships. 
								I enjoy coffee, croissants, and writing "Bio" sections.</h6> 
					</Tooltip>
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
			<footer className="bd-footer text-muted mt-5">
          		<p className="ml-3 mt-2">Designed and built by Taylor
	          		<a className="link ml-1" onClick={isAuthenticated ? logOut : logIn} href="#" >
	                  {isAuthenticated ? <i className="fas fa-sign-out-alt" style={{ "font-size": "1rem" }}></i> : <i className="link fas fa-sign-in-alt" style={{ "font-size": "1rem" }}></i>}
	                </a>
          		</p>
          		{ isAuthenticated && <h6><Badge color="light">{currentUser.email}</Badge></h6> }
        	</footer>
		</>
  	)
}

export default HomePage
