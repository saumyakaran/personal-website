import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { motion } from "framer-motion"
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin } from "react-icons/fa"
import { Heading, Text, Link, Box, Flex } from "@chakra-ui/core"

const IndexPage = () => {
  const delay = 0.5
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SaumyaKaranBW.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Box textAlign="center" width="50%" maxWidth={250} mx="auto" mt={8}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: delay }}
        >
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Saumya Karan"
            placeholderStyle={{ opacity: 0 }}
            imgStyle={{ borderRadius: "16rem" }}
          />
        </motion.span>
      </Box>
      <Heading as="h1" size="2xl" textAlign="center" mt={8}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: delay + 0.75 }}
        >
          Hello!
        </motion.h1>
      </Heading>
      <Heading
        as="h3"
        size="lg"
        mb={8}
        fontWeight="400"
        textAlign="center"
        fontFamily="Caviar Dreams, sans-serif"
        fontStyle="italic"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: delay + 2.5 }}
        >
          I am Saumya Karan
        </motion.h3>
      </Heading>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 3.75 }}
      >
        <Text textAlign="center" fontWeight={300} px={8}>
          I am a Problem Solver, currently associated with{" "}
          <Link
            href="https://www.thevantageproject.com/"
            isExternal
            textDecoration="underline"
          >
            The Vantage Project
          </Link>{" "}
          as a Design Lead, spending mindspace in solving UX problems in
          decentralized economic networks.
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 4.75 }}
      >
        <Heading mt={16} as="h4" size="md" textAlign="center">
          Connect with me on
        </Heading>
        <Flex justifyContent="space-around" maxWidth="96px" mx="auto">
          <motion.span
            transition={{ delay: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="https://github.com/saumyakaran/" isExternal>
              <Box as={GoMarkGithub} size={8} />
            </Link>
          </motion.span>

          <motion.span
            transition={{ delay: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="https://www.linkedin.com/in/skrn/" isExternal>
              <Box as={FaLinkedin} size={8} />
            </Link>
          </motion.span>
        </Flex>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
