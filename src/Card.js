import React from "react"

function Card(props) {
    return (
        <div className="card">
        <img className="travel-img" src={props.item.imageUrl} alt="travelImg" />
        <div className="text-div">
        <div className="flex-1">
        <img src="/images/icon (4).png" alt="icon" />
        <h2>{props.item.location}</h2>
        <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h3>{props.item.title}</h3>
        <h4>{props.item.startDate} - {props.item.endDate}</h4>
        <p>{props.item.description}</p>
        </div>
        </div>
    )
}

export default Card;