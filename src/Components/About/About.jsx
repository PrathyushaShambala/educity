import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src ={about_img} alt='' className='about-img'/>
        <img src ={play_icon}alt=""  className='play-icon' onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERCITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today </h2>
        <p>Offering diverse programs in science, technology, business, humanities, and arts.
        Encouraging critical thinking, problem-solving, and innovation.</p>
        <p>Extracurricular activities like student government, clubs, and organizations.
        Public speaking, teamwork, and decision-making training.</p>
        <p>Professors, industry leaders, and alumni networks provide career guidance.
        Internship and research opportunities to gain real-world experience.</p>
      </div>
    </div>
  )
}

export default About
