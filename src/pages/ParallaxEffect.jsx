import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import backgroundimage from "../images/parallaxbg.jpg";
import balloon from "../images/hotairballoon.png";
import ufo from "../images/ufo.png";
import skydiver from "../images/skydiver.png";
import bird from "../images/bird.png";

// Demonstrates the parallax effect
const ParallaxEffect = () => {
  return (
    <Parallax pages={4}>
      <ParallaxLayer
        factor={4}
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
        }}
      ></ParallaxLayer>

      <ParallaxLayer speed={0.5} factor={2}>
        <h1 className="text-6xl text-white text-center my-48">
          This is a page where I'm trying out the parallax effect
        </h1>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} offset={1}>
        <div className="w-screen h-screen relative">
          <img
            src={ufo}
            className="w-24 absolute right-24 top-24"
            alt="UFO"
          ></img>
          <img
            src={ufo}
            className="w-24 absolute left-48 bottom-12"
            alt="UFO"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1.2} offset={1}>
        <div className="w-screen h-screen relative">
          <img
            src={ufo}
            className="w-48 absolute bottom-24 right-48"
            alt="UFO"
          ></img>
          <img
            src={ufo}
            className="w-48 absolute top-1/3 left-1/4"
            alt="UFO"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.35} offset={2}>
        <div className="w-screen h-screen relative">
          <img
            src={balloon}
            className="w-12 absolute bottom-24 right-48"
            alt="Hot air balloon"
          ></img>
          <img
            src={balloon}
            className="w-12 absolute top-1 left-1/4"
            alt="Hot air balloon"
          ></img>
          <img
            src={balloon}
            className="w-12 absolute left-10 bottom-48"
            alt="Hot air balloon"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.7} offset={2}>
        <div className="w-screen h-screen relative">
          <img
            src={balloon}
            className="w-24 absolute left-1/3"
            alt="Hot air balloon"
          ></img>
          <img
            src={balloon}
            className="w-24 absolute bottom-5 right-96"
            alt="Hot air balloon"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1.5} offset={2}>
        <div className="w-screen h-screen relative">
          <img
            src={balloon}
            className="w-48 absolute bottom-2 right-16"
            alt="Hot air balloon"
          ></img>
          <img
            src={balloon}
            className="w-48 absolute top-10 right-1/4"
            alt="Hot air balloon"
          ></img>
          <img
            src={balloon}
            className="w-48 absolute left-24 bottom-24"
            alt="Hot air balloon"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.6} offset={2.95}>
        <div className="w-screen h-3/4 relative">
          <img
            src={bird}
            className="w-12 absolute top-5 left-16"
            alt="Hot air balloon"
          ></img>
          <img
            src={bird}
            className="w-12 absolute bottom-10 left-1/3"
            alt="Hot air balloon"
          ></img>
          <img
            src={bird}
            className="w-12 absolute right-12 top-24"
            alt="Hot air balloon"
          ></img>
          <img
            src={bird}
            className="w-12 absolute right-1/4 bottom-12"
            alt="Hot air balloon"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1.3} offset={2.95}>
        <div className="w-screen h-3/4 relative">
          <img
            src={bird}
            className="w-24 absolute top-48 right-1/3"
            alt="Hot air balloon"
          ></img>
          <img
            src={bird}
            className="w-24 absolute top-10 left-1/4"
            alt="Hot air balloon"
          ></img>
          <img
            src={bird}
            className="w-24 absolute left-1/3 bottom-24"
            alt="Hot air balloon"
          ></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5} factor={2} offset={3}>
        <h1 className="text-6xl text-white text-center mnb-10">
          Pretty neat huh
        </h1>
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 0.2, end: 2.5 }} speed={0.9}>
        <div className="flex justify-center w-screen my-16">
          <img src={skydiver} alt="Skydiver" className="w-24"></img>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxEffect;
