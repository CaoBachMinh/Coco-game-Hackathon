import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { set } from 'lodash';

const auth = getAuth();
const Personal = ({ title }) => {
    const user = auth.currentUser;
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const [displayName, setDisplayName] = useState(null);
    const [email, setEmail] = useState(null);
    const [day, setDay] = useState(null);
    const [age,setAge] = useState(null);
    useEffect(() => {
        if (user !== null) {
            setDisplayName(user.displayName);
            setEmail(user.email);
            setDay(user.metadata.creationTime);
            
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
    }, [user])
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

                    <div className="row g-5 justify-content-center" style={{
                        marginTop: '60px'
                    }}>
                        <div className="col-lg-4">
                            {/* First Card */}
                            <div className="card mb-4">
                                {/* Card Body */}
                                <div className="card-body text-center" style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#1c242f',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 10px 40px 0 rgba(0,0,0,.08)',
                                    backgroundClip: "border-box",
                                    alignItems: 'center'

                                }}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        class="rounded-circle img-fluid" style={{width: '150px', alignItems: 'center',display: 'flex'}}></img>
                                    <h5 className="my-3" style={{color:'white',marginTop:'20px'}}>{displayName}</h5>
                                    
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            {/* Third Card */}
                            <div className="card mb-4" style={{
                                marginBottom: '1.5rem',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                color: '#fff',
                                backgroundColor: '#1c242f',
                                backgroundClip: 'border-box',
                                borderRadius: '0.5rem',
                                boxShadow: '0 10px 40px 0 rgba(0,0,0,.08)',

                            }}>
                                {/* Card Body */}
                                <div className="card-body">
                                    {/* Details */}
                                    <div className="row" style={{
                                        flexWrap: 'wrap',
                                        display: 'flex',
                                        marginTop: '1rem',
                                        marginLeft: 'calc(-0.5*var(1.5rem))',
                                        marginRight: 'calc(-0.5*var(1.5rem))',
                                        boxSizing: 'border-box',

                                    }}>
                                        <div className="col-sm-3" style={{
                                            paddingLeft: '1.5rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem',
                                            textAlign: 'left'
                                        }}>
                                            <p className="mb-0" style={{ marginBottom: '0', color: 'white' }}>Email của bạn:</p>
                                        </div>
                                        <div className="col-sm-9" style={{
                                            paddingLeft: '0.05rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem'
                                        }}>
                                            <p className="mb-0" style={{
                                                marginBottom: '0',
                                                color: 'rgba(255, 255, 255, 0.75)',

                                            }}>{email}</p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="row" style={{
                                        flexWrap: 'wrap',
                                        display: 'flex',
                                        marginTop: '1rem',
                                        marginLeft: 'calc(-0.5*var(1.5rem))',
                                        marginRight: 'calc(-0.5*var(1.5rem))',
                                        boxSizing: 'border-box',

                                    }}>
                                        <div className="col-sm-3" style={{
                                            paddingLeft: '1.5rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            textAlign: 'left'
                                        }}>
                                            <p className="mb-0" style={{ marginBottom: '0', color: 'white' }}>Độ tuổi của bạn:</p>
                                        </div>
                                        <div className="col-sm-9" style={{
                                            paddingLeft: '0.05rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem'
                                        }}>
                                            <p className="mb-0" style={{
                                                marginBottom: '0',
                                                color: 'rgba(255, 255, 255, 0.75)',

                                            }}>{age}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{
                                        flexWrap: 'wrap',
                                        display: 'flex',
                                        marginTop: '1rem',
                                        marginLeft: 'calc(-0.5*var(1.5rem))',
                                        marginRight: 'calc(-0.5*var(1.5rem))',
                                        boxSizing: 'border-box',

                                    }}>
                                        <div className="col-sm-3" style={{
                                            paddingLeft: '1.5rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem',
                                            textAlign: 'left'
                                        }}>
                                            <p className="mb-0" style={{ marginBottom: '0', color: 'white' }}>Ngày tạo tài khoản:</p>
                                        </div>
                                        <div className="col-sm-9" style={{
                                            paddingLeft: '0.05rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem'
                                        }}>
                                            <p className="mb-0" style={{
                                                marginBottom: '0',
                                                color: 'rgba(255, 255, 255, 0.75)',

                                            }}>{day}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{
                                        flexWrap: 'wrap',
                                        display: 'flex',
                                        marginTop: '1rem',
                                        marginLeft: 'calc(-0.5*var(1.5rem))',
                                        marginRight: 'calc(-0.5*var(1.5rem))',
                                        boxSizing: 'border-box',

                                    }}>
                                        <div className="col-sm-3" style={{
                                            paddingLeft: '1.5rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            textAlign: 'left'
                                        }}>
                                            <p className="mb-0" style={{ marginBottom: '0', color: 'white' }}>Thời gian bạn đã chơi:</p>
                                        </div>
                                        <div className="col-sm-9" style={{
                                            paddingLeft: '0.05rem',
                                            marginTop: '0',
                                            maxWidth: '100%',
                                            paddingRight: '1.5rem'
                                        }}>
                                            <p className="mb-0" style={{
                                                marginBottom: '0',
                                                color: 'rgba(255, 255, 255, 0.75)',

                                            }}>{email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* Add other details as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Logout' style={{ marginTop: '20px' }}>
                        <Link href='/'>
                            <button onClick={logout} style={{
                                width: '190px',
                                height: '40px',
                                color: 'white',
                                background: '#FF4546',
                                border: 'none 2px white',
                                borderRadius: '20px',
                            }}>Đăng xuất tài khoản</button>
                        </Link>
                    </div>

                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <motion.li className="shape-2 scene"
                    animate={{
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    }}
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" /></motion.li>
                <motion.li className="shape-3 scene"
                    animate={{
                        x: mouseDirection(40).x,
                        y: mouseDirection(40).y
                    }}
                >
                    <img src="/assets/images/about/shape-15.png" alt="shape" /></motion.li>
                <li className="shape-4">
                    <span></span>
                </li>
                <motion.li className="shape-5 scene"
                    animate={{
                        x: mouseReverse(40).x,
                        y: mouseReverse(40).y
                    }}
                >
                    <img src="/assets/images/about/shape-07.png" alt="shape" />
                </motion.li>
            </ul>
        </div>
    )
}

export default Personal;