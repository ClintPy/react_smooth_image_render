import React, { useState } from "react";

const RenderSmoothImage = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [ isValidSrc, setIsValidSrc ] = useState(!!src)
  return (
    <div className="smooth-image-wrapper">
      {isValidSrc ? (
        <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? "visible" : "hidden"}`}
        onLoad={() => setImageLoaded(true)}
        onError = {() => setIsValidSrc(false)}
      />
      ) : (
          <div className="smooth-no-image">{alt}</div>
      )}
      {isValidSrc && !imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </div>
  );
};

export default RenderSmoothImage;