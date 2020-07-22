import { Link, routes } from "@redwoodjs/router"
import { Container, Row, Col } from "reactstrap"

const BlogPost = ({ post }) => {
  return (
    <Link to={routes.blogPost({ id: post.id })}>
    <article className="fade-up-and-in-animation">
    <Container className="mt-3">
            <Row>
                <Col xs={{ size: 4 }}>
                    <img className="img-fluid rounded mt-sm-3 mt-md-2 mt-lg-0 mt-5 img-max-height" src={post.image}/>
                </Col>
                <Col xs={{ size: 7 }}>
                    <Row>
                        <Col className="mt-md-5 pt-md-3 mt-5" xs={{ size: 12 }}>
                            <h4 className="blog-title">{post.title}</h4>
                            <p className="blog-para">{post.body}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="date-font mt-md-5 mt-lg-5 pt-lg-5 mt-3">{Date(post.createdAt).toString().substring(0, 15)}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </Container>
    </article>
    </Link>
  )
}

export default BlogPost
