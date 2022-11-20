import * as React from "react"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

class Footer extends React.Component {
  render() {    
    return (
      <article >
        <div>
        <h2 style={headingStyles}>Footer</h2>
        </div>
      </article>
    )
  }
}

export default Footer
