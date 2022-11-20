import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import About from "../components/about"
import Members from "../components/members"
import Header from "../components/header"
import Footer from "../components/footer"


const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Header></Header>
      <About></About>
      <Members></Members>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
