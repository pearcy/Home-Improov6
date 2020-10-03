// import React from 'react';
// import { graphql } from 'gatsby';
// import Page from '../layouts/page';

// export const query = graphql `
// query ($slug: String!) {
//     markdownRemark (
//       fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//         projectTime
//       }
//      html 
//     }
//   }
// `

// const Blog = (props) => {
//     return (
//         <Page>
//         <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//         <p>{props.data.markdownRemark.frontmatter.date}</p>
//         <p>{props.data.markdownRemark.frontmatter.projectTime}</p>
//         <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
//         </Page>


//     )
// }

// export default Blog;

