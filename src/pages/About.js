import React from 'react'
import SkillCard from '../components/SkillCard'
import '../css/pages/about.css'

const About = () => {
  const cards = [
    {
      name: 'HTML5',
      image: 'html5.png',
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'CSS3',
      image: 'css3.png',
      style: {
        imgWidth: '70%',
      },
    },
    {
      name: 'Java Script ES6+',
      image: 'es6.png',
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'Modern React 16+',
      image: 'react.png',
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'Redux',
      image: 'redux.png',
      style: {
        imgWidth: '70%',
      },
    },
    {
      name: 'React bootstrap',
      image: 'reactbootstrap.png',
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'Node JS',
      image: 'nodejs.jpg',
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'MongoDB',
      image: 'mongodb.png',
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'Git',
      image: 'git.png',
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'Firebase',
      image: 'firebase.png',
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'AWS',
      image: 'aws.jpg',
      style: {
        imgWidth: '100%',
      },
    },
  ]
  return (
    <div className='container aboutPage'>
      <h2 className='mt-4 mb-4 text-center'>About Page</h2>
      <div className='personl_Info'>
        <div class='card'>
          <div class='card-body'>
            <h3 className='card-title mb-4'>Personal Info:</h3>
            <h5 className='card-subtitle mb-2 text-muted'>
              A little bit about myself
            </h5>
            <p>
              Hi my name is Michael Donchenko, I am 26 years old from tel-aviv,
              A selt thouth full stack (MERN) web developer.
            </p>
            <p>
              {' '}
              Before programming I used to be a personal trainer for a few years
              after the army. Worked at the biggest gyms in Israel met a lot of
              cool people and had a lot of fun.
            </p>
            <p>
              When i decided to switch my carrer to high tech at first i didnt
              know much about programming. I went to study cyber security like
              my friend did but didnt enjoy it at all. Then during the cyber
              course we had a little bit of programming with python, I really
              liked it and got interested more about programming.
            </p>
            <p>
              Since then I finished my cyber security course (at a real
              college), and starting learning programming by myself. It was
              amazing that i found something interesting and challanging at the
              same time! I studied every day and took a lot of internet courses,
              did a lot of reaserch and it became very quickly a part of my
              life.
            </p>
          </div>
        </div>

        <div>
          <h2 className='mt-4 mb-4 text-center'>My programming skills</h2>
          <div
            className='container'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {cards.map((card) => (
              <SkillCard card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
