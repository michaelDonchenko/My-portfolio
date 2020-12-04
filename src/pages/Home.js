import React from 'react'
import '../css/pages/home.css'

const Home = () => {
  return (
    <div className='homePage container'>
      <div className='row'>
        <div className='col-sm homePage_left'>
          <img className='img' src={require('../img/img2.png')} />
        </div>
        <div className='col-sm homePage_right'>
          <h2>Welcome to my Portfolio site!</h2>
          <h3>
            My name is <strong>Michael Donchenko</strong>,
          </h3>
          <h5>I am a self thought Full stack (MERN) web developer.</h5>
          <h5>You can watch my projects on the projects page,</h5>
          <h5>And read more about me on my about page.</h5>
        </div>
      </div>
    </div>
  )
}

export default Home
