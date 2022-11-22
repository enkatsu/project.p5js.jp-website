import * as React from "react"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

class Footer extends React.Component {
  render() {    
    return (
      <footer>
        <div>
        <h2 style={headingStyles}>Footer</h2>
        </div>
      </footer>
    )
  }
}

export default Footer
