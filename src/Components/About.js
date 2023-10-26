import React, { useState } from 'react'

export default function About(props)
{
    return (
        <>
        <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
            <h1 className='my-3' style={{color: props.mode === "dark"?"white":"black"}}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button style={{backgroundColor: props.mode === "dark"?"#0c0c17":"white", color: props.mode === "dark"?"white":"black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Fast, no refresh</strong>
                        </button>
                    </h2>
                    <div  id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode === "dark"?"#0c0c17":"white", color: props.mode === "dark"?"white":"black"}}>
                            <strong>This is a React based web app, so using the React Router, provided by the React, it does not refresh and so it makes the web app faster.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button style={{color: props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"?"#0c0c17":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Multiple manipulator</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"?"#0c0c17":"white"}}>
                            <strong>This web app has so many manipulators for your text input like: Changing the case of letters, Clering the input, Copy the text input, Removing extra spaces and surprisingly speaking too!</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button style={{color: props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"?"#0c0c17":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Always upgrading</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={{color: props.mode === "dark"?"white":"black", backgroundColor: props.mode === "dark"?"#0c0c17":"white"}} className="accordion-body">
                            <strong>Slowly as the time passes. I'll be adding more functionalities to it. So, stay tuned!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         </>
    )
}
