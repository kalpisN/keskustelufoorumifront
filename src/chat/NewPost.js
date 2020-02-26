import React from 'react'
import {useFormik} from 'formik';

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
            fetch('/upload', {
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
            fetch("/api/post/", {
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
        <div><label>Title</label>
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
            <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
            <input type="submit" value="Submit"/>
        </div>
    )

}