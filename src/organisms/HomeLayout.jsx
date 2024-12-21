import React from "react";
import BorderedPicture from "../atoms/BorderedPicture";
import TitleText from "../atoms/TitleText";

// Image imports
import waterfall547 from "../images/waterfall/waterfall547.jpg";
import waterfall1094 from "../images/waterfall/waterfall1094.jpg";
import mountain547 from "../images/mountain/mountain547.jpg";
import mountain1094 from "../images/mountain/mountain1094.jpg";
import arch202 from "../images/arch/arch202.jpg";
import arch289 from "../images/arch/arch289.jpg";
import arch578 from "../images/arch/arch578.jpg";
import firecracker279 from "../images/firecracker/firecracker279.jpg";
import firecracker619 from "../images/firecracker/firecracker619.jpg";
import firecracker1238 from "../images/firecracker/firecracker1238.jpg";
import firecracker1856 from "../images/firecracker/firecracker1856.jpg";
import firecracker2475 from "../images/firecracker/firecracker2475.jpg";
import shenandoah335 from "../images/shenandoah/shenandoah335.jpg";
import shenandoah670 from "../images/shenandoah/shenandoah670.jpg";
import nyc490 from "../images/nyc/nyc490.jpg";
import nyc1225 from "../images/nyc/nyc1225.jpg";
import nyc2449 from "../images/nyc/nyc2449.jpg";
import nyc4898 from "../images/nyc/nyc4898.jpeg";
import hobokennow269 from "../images/hobokennow/hobokennow269.jpg";
import hobokennow448 from "../images/hobokennow/hobokennow448.jpg";
import hobokennow896 from "../images/hobokennow/hobokennow896.jpg";
import morgan240 from "../images/morgan/morgan240.jpg";
import morgan369 from "../images/morgan/morgan369.jpg";
import morgan615 from "../images/morgan/morgan615.jpg";
import SubheaderText from "../atoms/SubheaderText";

const HomeLayout = () => {
  let contactText = null;
  if (
    window.innerWidth < 500 ||
    (window.innerWidth > 768 && window.innerWidth < 870)
  ) {
    contactText = (
      <SubheaderText
        text={
          "You can also get in touch with me at troytomasch@gmail.com. Have a great day!"
        }
        textColor={"text-white"}
      />
    );
  } else {
    contactText = (
      <TitleText
        text={
          "You can also get in touch with me at troytomasch@gmail.com. Have a great day!"
        }
      />
    );
  }

  // Image srcsets for improved image loading
  const archSet = `${arch202} 202w, ${arch289} 289w, ${arch578} 578w`;
  const waterfallSet = `${waterfall547} 547w, ${waterfall1094} 1094w`;
  const mountainSet = `${mountain547} 547w, ${mountain1094} 1094w`;
  const shenandoahSet = `${shenandoah335} 335w, ${shenandoah670} 670w`;
  const firecrackerSet = `${firecracker279} 279w, ${firecracker619} 619w, ${firecracker1238} 1238w, ${firecracker1856} 1856w, ${firecracker2475} 2475w`;
  const nycSet = `${nyc490} 490w, ${nyc1225} 1225w, ${nyc2449} 2449w, ${nyc4898} 4898w`;
  const hobokennowSet = `${hobokennow269} 269w, ${hobokennow448} 448w, ${hobokennow896} 896w`;
  const morganSet = `${morgan240} 240w, ${morgan369} 369w, ${morgan615} 615w`;

  return (
    <div className="flex flex-col sm:max-w-screen-lg items-center w-11/12">
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4 motion-reduce:animate-none">
        <TitleText text={"Hello! Welcome to my website!"} />
        <BorderedPicture
          imagePath={shenandoah670}
          size={"h-80 w-60"}
          alt={"Troy in Shenandoah"}
          srcset={shenandoahSet}
          sizes={"240px"}
        />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture
          imagePath={mountain1094}
          size={"w-80 h-60"}
          alt={"Troy sitting on a mountain"}
          srcset={mountainSet}
          sizes={"320px"}
        />
        <TitleText
          text={
            "I'm a 23 year old software engineer who enjoys developing user-centered web and mobile apps."
          }
        />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <TitleText
          text={
            "My frontend technology of choice is React and I used it along with Tailwind CSS to develop this website."
          }
        />

        <BorderedPicture
          imagePath={nyc4898}
          size={"w-80 h-54"}
          alt={"Troy in NYC"}
          srcset={nycSet}
          sizes={"320px"}
        />
      </div>
      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture
          imagePath={hobokennow896}
          size={"h-54 w-72"}
          alt={"Troy presenting his app, Hoboken Now"}
          srcset={hobokennowSet}
          sizes={"288px"}
        />
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
        <BorderedPicture
          imagePath={morgan615}
          size={"h-80 w-56"}
          alt={"Troy traveling with his girlfriend"}
          srcset={morganSet}
          sizes={"224px"}
        />
      </div>

      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture
          imagePath={firecracker2475}
          size={"h-80 w-56"}
          alt={"Troy running"}
          srcset={firecrackerSet}
          sizes={"224px"}
        />
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
        <BorderedPicture
          imagePath={arch578}
          srcset={archSet}
          size={"h-80 w-56"}
          alt={"Troy in front of an arch"}
          sizes={"224px"}
        />
      </div>

      <div className="flex md:flex-row flex-col align-middle items-center justify-between content-center gap-6 my-4">
        <BorderedPicture
          imagePath={waterfall1094}
          size={"h-54 w-80"}
          alt={"Troy next to a waterfall"}
          srcset={waterfallSet}
          sizes={"320px"}
        />
        {contactText}
      </div>
    </div>
  );
};

export default HomeLayout;
