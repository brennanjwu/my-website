import React from "react";
import "./AboutTile.scss";

function AboutTile(props) {
    return (
        <div className="tile">
            <img className="image" src={props.image}></img>
            <div>
                <h3>{props.title}</h3>
                <p>{props.subtext}</p>
            </div>
        </div>
    );
}

export default AboutTile;