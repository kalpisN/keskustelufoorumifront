import React from "react";

function Reply(props) {

    return(
        <div>
            <p>{props.item.created}</p>
            <img src={props.item.url}/>
            <p>{props.item.text}</p>
        </div>

    )

}
export default Reply