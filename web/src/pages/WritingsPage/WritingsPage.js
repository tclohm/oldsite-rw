import { Link, routes } from "@redwoodjs/router"

import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"

const WritingPage = () => {
  return (
	<BlogLayout>
	  	<div>
	    	<Breadcrumb>
	  			<BreadcrumbItem><Link to={routes.home()}>Home</Link></BreadcrumbItem>
	  			<BreadcrumbItem active>Writing</BreadcrumbItem>
	  		</Breadcrumb>
	    </div>
    </BlogLayout>
  )
}

export default WritingPage
