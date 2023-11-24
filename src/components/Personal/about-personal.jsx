import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const Personal = ({ title, subtitle }) => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
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
                            border: 'solid 2px black',
                            borderRadius: '100%',
                        }}>
                            <img alt='photo' style={{
                                width:'300px',
                                height:'300px',
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
                                <li style={{color:'black'}}>Tên: </li>
                                <li style={{color:'black'}}>Email: </li>
                            </ul>
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