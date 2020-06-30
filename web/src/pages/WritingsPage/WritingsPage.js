import { Link, routes } from "@redwoodjs/router"
import { useSessionStorage } from "../../hooks/useSessionStorage"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"
import BlogPostsCell from "src/components/BlogPostsCell"

const WritingPage = () => { 

	const [onHome, setOnHome] = useSessionStorage("onHome", false); 
	const [onWriting, setOnWriting] = useSessionStorage("onWriting", true);

	function home(event) {
		setOnHome(!onHome)
		setOnWriting(!onWriting)
	}

	return (
		<BlogLayout>
			<div className="mt-3">
			<Breadcrumb>
					<BreadcrumbItem><Link to={routes.home()}><i className="fas fa-home" onClick={home}></i></Link></BreadcrumbItem>
					<BreadcrumbItem active><i className="fas fa-feather-alt"></i></BreadcrumbItem>
				</Breadcrumb>
			</div>
			<BlogPostsCell />
		</BlogLayout>
	)
}

export default WritingPage
