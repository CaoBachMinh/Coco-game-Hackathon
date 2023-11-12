import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useCartInfo from '../../hooks/use-cart-info';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import MainMenu from './component/main-menu';

const HeaderThree = () => {
    const { sticky } = useSticky();

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="edu-header header-style-4 header-fullwidth no-topbar">
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className='header-top'>
                            <div className="header-top-left">
                                <div className="header-brand ">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                                <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="header-top-right">
                                <ul className="header-info">
                                    <li><Link href="/sign-in"><a>Login</a></Link></li>
                                    <li><Link href="/sign-in"><a>Register</a></Link></li>
                                </ul>
                            </div>
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
        </>
    )
}

export default HeaderThree;