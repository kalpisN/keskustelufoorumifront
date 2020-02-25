import React from "react";
import Reply from "../chat/Reply";

function Post(props) {

console.log(props)
    const replies = props.item.replies
    return(
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.created}</p>
            <img src={props.item.url}/>
            <p>{props.item.text}</p>
            {replies.map(item => (
                <Reply key={item.id} item={item}/>
            ))}
        </div>
    )

}

export default Post