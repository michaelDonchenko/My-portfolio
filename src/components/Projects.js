import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const projects = [
    {
      name: 'Pro-Shop',
      description:
        'My recent project Full ecommerce app. A lot of admin user functionallity like CRUD products view and update users and view and update orders. Users can buy products with paypal or credit card and see thier order history, Users can rate and comment the products, fully working authentication for logged in users and for admins.',
      size: 'Medium-large',
      builtWith: 'MERN Stack (Redux)',
      img: 'proShop.PNG',
      githubLink: 'https://github.com/michaelDonchenko/proShop',
      demoLink: 'https://pro-shop01.herokuapp.com/',
    },

    {
      name: 'MERN-Auth-Template',
      description:
        'This is a Complete MERN authentication app I have made from with Context-API. Fully working authentication with login/register errors, anti hacking username && email, JWT and more. ',
      size: 'Small',
      builtWith: 'MERN Stack (Context-API)',
      img: 'mernAuth.PNG',
      githubLink: 'https://github.com/michaelDonchenko/mern-auth-V2',
      demoLink: 'https://mern-auth-v2.herokuapp.com/',
    },

    {
      name: 'IT-Logger',
      description:
        'IT-Logger is an app for IT department, here the technichians can add/remove/update thier IT logs. Another feature is adding and delling technichians, And making the important in case it needs extra attention.',
      size: 'Small',
      builtWith: 'MERN Stack (Redux)',
      img: 'itLogger.PNG',
      githubLink: 'https://github.com/michaelDonchenko/IT-looger',
      demoLink: 'https://it-looger.herokuapp.com/',
    },
  ]

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </div>
  )
}

export default Projects
