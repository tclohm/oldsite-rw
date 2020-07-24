// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post" page={BlogPostPage} name="blogPost" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/admin/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/writings" page={WritingsPage} name="writings" />
      <Route path="/projects" page={ProjectsPage} name="projects" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
