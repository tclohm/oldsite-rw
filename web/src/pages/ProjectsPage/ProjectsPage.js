import { Link, routes } from "@redwoodjs/router"

import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"

const ProjectPage = () => {
  return (
  	<BlogLayout>
	  	<div>
	    	<Breadcrumb>
	  			<BreadcrumbItem><Link to={routes.home()}>Home</Link></BreadcrumbItem>
	  			<BreadcrumbItem active>Projects</BreadcrumbItem>
	  		</Breadcrumb>
	    </div>
    </BlogLayout>
  )
}

export default ProjectPage
