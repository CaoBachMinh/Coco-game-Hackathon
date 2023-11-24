import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import { getAuth,signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth();
const Personal = ({ title}) => {
    const user = auth.currentUser;
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const [displayName,setDisplayName] = useState(null);
    const [email,setEmail] = useState(null);

    useEffect(() => {
            if (user !== null) {
                setDisplayName(user.displayName);
                setEmail(user.email);
                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
            }
    },[user])

    const logout = () => {
        signOut(auth).then(() => {
            console.log('SignOut successful')
          }).catch((error) => {
            console.log('SignOut Unsuccessful')
            // An error happened.
          });
    };
    return (
        <div className="edu-breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="page-title">
                        <h1 className="title">{title}</h1>
                    </div>
                    <div className='about-user' style={{
                        display:'flex',
                        flexDirection:'row',
                        position:'relative',
                        transform: 'translate(50px,60px)',
                        width:'900px',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>

                        <div className='Photo' style={{
                            width:'300px',
                            height:'300px',
                            borderRadius: '100%',
                        }}>
                            <img src='/assets/images/rabbit.jpg' alt='photo' style={{
                                width:'300px',
                                height:'300px',
                                border: 'solid 2px black',
                                borderRadius: '100%',
                            }}></img>
                        </div>
                        <div className='user-detail' style={{
                            width:'500px',
                            height:'200px',
                            border:'solid 2px black',
                            borderRadius:'20px'
                        }}>
                            <ul style={{
                                listStyleType:'none',
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'flex-start'
                            }}>
                                <li style={{color:'black'}}>Tên: {displayName}</li>
                                <li style={{color:'black'}}>Email: {email}</li>
                            </ul>
                            <div className='Logout'>
                                <Link href='/'>
                                    <button onClick={logout} style={{
                                        width:'100px',
                                        height:'40px',
                                        color:'white',
                                        background:'#FF4546',
                                        border:'none 2px white',
                                        borderRadius:'20px',
                                    }}>Đăng xuất</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                            <a>Home</a>
                            </Link>
                        </li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                    </ul> */}
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <motion.li className="shape-2 scene"
                    animate={ {
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    } }    
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" /></motion.li>
                <motion.li className="shape-3 scene"
                    animate={ {
                        x: mouseDirection(40).x,
                        y: mouseDirection(40).y
                    } }
                >
                    <img src="/assets/images/about/shape-15.png" alt="shape" /></motion.li>
                <li className="shape-4">
                    <span></span>
                </li>
                <motion.li className="shape-5 scene"
                    animate={ {
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    } }
                >
                    <img src="/assets/images/about/shape-07.png" alt="shape" />
                </motion.li>
            </ul>
        </div>
    )
}

export default Personal;