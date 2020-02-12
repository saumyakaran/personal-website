import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import PostCard from "components/PostCard";

const BlogTitle = styled("h1")`
    margin-bottom: 1em;
`

const BlogGrid = styled("div")`
    display: flex;
    flex-direction: column;
`

const Blog = ({ posts, meta }) => (
  <>
    <Helmet
      title={`Blog | An evolving collection of thoughts and beliefs of Saumya Karan`}
      titleTemplate={`%s | Blog | An evolving collection of the thoughts and beliefs of Saumya Karan`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Blog | An evolving collection of thoughts and beliefs`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.node.post_author}
            category={post.node.post_category}
            title={post.node.post_title}
            date={post.node.post_date}
            thumbnail={post.node.post_hero_image}
            description={post.node.post_preview_description}
            uid={post.node._meta.uid}
          />
        ))}
      </BlogGrid>
    </Layout>
  </>
)

export default ({ data }) => {
    const posts = data.prismic.allPosts.edges;
    const meta = data.site.siteMetadata;
    if (!posts) return null;

    return (
        <Blog posts={posts} meta={meta}/>
    )
}

Blog.propTypes = {
    posts: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};


export const query = graphql`
         {
           prismic {
             allPosts(sortBy: post_date_DESC) {
               edges {
                 node {
                   post_title
                   post_date
                   post_category
                   post_hero_image
                   post_preview_description
                   post_author
                   _meta {
                     uid
                   }
                 }
               }
             }
           }
           site {
             siteMetadata {
               title
               description
               author
             }
           }
         }
       `

