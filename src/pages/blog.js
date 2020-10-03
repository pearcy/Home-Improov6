// import React from 'react';
// import Page from '../layouts/page';
// import { Link, graphql, useStaticQuery } from 'gatsby';

// import blogStyles from '../styles/blog.module.scss';


// const BlogPage = () => {
//     const data = useStaticQuery(graphql`
// 		  query {
// 		  allMarkdownRemark {
// 		    edges {
// 		      node {
// 		        frontmatter {
// 		          title
// 		          date
// 		          projectTime
// 		        }
//             fields {
//               slug
//             }
// 		      }
// 		    }
// 		  }
// 		}   
//     `)

//     return (
//         <Page>
//             <h1>Blog</h1>
//             <ol className={blogStyles.posts}>
//               {data.allMarkdownRemark.edges.map((edge) => {
//                 return (
//                   <li className={blogStyles.post}>
//                     <Link to={`/blog/${edge.node.fields.slug}`}>
//                     <h3>{edge.node.frontmatter.title}</h3>
//                     <p>{edge.node.frontmatter.date}</p>
//                     <p>{edge.node.frontmatter.projectTime}</p>
//                     </Link>
//                   </li>
//                 )

//               })}
//             </ol>
//         </Page>
// );
// }

// export default BlogPage;

