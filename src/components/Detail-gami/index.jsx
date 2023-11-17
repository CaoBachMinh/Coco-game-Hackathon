import React from 'react';
import { Footer, Header, FooterTwo } from '../../layout';
import DetailGami from './about-detail-gami';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <DetailGami/>
                <FooterTwo style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;