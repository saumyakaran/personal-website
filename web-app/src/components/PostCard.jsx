import React from "react"
import Moment from "react-moment"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"

const PostCardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

const PostCardContainer = styled(Link)`
  padding: 0em 0em 2.25em 0em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;
  }
`

const PostContentContainer = styled("div")`
  padding: 3em 2.5em 2.25em 2.5em;
`

const PostCategory = styled("h6")`
  font-weight: 600;
  color: ${colors.grey600};
`

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
`

const PostMetas = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostAuthor = styled("div")`
  margin: 0;
`

const PostDate = styled("div")`
  margin: 0;
`

const PostDescription = styled("div")`
  margin-top: 2em;
  margin-bottom: 4em;

  p:last-of-type {
    margin: 0;
  }
`

const PostCardAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
  &:hover {
     {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`

const PostCard = ({
  author,
  category,
  date,
  title,
  description,
  uid,
  thumbnail,
}) => (
  <PostCardWrapper>
    <PostCardContainer
      className="BlogPostCard"
      to={`/blog/${uid}`}
      style={{
        background: `url("${thumbnail.url}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "396px",
      }}
    />
    <PostContentContainer>
      <PostCategory>{category[0].text}</PostCategory>
      <Link
        to={`/blog/${uid}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <PostTitle>{title[0].text}</PostTitle>
        <PostDescription>{RichText.render(description)}</PostDescription>
      </Link>
      <PostCardAction className="PostCardAction" to={`/blog/${uid}`}>
        Read more <span>&#8594;</span>
      </PostCardAction>
      <PostMetas>
        <PostAuthor>{author}</PostAuthor>
        <PostDate>
          <Moment format="MMMM D, YYYY">{date}</Moment>
        </PostDate>
      </PostMetas>
    </PostContentContainer>
    <hr width="100%" style={{ marginBottom: "3rem" }} />
  </PostCardWrapper>
)

export default PostCard

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
