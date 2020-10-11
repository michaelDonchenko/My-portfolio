import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

const projects = [
    { name: "Github-Finder",
      description: "Github-Finder is a small app where you can search for github users, watch thier info in a comfortable page and even visit thier github account",
      size: "Small",
      builtWith:"React",
      img: "githubFinder.PNG",
      githubLink:"https://github.com/michaelDonchenko/Github-finder",
      demoLink:"https://github-finder7438473.netlify.app/"
    },
    { name: "Contact-Keeper",
      description: "Contact Keeper is a full stack MERN app, you can make an account login and save your contacts by name/phone/email. More features are saving your contacts by type (personal/professional) and filtered search.",
      size: "Small",
      builtWith:"NodeJS Mongodb React Express",
      img: "contactKeeper.PNG",
      githubLink:"https://github.com/michaelDonchenko/Contact-Keeper",
      demoLink:"https://contact-keeper1212.herokuapp.com/"
    },
  ]


  return (
    <div>
      {
        projects.map(project => <ProjectItem project={project} />)
      }
    </div>
  )
}

export default Projects
