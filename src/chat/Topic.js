import React, {Component} from "react";
import Post from "./Post";
import NewPost from "./NewPost";

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            posts: []
        }
    }

    componentDidMount() {
        fetch('/api/topic/' + this.props.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data, posts: data.posts})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="div-container">
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