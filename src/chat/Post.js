import React from "react";
import Reply from "../chat/Reply";
import "./Post.css"

function Post(props) {
    const replies = props.item.replies
    let replyurl = props.id + "/" + props.item.id
    replies.sort((a, b) => (a.id > b.id) ? 1: -1)
    if (props.item.replies === undefined) {
        return (
            <div className="post-container">
                <div className="post">
                    <div className="flex_content">
                        <div className="img">
                            <a href={props.item.imgUrl}><img className="thumbnail" src={props.item.imgUrl}/></a>
                            <div className="header-content">
                                <a href={props.item.imgUrl}>{props.item.imgUrl} </a>
                                <a>Anonymous, Title: </a>
                                <b>{props.item.title} {props.item.created}</b>
                                <a href={replyurl}> reply</a>
                            </div>
                            <br/>
                            <p className="post-content">{props.item.text}</p>
                        </div>
                    </div>
                </div>
                <b>No replies</b>
            </div>
        )
    }
    if(props.item.replies.length >= 1) {
        return (
            <div className="post-container">
                <div className="post">
                    <div className="flex_content">
                        <div className="img">
                            <a href={props.item.imgUrl}><img className="thumbnail" src={props.item.imgUrl}/></a>
                            <div className="header-content">
                                <a href={props.item.imgUrl}>{props.item.imgUrl} </a>
                                <a>Anonymous, Title: </a>
                                <b>{props.item.title} {props.item.created}</b>
                                <a href={replyurl}> reply</a>
                            </div>
                            <br/>
                            <p className="post-content">{props.item.text}</p>
                        </div>
                    </div>
                </div>
                <p></p>
                    <Reply key={replies[0].id} item={replies[0]}/>
                    <b><a href={replyurl}>Click </a>to view all {replies.length} replies...</b>
            </div>
        )
    }
    return (
        <div className="post-container">
            <div className="post">
                <div className="flex_content">
                    <div className="img">
                        <a href={props.item.imgUrl}><img className="thumbnail" src={props.item.imgUrl}/></a>
                        <div className="header-content">
                            <a href={props.item.imgUrl}>{props.item.imgUrl} </a>
                            <a>Anonymous, Title: </a>
                            <b>{props.item.title} {props.item.created}</b>
                            <a href={replyurl}> reply</a>
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
            <b>No replies</b>
        </div>

    )

}

export default Post