import React, {Component} from "react";
import Post from "./Post";

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
            fetch('/api/topics')
                .then(res => res.json())
                .then((data) => {
                    this.setState({data: data})
                })
                .catch(console.log)
    }

    render() {

        return(
            <div>
                <h1>{this.data.name}</h1>
                {this.state.data.posts.map(item => {
                    <Post key={item.id} item={item}/>
                })}
            </div>

        )

    }

}
export default Topic