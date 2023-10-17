import React from 'react';
import { FooterTwo, HeaderThree } from '../../../layout';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import HeroArea from './hero-area';
import TeamArea from '../../abouts/about-2/team-area';
import BrandArea from '../../abouts/about-1/brand-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderThree/>
                <HeroArea/>
                <AboutArea/>
                <CoursesArea/>
                <TeamArea/>
                <FooterTwo />
            </div>
        </div>
    )
}

export default index;