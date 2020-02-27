import React, {Component} from 'react';
import {API_BASE_URL} from "../constants";
import Post from "./Post";
import Reply from "./Reply";
import NewReply from "./NewReply";

export default class SinglePost extends Component{
    constructor(props) {
        super(props);
        this.state= {
            topic_id: this.props.match.params.topic_id,
            post_id: this.props.match.params.post_id,
            data: []
        }
    }
    componentDidMount() {
        fetch(API_BASE_URL +'api/post/' + this.state.post_id)
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data, posts: data.posts})
            })
            .catch(console.log)
    }


    render() {

        if(this.state.data.replies === undefined) {
            return (
                <div className="post-container">
                    <div className="post">
                        <div className="flex_content">
                            <div className="img">
                                <a href={this.state.data.imgUrl}><img className="thumbnail" src={this.state.data.imgUrl} /></a>
                                <div className="header-content">
                                    <a href={this.state.data.imgUrl}>{this.state.data.imgUrl} </a>
                                    <a>Anonymous, Title: </a>
                                    <b>{this.state.data.title} {this.state.data.created}</b>
                                    <a>reply</a>
                                </div>
                                <br/>
                                <p className="post-content">{this.state.data.text}</p>
                            </div>
                        </div>
                    </div>
                    <p/>
                    <NewReply post_id={this.state.post_id} topic_id={this.state.topic_id}/>
                </div>
            )
        }
        return (
            <div className="post-container">
                <div className="post">
                    <div className="flex_content">
                        <div className="img">
                            <a href={this.state.data.imgUrl}><img className="thumbnail" src={this.state.data.imgUrl} /></a>
                            <div className="header-content">
                                <a href={this.state.data.imgUrl}>{this.state.data.imgUrl} </a>
                                <a>Anonymous, Title: </a>
                                <b>{this.state.data.title} {this.state.data.created}</b>
                                <a>reply</a>
                            </div>
                            <br/>
                            <p className="post-content">{this.state.data.text}</p>
                        </div>
                    </div>
                </div>
                <p/>
                {this.state.data.replies.map(item => (
                    <Reply key={item.id} item={item}/>
                ))}
                <NewReply post_id={this.state.post_id} topic_id={this.state.topic_id}/>
            </div>
        )}
}