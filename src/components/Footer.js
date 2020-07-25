import React from 'react'
import Contactlogo from './contactlogo.png'

function Footer() {
    return (
    <footer>
        <div className=" row justify-content-center">
            <img src={Contactlogo} alt="A Contactlogo"/>
                <div className="info col-md-5 text-center">
                    <strong>Contact Info</strong>
                    <p>(888) 888-8888 <br /> email@imdb.com</p>
                    <hr className="socket"/>
                    &copy; 1990-2020 by IMDb.com, Inc.
                </div>
        </div>
    </footer>
    )
}
export default Footer
