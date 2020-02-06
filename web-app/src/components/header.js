import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import { useColorMode, Heading, IconButton, Flex } from "@chakra-ui/core"

const Header = ({ siteLogo }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SaumyaKaranLogo.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header
      style={{
        // background: colorMode === "light" ? "white" : "#0d0d18",
        color: colorMode === "light" ? "#0d0d18" : "white",
        marginBottom: `1.45rem`,
      }}
    >
      <Flex justifyContent="space-between" pt={4} px={4}>
        <Link to="/">
          <Img
            fixed={
              colorMode === "light" ? siteLogo : data.file.childImageSharp.fixed
            }
            alt="Saumya Karan Logo"
            placeholderStyle={{ opacity: 0 }}
          />
        </Link>
        <IconButton
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
        />
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
