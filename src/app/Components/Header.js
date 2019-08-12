import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">JBRA</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link class="p-2 text-dark" to="/about">Home</Link>
                <Link class="p-2 text-dark" to="/about">Events</Link>
                <Link class="p-2 text-dark" to="/about">Our Team</Link>
                <Link class="p-2 text-dark" to="/about">Skill Development</Link>
                <Link class="p-2 text-dark" to="/about">Gallery</Link>
                <Link class="p-2 text-dark" to="/about">Research</Link>
                <Link class="p-2 text-dark" to="/about">Achivement</Link>


            
            </nav>
        </div>
    )
}


export default Header;
