import React from 'react';HeaderThree
import { FooterTwo, HeaderThree, HeaderTwo, Header} from '../../../layout';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import HeroArea from './hero-area';
import TeamArea from '../../abouts/about-2/team-area';
import BrandArea from '../../abouts/about-1/brand-area';
import Treatment from '../../abouts/about-1/why-chose';
import Choses from '../../abouts/about-3/why-chose';
import About_ADHD from '../../abouts/about-1/about-area';
const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header/>
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