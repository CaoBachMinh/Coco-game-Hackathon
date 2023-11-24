import React from 'react';
import { Footer, Header, FooterTwo } from '../../layout';
import Personal from './about-personal';


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <Personal title="Thông tin tài khoản" subtitle="Account" />
                <FooterTwo style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;