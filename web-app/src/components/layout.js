/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { theme, ThemeProvider, ColorModeProvider, CSSReset, Box } from "@chakra-ui/core"
import "./layout.css"
import Header from "./header"
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#2f3542",
    },
    gray: {
      50: "#f9f9f9",
      100: "#ededee",
      200: "#d3d3d4",
      300: "#c4c4c5",
      400: "#b3b3b4",
      500: "#a0a0a2",
      600: "#89898b",
      700: "#6c6c6f",
      800: "#0d0d18",
      900: "#3f3f43",
    },
  },
  fonts: {
    body: "Proxima Nova, sans-serif",
    heading: "Gotham, sans-serif",
    mono: "Menlo, monospace",
  },
}

console.log(theme)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "SaumyaKaranLogo-dark.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />

        <Box as="main" maxW="960px" mx="auto" pb={4}>
          <Header siteTitle={data.site.siteMetadata.title} siteLogo={data.file.childImageSharp.fixed} />
          {children}
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
