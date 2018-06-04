import React from 'react'
import SkillList from './SkillList'

class Profiles extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        isHidden: false
      }
      this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <li>
        <div className="profile-card" onClick={(event) => {this.toggleHidden()}}>
          <header className="profile-header">
            <img src={this.props.dino.image} alt=""/>
            <h2>{this.props.dino.name}</h2>
          </header>
          <section>
            {this.state.isHidden ? <SkillList skills={this.props.dino.skills} /> : null}
          </section>
        </div>
      </li>
    )
  }
}

export default Profiles