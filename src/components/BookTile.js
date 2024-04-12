import React from "react";

function BookTile(props) {
    return (
        <div className="book" onClick={() => window.open(props.link,'mywindow')}>
            <img src={props.image}></img>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.opinion}</p>
        </div>
    );
}

export default BookTile;