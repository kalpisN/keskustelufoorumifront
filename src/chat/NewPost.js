import React, {useState} from 'react'
import {useFormik} from 'formik';
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
                // headers: {
                //     'content-type': 'multipart/form-data;boundary=asdasd'
                // },
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
            <form onSubmit={formik.handleSubmit} style={{width: '50%', display: 'inline-block'}}>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Enter title..."
                    className="form-control"
                />
                <label>Text</label>
                <input
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder="Enter post text..."
                    className="form-control"
                    style={{width: "500px", height: "300px"}}
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
                <input id="image" name="image" type="file" onChange={(event) => {
                    setImage(event.target.files[0])
                }}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}