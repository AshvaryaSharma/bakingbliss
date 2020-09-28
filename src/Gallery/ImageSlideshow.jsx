import React, { useState } from 'react';
import "./slideshow.css";





function ImageSlideshow({ imageDetails }) {
  const [index, setIndex] = useState(0);
  const scrollRight = () => {
    if (index === imageDetails.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const scrollLeft = () => {
    if (index === 0) {
      setIndex(imageDetails.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <div className="imageSlideshow__area">
        <div className="imageSlideshow__arrow">
          <i class="fas fa-chevron-right arrow" onClick={() => scrollRight()}></i>
        </div>

        <div className="imageSlideshow__arrow">
          <i class="fas fa-chevron-left arrow" onClick={() => scrollLeft()}></i>
        </div>

        {imageDetails.map((pic, ind) => {
          if (ind === index) {
            return (
              <div key={pic.label}>
                <div className="imageSlideshow__caption">
                  <p>{pic.label}</p>
                </div>
                <img
                  src={pic.url}
                  className="imageSlideshow__image"
                  alt="image"
                />
              </div>
            );
          } else {
            return (
              <div key={pic.label}>
                {" "}
                <div className="imageSlideshow__caption__noshow">
                  <p>{pic.label}</p>
                </div>
                <img
                  src={pic.url}
                  className="imageSlideshow__image__noshow"
                  alt="image"
                />
              </div>
            );
          }
        })}
      </div>
      <div className="imageSlideshow__snapshot_area">
        {imageDetails.map((pic, ind) => {
          if (ind === index) {
            return (
              <>
                <div className="imageSlideshow__snapshot_container">
                  <img
                    src={pic.url}
                    className="imageSlideshow__snapshot_image"
                    alt="image"
                  />
                </div>
              </>
            );
          } else {
            return (
              <>
                {" "}
                <div className="imageSlideshow__snapshot_container">
                  <img
                    src={pic.url}
                    className="imageSlideshow__snapshot_image__notSelected"
                    alt="image"
                    onClick={() => setIndex(ind)}
                  />
                </div>
              </>
            );
          }
        })}
        
      </div>
    </div>
  );
}

export default ImageSlideshow
