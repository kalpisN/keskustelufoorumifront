import React, {Component} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import {API_BASE_URL} from "../constants";
import Login from "../user/login/Login";

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            posts: []
        }
    }

    componentDidMount() {
        fetch(API_BASE_URL +'api/topic/' + this.props.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data, posts: data.posts})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>

                <h1 className="page-header">{this.state.data.name}</h1>
                <NewPost/>

                <div className="big-post-container">
                    {this.state.posts.map(item => (
                        <Post key={item.id} item={item} id={this.state.data.id}/>
                    ))}
                </div>
            </div>

        )

    }

}

export default Topic