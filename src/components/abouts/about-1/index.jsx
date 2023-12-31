import React from 'react';
import {Header,FooterTwo } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb';
// import Testimonial from '../../homes/home-distant-learning/testimonial';
// import TeamArea from '../../homes/home-online-academy/team-area';
import AboutArea from './about-area';
import BrandArea from './brand-area';
import CounterArea from '../about-3/counter-area';
import WhyChose from './why-chose';
import Choses from '../../homes/home-kindergarten/category-area';
import About_ADHD from './about-ADHD';
import Blog from './ADHD-blog';
const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <AboutArea/>
                <Choses></Choses>
                <WhyChose/>
                <About_ADHD/>
                {/* <Testimonial/> */}
                <Blog/>
                {/* <TeamArea about_p={true} /> */}
                <FooterTwo style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;