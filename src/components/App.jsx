import React from "react";
import Card from "./Card";
import cars from "./cars";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg"
import luxury from "./images/icon-luxury.svg"

function App() {
  return (
    <div className="flex">
      <Card className="sedan"
        car={sedans}
        id={cars[0].name}
        info={cars[0].info}
      />
      <Card className="suvs"
        car={suvs}
        id={cars[1].name}
        info={cars[1].info}
      />
      <Card className="luxury"
        car={luxury}
        id={cars[2].name}
        info={cars[2].info}
      />
    </div>
  );
}

export default App;
