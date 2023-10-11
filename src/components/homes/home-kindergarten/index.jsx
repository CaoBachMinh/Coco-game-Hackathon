import React from 'react';
import { FooterTwo, HeaderThree } from '../../../layout';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import HeroArea from './hero-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderThree/>
                <HeroArea/>
                <AboutArea/>
                <CoursesArea/>
                <FooterTwo />
            </div>
        </div>
    )
}

export default index;