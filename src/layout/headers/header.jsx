import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase/firebase';


const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSignIn,setIsSignIn] = useState(true);
    const [isSignOut,setIsSignOut] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              setIsSignIn(true);
              setIsSignOut(false);
              // ...
              console.log('Sign In');
            } else {
                console.log('Sign Out')
                setIsSignIn(false);
                setIsSignOut(true);
              // User is signed out
              // ...
            }
          });
    })

    return <>
        <header className={`edu-header header-style-${header_style ? header_style : '1'} ${disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth'} ${no_top_bar ? 'no-topbar' : ''}`}>

            <div id="edu-sticky-placeholder"></div>
            <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                <div className="container-fluid">
                    <div className="header-navbar">
                        <div className="header-brand">
                            <div className="logo">
                                <Link href={'/'}>

                                    <img className="logo-light" src='/assets/images/logo/logo-dark.png' alt="logo" />
                                    <img className="logo-dark" src='/assets/images/logo/logo-white.png' alt="logo" />

                                </Link>
                            </div>
                        </div>
                        <div className="header-mainnav">
                            <nav className="mainmenu-nav">
                                {/* main menu start */}
                                <MainMenu />
                                {/* main menu end */}
                            </nav>
                        </div>

                        <div className='header-top'>
                            <div className="header-info" >
                                {isSignIn && (
                                    <Link href="/personal">
                                        <img src='/assets/images/rabbit.jpg' style={{
                                            width:'70px',
                                            height:'70px',
                                            borderRadius:'20px',
                                            transform:'translate(-50px)',
                                            border:'solid 3px black'
                                        }}/>

                                    </Link>
                                )}
                                {isSignOut && (
                                    <ul>
                                        <li style={{
                                            transform: 'translate(0px,15px)'
                                        }}><Link href="/sign-in">Đăng nhập</Link></li>
                                        <li style={{
                                            transform: 'translate(0px,15px)'
                                        }}><Link href="/sign-in">Đăng kí</Link></li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* <div className="header-right">
                            
                        </div> */}

                    </div>
                </div>
            </div>

            {/* <!-- Start Search Popup  --> */}
            <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            {/* <!-- End Search Popup  --> */}
        </header>

        {/* sidebar start */}
        <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* sidebar end */}
    </>;
}

export default Header;