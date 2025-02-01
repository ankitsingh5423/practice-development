import "./style.css";
import reviews from "./config/constant";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [i, setI] = useState(0); 
  return (
    <>
      <Card
        name={reviews[i].name}
        job={reviews[i].job}
        image={reviews[i].image}
        text={reviews[i].text}
        el={i}
        setI={setI}
        reviews={reviews}
      />
    </>
  );
}

export default App;
