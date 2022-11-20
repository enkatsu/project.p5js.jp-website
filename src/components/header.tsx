import * as React from "react"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

class Header extends React.Component {
  render() {    
    return (
      <article >
        <div>
        <h1 style={headingStyles}>p5js.jp Project</h1>
        </div>
      </article>
    )
  }
}

export default Header
