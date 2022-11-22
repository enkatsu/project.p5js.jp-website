import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import About from "../components/about"
import Members from "../components/members"
import Header from "../components/header"
import Footer from "../components/footer"
import "./index.scss"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="section">
      <div className="container">
        <Header></Header>
        <About></About>
        <Members></Members>
        <Footer></Footer>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
