import React from "react";
import {motion} from "framer-motion";

function BookTile(props) {
    return (
        <motion.div whileHover={{ scale: 2 }} className="book" onClick={() => window.open(props.link,'mywindow')}>
            <img src={props.image}></img>
            <motion.div inital={{opacity: 0}} animate={{opacity: 1}} className="book-details">
                <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.opinion}</p>
            </motion.div>
        </motion.div>
    );
}

export default BookTile;