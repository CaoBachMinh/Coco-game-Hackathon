import React from 'react';HeaderThree
import { FooterTwo, HeaderThree, HeaderTwo, Header} from '../../../layout';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import HeroArea from './hero-area';
import BrandArea from '../../abouts/about-1/brand-area';
import Treatment from '../../abouts/about-1/why-chose';
import Choses from '../../abouts/about-3/why-chose';
import TeamArea from '../../teams/team-2/team-area';
import CounterArea from './counter-area';
import About_ADHD from './about-ADHD';
import About_gami from './about-gami';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <time datetime="2016-10-25" suppressHydrationWarning />
                <Header/>
                <HeroArea/>
                <AboutArea/>
                <About_gami/>
                <Choses/>
                <CoursesArea/>
                <CounterArea/>
                <About_ADHD/>
                {/* <Treatment/> */}
                <TeamArea/>
                <FooterTwo />
            </div>
        </div>
    )
}

export default index;