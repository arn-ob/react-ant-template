import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


function Footer() {
    return (
        <Fragment>
            <footer class="container pt-4 my-md-5 pt-md-5">
                <div class="row">
                    
                    <div class="col-12 col-md">
                        <img class="mb-2" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                        <small class="d-block mb-3 text-muted">2017-2019</small>
                    </div>
                    
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li><Link class="text-muted" to="#">Cool stuff</Link></li>
                            <li><Link class="text-muted" to="#">Random feature</Link></li>
                            <li><Link class="text-muted" to="#">Team feature</Link></li>
                            <li><Link class="text-muted" to="#">Stuff for developers</Link></li>
                            <li><Link class="text-muted" to="#">Another one</Link></li>
                            <li><Link class="text-muted" to="#">Last time</Link></li>
                        </ul>
                    </div>
                    
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><Link class="text-muted" to="#">Resource</Link></li>
                            <li><Link class="text-muted" to="#">Resource name</Link></li>
                            <li><Link class="text-muted" to="#">Another resource</Link></li>
                            <li><Link class="text-muted" to="#">Final resource</Link></li>
                        </ul>
                    </div>
                    
                    <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><Link class="text-muted" to="#">Team</Link></li>
                            <li><Link class="text-muted" to="#">Locations</Link></li>
                            <li><Link class="text-muted" to="#">Privacy</Link></li>
                            <li><Link class="text-muted" to="#">Terms</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}


export default Footer;
