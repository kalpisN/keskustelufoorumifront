import React, {useState} from 'react'
import {useFormik} from 'formik';
import {API_BASE_URL} from "../constants";
import "./NewReply.css"

export default function NewReply(props) {
    const [image, setImage] = useState()
    const formik = useFormik({
        initialValues: {
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

            formik.resetForm()
            fetch(API_BASE_URL + "api/topic/reply/" + props.post_id, {
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(values),
            })
                .then(response => {
                        console.log(values)
                    }
                )
        document.location.reload()
        }
    });


    return (
        <div>
            <form  className="form-box" onSubmit={formik.handleSubmit}>
                <label className="newpost">Reply</label>
                <textarea
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder="Enter reply text..."
                    className="form-control"
                    style={{height: "180px"}}
                />
                <label>Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="form-control"
                />
                <label>Upload image</label>
                <input id="image" name="image" type="file" className="image-input" onChange={(event) => {
                    setImage(event.target.files[0])
                }}/>
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </div>
    )

}