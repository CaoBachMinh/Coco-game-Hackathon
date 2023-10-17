import React from 'react';
import { FooterTwo, HeaderThree } from '../../../layout';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import HeroArea from './hero-area';
import TeamArea from '../../abouts/about-2/team-area';
import BrandArea from '../../abouts/about-1/brand-area';
import Treatment from '../../abouts/about-1/why-chose';
import Choses from '../../abouts/about-3/why-chose';
import About_ADHD from '../../abouts/about-1/about-area';
import Test from '../../landing-demo/hero-area';
const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderThree/>
                <HeroArea/>
                <AboutArea/>
                <About_ADHD/>
                <Treatment/>
                <Choses/>
                <CoursesArea/>
                
                <TeamArea/>
                <FooterTwo />
            </div>
        </div>
    )
}

export default index;