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
                console.log(data)
                this.setState({data: data, posts: data.posts})
                console.log(data)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <NewPost/>
                <h1>{this.state.data.name}</h1>
                <div>
                    {this.state.posts.map(item => (
                        <Post key={item.id} item={item}/>
                    ))}
                </div>
            </div>

        )

    }

}

export default Topic