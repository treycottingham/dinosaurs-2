import React from "react"

class SkillList extends React.Component{
  render() {
    var skillClasses = "skills-container"
      return (
        <section className={skillClasses}>
          <h4>Skills</h4>
          <ul className="skills-list"key="Skills">
            {this.props.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      )
  }
}

export default SkillList

// import React from 'react'

// const SkillList = (props) => {
//   const skills = props.skills.map((skill,index) => {
//     return (
//       <li key={index}>
//         {skill}
//       </li>
//     )
//   })
//   return (
//     <div>
//       <h4>Skills</h4>
//       <ul className="skills-list">
//         {/* {skills} */}
//       </ul>
//     </div>
//   )
// }


// export default SkillList