import React from 'react'

import Image from '../constants/BGIS.jpg';

const About = () => {
    return (
        <>
            <div className="card bg-dark text-white" style={{ backgroundColor: "#31CFE2" }}>
                <img className="card-img" src={Image} alt="Card image" style={{ height: "100vh" }} />
                <div className="card-img-overlay" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", background: "rgba(0, 0, 0, 0.4)" }}>
                    <h1 className="card-title">My Code Directory</h1>
                    <p classname="card-text">Your projects are safe with us</p>
                </div>
            </div>
        </>
    )
}

export default About
