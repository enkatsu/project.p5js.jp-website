import * as React from "react"

class About extends React.Component {
  render() {    
    return (
      <section className="section">
        <h2 className="subtitle">About</h2>
        <div>
          The mission of our team is to translate the p5.js website from English to Japanese and provide j5.js resources in Japanese through Japansese version of p5.js website.<br/>
          A reason why we have tackled to translate p5.js website and contribute to j5.js community from 2017, we had learned so much through Processing.<br/>
          I have been working on the translation with students from Meisei University since September 2021.<br/>
          It is referenced by organizations that operate and develop p5.js as an example of how to make it multilingual.
        </div>
        <div className="has-text-right">
          Project Lead<br/>
          Katsuya Endoh
        </div>
      </section>
    )
  }
}

export default About
