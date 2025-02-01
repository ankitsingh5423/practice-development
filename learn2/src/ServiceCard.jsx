import { useState } from "react";
import Services from "./Services";

const ServiceCard = ({ heading, image, description, setData, id, data }) => {
  const [readMore, setReadmore] = useState(true);
  let slice = description.substring(0, 150);

  const handelDelete = (id) => {
    const filterData = data.filter((value) => {
      return value.id != id;
    });
    setData(filterData);
  };
  return (
    <div className="service">
      <div className="service-image">
        <img src={image} alt={heading} />
      </div>
      <div className="service-text">
        <h3>{heading}</h3>
        <p>{readMore ? slice : description}...</p>
        <button
          className="readMore-button"
          onClick={() => {
            setReadmore(!readMore);
          }}
        >
          Read {readMore ? "More" : "Less"}
        </button>
        <button
          className="readMore-button"
          onClick={() => {
            handelDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
