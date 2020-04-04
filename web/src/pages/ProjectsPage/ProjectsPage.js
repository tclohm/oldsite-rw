import { Link, routes } from "@redwoodjs/router"

import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"

const ProjectPage = () => {
  return (
  	<BlogLayout>
	  	<div className="mt-3">
	    	<Breadcrumb>
	  			<BreadcrumbItem><Link to={routes.home()}><i className="fas fa-home"></i></Link></BreadcrumbItem>
	  			<BreadcrumbItem active><i className="fas fa-project-diagram"></i></BreadcrumbItem>
	  		</Breadcrumb>
	    </div>
    </BlogLayout>
  )
}

export default ProjectPage
