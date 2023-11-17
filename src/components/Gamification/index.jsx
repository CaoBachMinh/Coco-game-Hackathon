import React from 'react';
import { Footer, Header, FooterTwo } from '../../layout';
import About_gami from './about-gami';
import WhyChose from './why-chose';
import Search_Gami from './search-gami';
const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <About_gami/>
                <WhyChose/>
                <FooterTwo style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;