import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const projects = [
    {
      name: 'Jewelry shop (real production site)',
      description:
        'This project is a jewelry shop i did for a client. Fully working production ecommerce app with fully working authentication system with firebase, Admin and customers features and dashboard, full working purchase system orders history and much more.',
      size: 'medium-large',
      builtWith: 'MERN Stack (Redux)',
      img: 'jewelry.PNG',
      githubLink: 'https://github.com/michaelDonchenko/olga-jewelry.01',
      demoLink: 'https://olga-jewelry.herokuapp.com/',
    },

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
