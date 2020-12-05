import React, { useState } from "react";

import IngredientProvider from "@react-ingredients/ingredients-provider";
import MomentumScroll from "@react-ingredients/momentum-scroll";
import Cursor, { Target } from "@react-ingredients/cursor";
import MagneticTransform from "@react-ingredients/magnetic-transform";
import ScrambleWord from "./ScrambleWord";
import "./Glitch.scss";
import gif1 from "./gif/1.gif";
import gif2 from "./gif/2.gif";
import gif3 from "./gif/3.gif";
import gif4 from "./gif/4.gif";
import gif5 from "./gif/5.gif";
import gif6 from "./gif/6.gif";

const cursorItems = [
  {
    image: gif1,
    title: "Kansas, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif2,
    title: "Kansas, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif3,
    title: "Kansas, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif4,
    title: "Arkansas, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif5,
    title: "Virginia, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif6,
    title: "Maryland, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif1,
    title: "Ohio, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
  {
    image: gif2,
    title: "Michigan, USA",
    time: "0:00:14",
    credits: {
      creator: "John Smith",
      title: "Video of tornado during spring",
      contributor: "Hello World",
    },
  },
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const placements = [

  "glitch__center__end",
  "glitch__center__center",
  "glitch__center__start"
]

function Glitch() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeImage, setActiveImage] = useState(gif1);
  const [activeInfo, setActiveInfo] = useState({
    creator: "",
    title: "",
    contributor: "",
  });

  function changeBackground(item, index) {
    console.log(item);
    console.log(index);
    setActiveIndex(index);
    setIsHovered(true);
    setActiveImage(item.image);
    setActiveInfo(item.credits);
  }

  function checkStatus(index) {
    if (!isHovered) {
      return 1;
    } else if (isHovered && index === activeIndex) {
      return 1;
    } else {
      return 0;
    }
  }

  function exitItem() {
    setIsHovered(false);
    setActiveImage(gif1);
    setActiveInfo({
      creator: "",
      title: "",
      contributor: "",
    });
  }

  return (
    <>
      <IngredientProvider>
        <MomentumScroll>
          <Cursor>
            <div className="center">
              <div class="image-container">
                <div class="image-frame">
                  <img src={activeImage} alt="" />
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  minHeight: "100%",
                  minWidth: "100vw",
                  zIndex: "-1",
                  backgroundImage: `url(${activeImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></div>

              <div className="glitch__grid" style={{marginTop: '50px'}}>
                {cursorItems.map((item, index) => (
                  <div >
                  <div
                    style={{ opacity: checkStatus(index), alignItems: 'center', justifyContent: index % 2 === 1 ? 'center' : 'flex-start' }}
                    className= "glitch__grid__item glitch__center__center"
                  >
                    <MagneticTransform>
                      <div
                        className="grid__text"
                        onMouseEnter={() => changeBackground(item, index)}
                        onMouseLeave={() => exitItem()}
                      >
                        <div className="grid__title">{item.title}</div>
                        <div className="grid__time">{item.time}</div>
                      </div>
                    </MagneticTransform>
                  </div>
                  </div>
                ))}
              </div>
              <div className="glitch-info">
                {isHovered ? (
                  <div className="scramble-container">
                    <ScrambleWord
                      paragraph={activeInfo.creator}
                      startPlay={true}
                    />
                    <ScrambleWord
                      paragraph={activeInfo.title}
                      startPlay={true}
                    />
                    <ScrambleWord
                      paragraph={activeInfo.contributor}
                      startPlay={true}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Cursor>
        </MomentumScroll>
      </IngredientProvider>
    </>
  );
}

export default Glitch;
