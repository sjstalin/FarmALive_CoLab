import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

const images = [
  { url: "images/img_1.jpg" },
  { url: "images/img_2.jpg" },
  { url: "images/img_3.jpg" },
  { url: "images/img_4.jpg" },
  { url: "images/img_5.jpg" },
  { url: "images/img_6.jpg" },
  { url: "images/img_7.jpg" },
  { url: "images/img_8.jpg" },
  { url: "images/img_9.jpg" },
];

const imageslidecrop = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default imageslidecrop;
