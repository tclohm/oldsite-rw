import { Link, routes } from "@redwoodjs/router"

const BlogPost = ({ post }) => {
  return (
    <article className="fade-up-and-in-animation">
    	<header>
    		<h2>
    			<Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
    		</h2>
    	</header>
    	<p>{post.body}</p>
    	<div>{Date(post.createdAt).toString().substring(0, 15)}</div>
    </article>
  )
}

export default BlogPost
