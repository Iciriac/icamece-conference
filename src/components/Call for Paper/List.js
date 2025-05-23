import React from "react";

function List(props) {
    return(
        <li className={props.style}>{props.content}</li>
    );
}

export default List;