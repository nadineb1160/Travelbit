import React from "react";

const BackButton = () => {

    const backButtonHandler = () => {
        return (
            window.history.back()
        )
    }

    return (

        <button onClick={backButtonHandler} className="text-teal-600 m-4"><i className="fas fa-arrow-left text-teal-600 mr-2"></i>Back</button>
    )
}

export default BackButton;