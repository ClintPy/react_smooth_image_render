import React, { useState } from "react";
import "./App.css";
import image from "./images/12.jpg";

import RenderSmoothImage from "./component/RenderSmoothImage";

const App = () => {
  const [images, setImages] = useState([
    { src: image, alt: "display Image" },
    { src: image, alt: "display Image" },
    { src: image, alt: "display Image" },
    { src: image, alt: "display Image" },
    { src: image, alt: "display Image" },
    { src: image, alt: "display Image" }
  ]);
  return (
    <div className="container">
      <h1 className="App-header">Smooth React Image Loader</h1>
      <div className="flex-container">
        {images.map((elem, index) => (
          <div className="flex-item" key={index}>
            <RenderSmoothImage src={elem.src} alt={elem.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
