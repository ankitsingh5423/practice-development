import React from "react";

function Image({src}) {

  return (
    <img
      src={src}
      alt="Alt Text"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
}

export default Image;
