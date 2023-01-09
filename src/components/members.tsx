import * as React from "react"


const members = [
  {
    name: 'Katsuya Endoh',
  },
  {
    name: 'Katsuya Endoh', 
  },
  {
    name: 'Katsuya Endoh',
  },
  {
    name: 'Katsuya Endoh', 
  },
  {
    name: 'Katsuya Endoh',    
  },
];


class Members extends React.Component {
  render() {
    return (
      <section className="section">
        <h2 className="subtitle">Members</h2>
        <div className="columns is-multiline">
          {
            members.map(member => {
              return <div className="column is-one-quarter">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      {member.name}
                    </p>
                  </header>
                  <div className="card-image">
                    <figure className="image">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt={`${member.name} image`} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      content content content content content content content content
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </section>
    )
  }
}

export default Members
