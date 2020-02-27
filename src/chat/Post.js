import React from "react";
import Reply from "../chat/Reply";
import "./Post.css"

function Post(props) {
    const replies = props.item.replies
    return (
        <div className="post-container">
            <div className="post">
                <div className="flex_content">
                    <div className="img">
                        <img className="thumbnail" src={props.item.imgUrl}/>
                        <div className="header-content">
                            <a href={props.item.imgUrl}>{props.item.imgUrl} </a>
                            <a>Anonymous, Title: </a>
                            <b>{props.item.title} {props.item.created}</b>
                        </div>
                        <br/>
                        <p className="post-content">{props.item.text}</p>
                    </div>
                </div>
            </div>
            <p></p>
            {replies.map(item => (
                <Reply key={item.id} item={item}/>
            ))}
        </div>

    )

}

export default Post