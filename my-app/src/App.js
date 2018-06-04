import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Profiles from './components/Profiles'
import SkillList from './components/SkillList'

const apiURL = './dinosaurs.json'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        return this.setState({ data: data })
      })
  }

  render() {
    // console.log(this.state.data)
    return (
      <div className="App">
        <Header />
        <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
          {this.state.data.map(dino => {
            return <Profiles dino={dino}/>
          })}
          </ul>
        </section>
        </main>  
        <Footer />
      </div>
    )
  }
}

export default App