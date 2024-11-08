import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../../firebase/firebase';
import useFirebase from '../../hooks/use-firebase';
import { Avatar, Menu, MenuItem, Divider, ListItemIcon, Typography, createTheme, ThemeProvider, withTheme} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const [isOpen, setIsOpen] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [isSignOut, setIsSignOut] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const { logout } = useFirebase();
    const router = useRouter();
    const open = Boolean(isMenuOpen);
    const handleMenu = (event) => {
        setIsMenuOpen(event.currentTarget);
    }
    const handleClose = () => {
        setIsMenuOpen(null);
    };
    const handleLogout = () => {
        logout();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        })
    }

    const theme = createTheme({
        typography: {
            h5: {
                fontSize: 17,
                fontWeight: 'bold',
            }
        },
        components: {
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        paddingRight: 35,
                    }
                }
            }
        }
    });
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
                                <MainMenu />
                            </nav>
                        </div>

                        <div className='header-top'>
                            <div className="header-info" >
                                {isSignIn && (
                                    <nav className='mainmenu-nav'>
                                        <button style={{border: "none" , background: "none", translate: -50 }}>
                                            <ListItemIcon
                                                onClick={handleMenu}
                                                aria-controls={open ? 'account-menu' : undefined}
                                                aria-haspopup="true"
                                            >
                                                <Avatar src="/assets/images/rabbit.jpg " sx={{ width: 60, height: 60}}></Avatar>
                                            </ListItemIcon>
                                        </button>

                                        <Menu
                                            anchorEl={isMenuOpen}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                sx: {
                                                    overflow: 'visible',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 25,
                                                        height: 25,
                                                        ml: -0.5,
                                                        mr: 1.5,
                                                    },
                                                    
                                                },
                                            }}
                                            disableScrollLock={true}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link href="/personal">
                                                <ThemeProvider theme={theme}><MenuItem>
                                                    <Avatar />
                                                    <Typography variant='h5' style={{ color: 'black' }}> Tài Khoản</Typography>
                                                </MenuItem></ThemeProvider>

                                            </Link>

                                            <Divider />
                                            <ThemeProvider theme={theme}>
                                                <MenuItem onClick={() => handleLogout()} sx={{ marginTop: 1 }}>
                                                    <ListItemIcon>
                                                        <Logout fontSize='large'></Logout>
                                                    </ListItemIcon>
                                                    <Typography variant='h5' style={{ color: 'black' }}>Đăng xuất</Typography>
                                                </MenuItem>
                                            </ThemeProvider>


                                        </Menu>

                                    </nav>
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
                    </div>
                </div>
            </div>
        </header>

        {/* sidebar start */}
        <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* sidebar end */}
    </>;
}

export default Header;