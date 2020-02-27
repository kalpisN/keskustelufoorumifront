import React from 'react'
import {useFormik} from 'formik';
import {API_BASE_URL} from "../constants";
import "./NewPost.css";

export default function NewPost() {

    const formik = useFormik({
        initialValues: {
            title: "",
            text: "",
            password: "",
            imgUrl: "",
            created: Date.now()
        },
        onSubmit: values => {
            const formData = new FormData();
            formData.append('file', this.state.selectedFile);
            fetch(API_BASE_URL +'upload', {
                method: 'post',
                body: formData
            }).then(res => {
                if (res.ok) {
                    (res => {
                        return res.json();
                    }).then(jsonResponse => {
                        formik.values.imgUrl = jsonResponse.url
                    })
                }
            })

            // alert(JSON.stringify(values, null, 2))
            formik.resetForm();
            fetch(API_BASE_URL +"api/post/", {
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


    function onFileChangeHandler(e) {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });

    }


    return (
        <div className="form-box"><label className="newpost">New Post</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                placeholder="Enter title..."
                className="form-control"
            />
            <input
                id="text"
                name="text"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.text}
                placeholder="Enter post text..."
                className="form-control"
                style={{width: "40%", height: "150px"}}
            />
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter password..."
                className="form-control"
            />
            <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
            <input className="submit-button" type="submit" value="Submit"/>
        </div>
    )

}