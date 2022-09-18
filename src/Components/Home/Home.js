import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-vanilla-tilt'
// import img1 from '../../Images/workflow.svg'
import {
  Link
} from "react-router-dom";
const Home = () => {
  return (
    <>

      <section className="homepage">
        <div className="flexbox">
          <h1 className='welcomeTitle1'><span> Welcome </span>to the Scheduler Page <br /> where, </h1>
          <div className="heading">
            <h1 className='welcomeTitle2'>You can Schedule <span className='auto-type'> Your meets</span><br /><span >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  strings: ["In Google Meet", "In Zoom", "In Skype"],
                }}
              />
            </span> </h1>
          </div>
          <div className="meet">
            <Link className="meetlink" to="/admin">Click here to Schedule Meeting</Link>

          </div>
        </div>
      </section>
      <section className="about">
        <h1 className='sectionTitle'>Features</h1>
        <div className="aboutcontents">
          <Tilt>
            <div>
              <div className="aboutcontent">
                <div className="pic">
                  <img className="aboutimg" src="https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2020/09/association-152746_640.png?resize=300%2C300&ssl=1" alt="" />
                </div>
                <h1 className='abouttitle'>Ease to use</h1>
                <p className='aboutpara'>Both event organiser and the responders can easily schedule a meet according to their convenience. As the scheduler overlays the invitee's real calendar to show their available schedule while they're choosing a time to meet.</p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div>

              <div className="aboutcontent">
                <div className="pic">
                  <img className="aboutimg" src="https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2020/09/association-152746_640.png?resize=300%2C300&ssl=1" alt="" />
                </div>
                <h1 className='abouttitle'>Variety of built-in calendar views</h1>
                <p className='aboutpara'>This scheduler supports a variety of built-in calendar views to view appointments. It have day, week, and month views. It supports day, week, workweek, month, timeline day, timeline week, timeline workweek, and timeline month views to elegantly view appointments.</p>
              </div>
            </div>
          </Tilt>
          <Tilt>
            <div>
              <div className="aboutcontent">
                <div className="pic">
                  <img className="aboutimg" src="https://i0.wp.com/statisticsbyjim.com/wp-content/uploads/2020/09/association-152746_640.png?resize=300%2C300&ssl=1" alt="" />
                </div>
                <h1 className='abouttitle'>Ability to automatically set up video calls. </h1>
                <p className='aboutpara'>Users can able to quickly hop on a video call with people is more important than ever. This meeting scheduler can not only add events to your calendar, but also generate links for smooth video chats through services like Google Meet.</p>
              </div>
            </div>
          </Tilt>
        </div>
      </section>
      <section className="workFlow">
        <h1 className='sectionTitle2'>Workflow of Meeting Scheduler</h1>
        <img className='workflow' src='./workflow.svg' alt="" />
      </section>
      <footer>
      <h1 className='footertext'>
        CopyRights reserved &copy; by Meeting.com 
      </h1>
      </footer>
    </>
  )
}

export default Home