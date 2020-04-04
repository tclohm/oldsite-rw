import { Link, routes } from "@redwoodjs/router"

import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import BlogLayout from "src/layouts/BlogLayout"
import BlogPostsCell from "src/components/BlogPostsCell"

const WritingPage = () => {
  return (
	<BlogLayout>
	  	<div className="mt-3">
	    	<Breadcrumb>
	  			<BreadcrumbItem><Link to={routes.home()}><i class="fas fa-home"></i></Link></BreadcrumbItem>
	  			<BreadcrumbItem active><i className="fas fa-feather-alt"></i></BreadcrumbItem>
	  		</Breadcrumb>
	    </div>
	    <BlogPostsCell />
    </BlogLayout>
  )
}

export default WritingPage
