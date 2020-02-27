import React, {useState} from 'react'
import {useFormik} from 'formik';
import "./NewPost.css";
import {API_BASE_URL} from "../constants";



export default function NewPost(props) {
    const [image, setImage] = useState()
    const formik = useFormik({
        initialValues: {
            title: "",
            text: "",
            password: "",
            imgUrl: "",
        },
        onSubmit: async values => {
            let formData = new FormData()
            formData.append('image', image)
            values.imgUrl = await fetch(API_BASE_URL + 'upload', {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(res => {
                    return res.url
                })
            console.log(values)
            fetch(API_BASE_URL + "api/topic/" + props.id.id, {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(values),
            })
                .then(response => {
                        console.log(values)
                    }
                )
        }
    });
    return (
        <div>
            <form className="form-box" onSubmit={formik.handleSubmit}>
                <label className="newpost">New Post</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Enter title..."
                    className="form-control"
                />
                <textarea
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder="Enter post text..."
                    className="form-control"
                    style={{height: "180px"}}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password..."
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="form-control"
                /><br/>
                <label>Upload image</label><br/>
                <input className="image-input" id="image" name="image" type="file" onChange={(event) => {
                    setImage(event.target.files[0])
                }}/><br/>
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    )
}