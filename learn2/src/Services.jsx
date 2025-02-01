import { useState } from "react";
import { DATA } from "./config/constant";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [data, setData] = useState(DATA);

  return (
    <main className="container">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Services</h2>
      <div className="services">
        {data.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              heading={service.heading}
              image={service.image}
              description={service.description}
              setData={setData}
              id={service.id}
              data={data}
            />
          );
        })}
      </div>
      <button
        className="readMore-button"
        onClick={() => setData(data.length == 0 ? DATA : [])}
      >
        {data.length == 0 ? "Get All" : "Delte All"}
      </button>
    </main>
  );
};
export default Services;
