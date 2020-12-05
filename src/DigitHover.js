import React from 'react'

import ScrambleWord from "./ScrambleWord";

const Scrambles = [
  {
    date: "2020",
    scores: [
      "Hello my name is",
      "Lorem ipsum genertor",
      "Hello world",
      "Scrambles",
    ],
    name: "Ooga booga",
  },
  {
    date: "2020",
    scores: [
      "Hello my name is",
      "Lorem ipsum genertor",
      "Hello world",
      "Scrambles",
    ],
    name: "Ooga booga",
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
        DISCOVERY <span class="blinking-cursor">|</span>
        </div>
        </div>

        {Scrambles.map((item, key) => (
          <div className="digit-item">
            <div className="digit-name">{item.name}</div>
            <div className="digit-scores">
              {item.scores.map((word, index) => (
                  <div className="digit-scramble"
                  onMouseEnter={() => scrambleSet(mapLetters[key] + index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                
                  >
                  <div style={{display: "flex", flexDirection: 'row'}}>
                  <span className="scramble__span">{index}</span>
                <ScrambleWord paragraph= {word} fullScramble={mapLetters[key] + index == activeIndex ? true : false} />
                </div>
                <ScrambleWord paragraph={"0:00:11"} fullScramble={mapLetters[key] + index == activeIndex ? true : false} />
                
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
