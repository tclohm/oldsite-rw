import { Link, routes } from "@redwoodjs/router"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

const ProjectPage = () => {
  return (
  	<div>
    	<Breadcrumb>
  			<BreadcrumbItem><Link to={routes.home()}>Home</Link></BreadcrumbItem>
  			<BreadcrumbItem active>Projects</BreadcrumbItem>
  		</Breadcrumb>
    </div>
  )
}

export default ProjectPage
