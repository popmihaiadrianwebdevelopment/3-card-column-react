import React from "react";

function Card(props) {
    return (
        <div className="flex">
        <div className="card">
            <img src={props.car} alt="car-img"/>
            <h2>{props.id}</h2>
            <p className="description">
                {props.info}
            </p>
            <button className="btn">
                Learn More
            </button>
        </div>
        </div>
    )

}

export default Card;