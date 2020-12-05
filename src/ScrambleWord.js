import React, { useCallback, useEffect, useState } from "react";


import { TextScramble } from "./text-scramble";

const samples = [
  "Bringing together features from early European grotesques and American gothics, Averta  is a geometric sans serif family with a simple, yet appealing, personality.",
  "Our new Preview feature is like a private playground for developers, designers, and content creators"
];

export default function ScrambleWord({paragraph, startPlay, fullScramble}) {
  const [text, setText] = useState(0);
  const [play, setPlay] = useState(false)

  function resetPlay() {
      setText(0)
      setPlay(true)
  }

  const handleComplete = useCallback(() => {
    setTimeout(() => {
      if (text === 0) {
        setText(1);
      } else {
        setText(0);
      }
    }, 850);
  }, [text]); 



  //    onMouseEnter={resetPlay}

  return (
    <div>
   
      <div

      >
        <TextScramble
    
          play={fullScramble ? fullScramble : startPlay ? startPlay : play}
          setPlay = { setPlay}
          
          text={paragraph}
          speed={1.2}
          seed={1}
          seedInterval={10}
          step={1}
          stepInterval={1}
   
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}

