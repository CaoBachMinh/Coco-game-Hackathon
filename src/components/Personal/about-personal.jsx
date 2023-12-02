import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
const auth = getAuth();


const Personal = ({ title }) => {
    const user = auth.currentUser;
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    const [displayName, setDisplayName] = useState(null);
    const [email, setEmail] = useState(null);
    const [day, setDay] = useState(null);
    const [age, setAge] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (user !== null) {
                const d = new Date(user.metadata.creationTime);
                const dayCreate = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
                setDisplayName(user.displayName);
                setEmail(user.email);
                setDay(dayCreate);

                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                try {
                    const userDocRef = doc(db, 'user', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setAge(userData.age);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
        }
        fetchData();
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
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h1 className="title">{title} </h1>
                </div>
                <div className="row g-5 d-flex justify-content-center" style={{
                    marginTop: '60px'
                }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="col-lg-4">
                        {/* First Card */}
                        <div className="why-choose-box features-box">
                            {/* Card Body */}
                            <div className='icon'
                                style={{ alignItems: 'center', display: 'flex' }}
                            >
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                    class="rounded-circle img-fluid" style={{ width: '150px', alignItems: 'center', display: 'flex' }}></img>

                            </div>

                            <div className="content">
                                <h4 className="title">{displayName}</h4>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8">
                        {/* Third Card */}
                        <div className="why-choose-box personal-box">
                            {/* Card Body */}
                            <div className="row">
                                {/* Details */}
                                <p className="row-title" >
                                    Email của bạn:
                                </p>
                                <p className="row-content" >
                                    {email}
                                </p>
                            </div>
                            <hr />

                            <div className="row">
                                <p className="row-title">
                                    Độ tuổi của bạn:
                                </p>
                                <p className="row-content">{age}</p>
                            </div>
                            <hr />
                            <div className="row">
                                {/* Details */}
                                <p className="row-title" >
                                    Ngày tạo tài Khoản:
                                </p>
                                <p className="row-content" >
                                    {day}
                                </p>
                            </div>
                            <hr />

                            <div className="row">
                                {/* Details */}
                                <p className="row-title" >
                                    Thời gian bạn đã chơi:
                                </p>
                                <p className="row-content" >
                                    N/A
                                </p>
                            </div>
                            <hr />
                            {/* Add other details as needed */}
                        </div>
                    </div>
                    
                </div>
                <div className='why-choose-box' style={{position:'relative', marginTop:'50px'}} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="personal-btn"  data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                        <Link href='/'>
                            <button className="edu-btn btn-medium" onClick={logout}>
                                Đăng xuất tài khoản
                            </button>
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