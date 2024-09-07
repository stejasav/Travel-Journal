import React from "react";

export default function Card(props){
  return(
    <div className="card">

      <div>
        <img src={props.item.imageUrl} alt="place" className="place-img"/>
      </div>

      <div className="content">

        <div className="location">
          <img src="./images/location.png" className="location-icon"/>
          <p>
            {props.item.location}
          </p>
          <span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>

        <div className="title">
          <h1>{props.item.title}</h1>
        </div>

        <div className="timing">
          <p>
            <strong>
              {props.item.startDate} - {props.item.endDate}
            </strong>
          </p>
        </div>

        <div className="info">
          <p>
            {props.item.description}
          </p>
        </div>

      </div>
    </div>
  )
}