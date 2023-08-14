import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import img1 from "./assets/Screenshot (84).png";
import img2 from "./assets/Screenshot (85).png";
import img3 from "./assets/Screenshot (86).png";
import img4 from "./assets/Screenshot (87).png";
import img5 from "./assets/Screenshot (88).png";
import img6 from "./assets/Screenshot (89).png";
import img7 from "./assets/Screenshot (90).png";
import img8 from "./assets/Screenshot (91).png";
import img9 from "./assets/Screenshot (92).png";
import img10 from "./assets/Screenshot (93).png";
import video from "./assets/MysticShop.mp4"

const App = () => {
  const imagesWithHeadings = [
    { src: img1, alt: "Image 1", heading: "Home Screen" },
    { src: img2, alt: "Image 2", heading: "ProductDetail Screen" },
    { src: img3, alt: "Image 3", heading: "Cart Screen" },
    { src: img4, alt: "Image 4", heading: "Shipping Screen" },
    { src: img5, alt: "Image 5", heading: "PlaceOrder Screen" },
    { src: img6, alt: "Image 6", heading: "OrderSummary Screen" },
    { src: img7, alt: "Image 7", heading: "Profile Screen" },
    { src: img8, alt: "Image 8", heading: "Products Screen" },
    { src: img9, alt: "Image 9", heading: "Users Screen" },
    { src: img10, alt: "Image 10", heading: "Orders Screen" },
    { src: img10, alt: "Image 10", heading: "Orders Screen" },
  ];

  
  const isMobile = window.innerWidth < 768
  return (
    
    <div className="App">
      <div className="section">
        <h1>ScreenShots</h1>
        <div className="content-container">
          <div className="carousel-container">
          {isMobile ? (
            // Render Carousel without thumbs on mobile
            <Carousel showThumbs={false} showStatus={false} dynamicHeight={true}>
              {imagesWithHeadings.map((image, index) => (
                <div key={index} className="carousel-image">
                  <img src={image.src} alt={image.alt} />
                  <p className="image-heading">{image.heading}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <Carousel showThumbs={true} showStatus={false} dynamicHeight={true}>
              {imagesWithHeadings.map((image, index) => (
                <div key={index} className="carousel-image">
                  <img src={image.src} alt={image.alt} />
                  <p className="image-heading">{image.heading}</p>
                </div>
              ))}
            </Carousel>
          )}
          </div>
        </div>
      </div>
      <div className="section">
        <h1>Video Demo</h1>
        <div className="content-container">
          <div className="video-screen">
            <video controls width="100%" height="auto">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
