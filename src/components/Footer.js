import React from 'react'
import "../css/components/footer.css"

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="iconDiv">
      <a target="_blank" href="https://www.linkedin.com/in/michael-donchenko-39aa711b3/" className="myIcons"> <i className="fab fa-linkedin"></i></a>
      </div>
      <div className="iconDiv">
      <a target="_blank" href="https://www.instagram.com/michael.donchenko/?hl=en" className="myIcons"> <i className="fab fa-instagram "></i></a>
      </div>
      <div className="iconDiv">
      <a target="_blank" href="https://github.com/michaelDonchenko" className="myIcons"> <i className="fab fa-github "></i> </a>
      </div>
      <div className="iconDiv">
      <a target="_blank" href="https://www.youtube.com/channel/UCyMpEd0wQe_TKiz3pARrtew?view_as=subscriber" className="myIcons"> <i className="fab fa-youtube "></i> </a>
      </div>
      <div className="iconDiv">
      <a target="_blank" href="https://www.facebook.com/michael.donchenko.10/" className="myIcons"> <i className="fab fa-facebook-square "></i></a>
      </div>    
   </div>
  )
}

export default Footer
