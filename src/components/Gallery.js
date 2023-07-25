import React, { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = (props) => {
  const [open, setOpen] = useState(false);
  const [mainImage, setMainImage] = useState("./images/image-product-1.jpg");
  // ENSURES THAT IMAGE IN FOCUS WILL BE FIRST SHOWN IN LIGHTBOX
  const [imageIndex, setImageIndex] = useState(0);

  const handleThumbnailClick = (e) => {
    setMainImage(() => e.target.dataset.url);
    setImageIndex(() => Number(e.target.dataset.index));
  };

  return (
    <div className="gallery">
      <div className="img-wrapper">
        <div className="main-img">
          <img src={mainImage} alt="shoes" onClick={() => setOpen(true)} />
        </div>

        <div className="thumbnails">
          <img
            onClick={handleThumbnailClick}
            src="./images/image-product-1-thumbnail.jpg"
            data-url="./images/image-product-1.jpg"
            data-index="0"
            alt="shoes"
            className={
              mainImage === "./images/image-product-1.jpg" ? "active-thumb" : ""
            }
          />
          <img
            onClick={handleThumbnailClick}
            src="./images/image-product-2-thumbnail.jpg"
            data-url="./images/image-product-2.jpg"
            data-index="1"
            alt="shoes"
            className={
              mainImage === "./images/image-product-2.jpg" ? "active-thumb" : ""
            }
          />
          <img
            onClick={handleThumbnailClick}
            src="./images/image-product-3-thumbnail.jpg"
            data-url="./images/image-product-3.jpg"
            data-index="2"
            alt="shoes"
            className={
              mainImage === "./images/image-product-3.jpg" ? "active-thumb" : ""
            }
          />
          <img
            onClick={handleThumbnailClick}
            src="./images/image-product-4-thumbnail.jpg"
            data-url="./images/image-product-4.jpg"
            data-index="3"
            alt="shoes"
            className={
              mainImage === "./images/image-product-4.jpg" ? "active-thumb" : ""
            }
          />
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={[
          {
            src: "./images/image-product-1.jpg",
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: "./images/image-product-2.jpg",
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: "./images/image-product-3.jpg",
            alt: "image 1",
            width: 500,
            height: "auto",
          },
          {
            src: "./images/image-product-4.jpg",
            alt: "image 1",
            width: 500,
            height: "auto",
          },
        ]}
      />
    </div>
  );
};

export default Gallery;
