import React from 'react';
import { Footer, Header, FooterTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import SignInArea from './sign-in-area';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Đăng nhập tài khoản ngay" subtitle="Account" />
                <SignInArea/>
                <FooterTwo style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;