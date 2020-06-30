import { Link, routes } from "@redwoodjs/router"
import { useSessionStorage } from "../../hooks/useSessionStorage"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"

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
		</BlogLayout>
	)
}

export default ProjectPage
