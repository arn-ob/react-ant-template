import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Divider } from 'antd';


function Footer() {
    return (
        <Fragment>
            <Divider />
            
            <footer class="container pt-4 my-md-5 pt-md-5 mt-5">
                <div class="row">
                    
                    <div class="col-12 col-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
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
