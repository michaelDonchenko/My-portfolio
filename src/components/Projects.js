import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {

const projects = [
    { name: "Ecommerce-App",
    description: "This is a fully working ecommerce app, There are two types of users regular users and admin. Regular users can buy products and see their purchase history on thier dashboard, while admins can add/delete products && categories, And see all the orders from the users.",
    size: "Medium-large",
    builtWith:"MERN Stack (Context-API)",
    img: "Ecommerce.PNG",
    githubLink:"https://github.com/michaelDonchenko/Ecommerce-App",
    demoLink:"https://ecommerce-app12.herokuapp.com/"
    },

    { name: "IT-Logger",
    description: "IT-Logger is an app for IT department, here the technichians can add/remove/update thier IT logs. Another feature is adding and delling technichians, And making the important in case it needs extra attention.",
    size: "Small-Medium",
    builtWith:"MERN Stack (Redux)",
    img: "itLogger.PNG",
    githubLink:"https://github.com/michaelDonchenko/IT-looger",
    demoLink:"https://it-looger.herokuapp.com/"
    },

    { name: "Github-Finder",
      description: "Github-Finder is a small app where you can search for github users, watch thier info in a comfortable page and even visit thier github account",
      size: "Very Small",
      builtWith:"React",
      img: "githubFinder.PNG",
      githubLink:"https://github.com/michaelDonchenko/Github-finder",
      demoLink:"https://github-finder7438473.netlify.app/"
    },

    { name: "Contact-Keeper",
      description: "Contact Keeper is a full stack MERN app, you can make an account login and save your contacts by name/phone/email. More features are saving your contacts by type (personal/professional) and filtered search.",
      size: "Small-Medium",
      builtWith:"MERN Stack (Context-API)",
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
