import React, { useEffect, useState } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import Footer from "../organisms/Footer";
import BorderedPicture from "../atoms/BorderedPicture";

// Random image of a dog using promises
const Dog = () => {
  // url of dog image
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    document.title = "dog | Troy Tomasch";
  }, []);

  // useEffect to make call to dog api
  useEffect(() => {
    const getdog = async () => {
      fetch("https://random.dog/woof.json")
        .then((response) => {
          response.json().then((data) => {
            setImageUrl(data.url);
          });
        })
        .catch((error) => {
          console.log(error);
          setImageUrl("https://random-d.uk/api/188.jpg");
        });
    };

    getdog();
  }, []);

  // Components for dog image
  let image = null;
  if (imageUrl) {
    image = (
      <BorderedPicture
        imagePath={imageUrl}
        alt={"Image of a dog"}
        size={"w-100 h-80"}
        styles={"animate-slide"}
      />
    );
  }

  return (
    <div>
      <Header />

      <TitleText text="This is a random image of a dog" />
      <div className={"m-5 flex gap-7 flex-col items-center"}>{image}</div>

      <Footer />
    </div>
  );
};

export default Dog;
