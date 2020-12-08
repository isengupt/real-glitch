import React from 'react'

import ScrambleWord from "./ScrambleWord";
import './DigitHover.scss'
const Scrambles = [
  {
   title: "Web Developer Intern",
   subtitle: 'Future Doctors Organization',
    scores: [
      "Built a React, Meteor.js full stack web application that uses the publication and subscription pattern to dynamically update data from a MongoDB database to the client",
      "Created multiple schemas for the events, announcements, and auxiliary data that would be produced by administrators and consumed by members of the club",
      "Utilized Meteor’s global state capabilities to create a interface that would change for specified role and school at login and assign editing and event adding capabilities accordingly",

    ],
    type: 'Remote',
    date: "Aug. 2020 – Present",
  },
  {
    title: "Web Developer Intern",
    subtitle: 'Contain Covid',
     scores: [
       "Aided in implementing a web application that takes user’s Google takeout data to tag locations for manual contact tracing",
       "Designed a boilerplate user interface with React and Webflow that allows users to navigate through visited locations and add interactions and notes for their designated tracer",
       "Developed database schemas for interactions and granular user data to organize and edit tracer and tracee info"
 
     ],
     type: 'Remote',
     date: "Mar. 2020 – Aug. 2020",
   },
   {
    title: "Neuroscience Research Assistant",
    subtitle: 'University of Maryland, College Park',
     scores: [
       "Measured behavior patterns of crayfish in different social situations and Ethyl Hydroxide environments",
       "Interpreted the erratic behavior patterns through a tested formula in order to obtain quantifiable insights on the psychological effects of the Ethyl Hydroxide",
       "Created an OpenCV optical-flow program in Python that uses the Lucas-Kanade method to track motion of objects in the video and cut and tally erratic motions for further analysis",
 
     ],
     type: 'Remote',
     date: "Jun. 2019 - Aug. 2019",
   },
 
];


const mapLetters = ['A','B', 'C', 'D', 'E']




export default function DigitHover() {
    const [activeIndex, setActiveIndex] = React.useState(-1)

    function scrambleSet(index) {
        console.log(index)
        setActiveIndex(index)
    }
  return (
    <div className="digit-container">
      <div className="digit-section">
        <div className="digit-title">
        
        <div>
        EXPERIENCE<span class="blinking-cursor">|</span>
        </div>
        </div>

        {Scrambles.map((item, key) => (
          <div className="digit-item">
          <div className="digit__main" style={{display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem'}}>
            <div className="digit__title">{item.title}</div>
            <div className="digit__subtitle">{item.subtitle}</div>
            </div>
            <div className="digit-scores">
              {item.scores.map((word, index) => (
                  <div className="digit-scramble"
                  onMouseEnter={() => scrambleSet(mapLetters[key] + index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                
                  >
                  <div style={{display: "flex", flexDirection: 'row'}}>
                  <span className="scramble__span">0{index}</span>
                <ScrambleWord paragraph= {word} fullScramble={mapLetters[key] + index == activeIndex ? true : false} />
                </div>
              
                
                </div>
              ))}
            </div>

            <div className="digit-date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
