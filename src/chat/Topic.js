import React, {Component} from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import "./Topic.css";
import {API_BASE_URL} from "../constants";
import LoadingIndicator from "../error/LoadingIndicator";

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            posts: [],
            loading: true
        }
    }

    async componentDidMount() {
         await fetch(API_BASE_URL + 'api/topic/' + this.props.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data, posts: data.posts})
            })
            .catch(console.log)
        this.setState(prevState => ({
            loading: !prevState.loading
        }))
    }

    render() {
        let posts = this.state.posts.sort((a, b) => (a.created < b.created) ? 1 : -1);
        if (this.state.loading) {
            return (
                <LoadingIndicator/>)
        }
        return (
            <div>
                <h1 className="page-header">{this.state.data.name}</h1>
                <NewPost id={this.state.data}/>

                <div className="big-post-container">
                    {posts.map(item => (
                        <Post key={item.id} item={item} id={this.state.data.id}/>
                    ))}
                </div>
            </div>

        )
    }

}

export default Topic