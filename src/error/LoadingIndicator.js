import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function LoadingIndicator() {

    return (
        <Loader type="ThreeDots"
                color="#6087c4"
                height={100}
                width={100}
        />
    )
}