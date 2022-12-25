import React from 'react'

export default function About() {


    return (
        <>
        <div className='container-fluid'  id='adout' >
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            #<strong>About this page</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This page is here to help you with your text, like if you have to convert your lowercase text to uppercase or capitalization. This page will also tell you how many words and characters are in your text, as well as how long it will take you to read it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            #<strong>How to used </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Convert to Uppercase</div>

                                        This button is used to convert your text into uppercase.

                                    </div>

                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Convert into Lowercase</div>
                                        This button is used to convert your text into lowercase.
                                    </div>

                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Convert into capitalizecase</div>
                                        This button is used to convert your text into capitalizecase.
                                    </div>

                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Clear textarea</div>
                                        This button is used to clear all text areas for the next text.
                                    </div>

                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Copy text</div>
                                        This button is used to copy your final text.
                                    </div>

                                </li>
                            </ol>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
        <hr />
        </>
    )
}
