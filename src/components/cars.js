import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg"
import luxury from "./images/icon-luxury.svg"

const cars = [
    {
        id:1,
        imgURL:{sedans},
        name:"Sedans",
        info:"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
        id:2,
        imgURL:{suvs},
        name:"SUVs",
        info:"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
        id:3,
        imgURL:{luxury},
        name:"Luxury",
        info:"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
];

export default cars;

