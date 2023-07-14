import React from "react";
import BorderedPicture from "../atoms/BorderedPicture";
import TitleText from "../atoms/TitleText";

// Image imports
import waterfall from "../images/waterfall.jpg";
import mountain from "../images/mountain.jpg";
import arch from "../images/arch.jpg";
import firecracker from "../images/firecrackerfourmiler.jpg";
import shenandoah from "../images/shenandoah.jpg";
import nyc from "../images/nyc.jpeg";
import hobokennow from "../images/hobokennow.jpg";
import morgan from "../images/morgan.jpg";

const HomeLayout = () => {
  return (
    <div className="flex flex-col max-w-screen-lg items-center">
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <TitleText text={"Hello! Welcome to my website!"} />
        <BorderedPicture imagePath={shenandoah} size={"h-80 w-60"} />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture imagePath={mountain} size={"w-80 h-60"} />
        <TitleText
          text={
            "I'm a 21 year old developer who enjoys developing user-centered web and mobile apps."
          }
        />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <TitleText
          text={
            "My frontend technology of choice is React and I used it along with Tailwind CSS to develop this website."
          }
        />

        <BorderedPicture imagePath={nyc} size={"w-80 h-54"} />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture imagePath={hobokennow} size={"h-54 w-72"} />
        <TitleText
          text={
            "I'm always interested in learning new technologies and in the past I've worked with Ruby on Rails, Swift and React Native."
          }
        />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <TitleText
          text={
            "In my free time, I enjoy traveling with my girlfriend and spending time with friends and family."
          }
        />
        <BorderedPicture imagePath={morgan} size={"h-80 w-54"} />
      </div>

      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture imagePath={firecracker} size={"h-80 w-54"} />
        <TitleText
          text={
            "You can often find me running and hiking the trails or hitting the roads on my bike."
          }
        />
      </div>

      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <TitleText
          text={
            "Thanks for visiting! Feel free to check out what I've been working on through the resume or projects pages."
          }
        />
        <BorderedPicture imagePath={arch} size={"h-80 w-54"} />
      </div>

      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture imagePath={waterfall} size={"h-54 w-80"} />
        <TitleText
          text={
            "You can also get in touch with me at troytomasch@gmail.com. Have a great day!"
          }
        />
      </div>
    </div>
  );
};

export default HomeLayout;
