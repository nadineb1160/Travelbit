import React from "react";

function Card({ card }) {

    return (
        <div>
            <div className="card" style={{width: "20rem"}}>
                <img src="https://cdn.pixabay.com/photo/2018/08/08/18/49/berlin-cathedral-3592874_1280.jpg" className="card-img-top p-6 pt-8" alt="..." />
                <div className="card-body pt-1">
                    <p className="card-text text-center marker" style={{"fontSize": "3rem"}}>Berlin</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
