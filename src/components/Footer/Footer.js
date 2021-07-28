import React from 'react';
import "./Footer.css";  

const Footer =()=>{
    return(
        <div className='main-footer'>
            <div className="container">
                <div className="row">
                    {/* column 1*/}
                    <div className="col">
                        <h4>col 1</h4>
                        <ul className="list-unstyled">
                            <li>000-111-222</li>
                            <li>moscow russia</li>
                            <li>123 Street south north</li>
                        </ul>
                    </div>
                    {/* column 2*/}
                    <div className="col">
                        <h4>col 2</h4>
                        <ul className="list-unstyled">
                            <li>000-111-222</li>
                            <li>moscow russia</li>
                            <li>123 Street south north</li>
                        </ul>
                    </div>
                    {/* column 3*/}
                    <div className="col">
                        <h4>col 3</h4>
                        <ul className="list-unstyled">
                            <li>stuff</li>
                            <li>other stuff</li>
                            <li>good stuff</li>
                        </ul>
                    </div>
                    < br/>
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear} THICC MEMES INC | All rights reserved | terms of service | privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer; 