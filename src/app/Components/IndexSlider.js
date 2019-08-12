import React, { Fragment } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';


function IndexSlider() {
    return (
        <Fragment>
            <Carousel autoplay>
                <div>
                    <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%" />
                </div>
                <div>
                    <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%" />
                </div>
                <div>
                    <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%" />
                </div>
                <div>
                    <img alt="header" src="https://quillstreak.com/wp-content/uploads/2017/05/Call-of-Duty-4-Modern-Warfare.jpg" height="30%" width="100%" />
                </div>
            </Carousel>

        </Fragment>
    )
}



export default IndexSlider;

