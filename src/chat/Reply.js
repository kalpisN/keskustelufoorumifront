import React from "react";
import "./Reply.css"

function Reply(props) {
    return(
        <div className="reply">
                <div className="flex_content">
                    <div className="img-reply">
                        <a href={props.item.imgUrl}><img className="reply-thumbnail" src={props.item.imgUrl}/></a>
                        <div className="header-content">
                            <a href={props.item.imgUrl}>{props.item.imgUrl} </a>
                            <a>Anonymous</a>
                            <b>{props.item.created}</b>
                        </div>
                        <br/>
                        <p className="post-content">{props.item.text}</p>
                    </div>
            </div>
        </div>

    )

}
export default Reply