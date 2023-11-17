import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const About_ADHD = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Những nghiên cứu về:</span>
                    <h2 className="title" style={{ fontSize: '40px' }}>Phương pháp Gamification:</h2>
                    {/* <span className="shape-line"><i className="icon-19"></i></span> */}
                    {/* <h5></h5> */}
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/49539_199222fb7366fa08617a0936119d2164_blog.jpg" alt="About Image" />
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1">
                                    <img src="/assets/images/about/shape-11.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img src="/assets/images/about/shape-12.png" alt="Shape" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={{
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Bạn có biết rằng</span>
                                <h2 className="title">Trong số <span className='color-secondary'>24.776.733</span> trẻ em ở Việt Nam, thì có đến:</h2>
                                {/* <span className="shape-line"><i className="icon-19"></i></span> */}
                                {/* <h5></h5> */}
                            </div>
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">

                                    <div className="col-lg-6">
                                        <h1 className="title">9%</h1>
                                        <p>Số trẻ em tại Việt Nam đang mắc hội chứng tăng động giảm chú ý</p>
                                    </div>

                                    <div className="col-lg-6">
                                        <h1 className="title">67%</h1>
                                        <p>Trẻ em mắc chứng rối loạn tăng động giảm chú ý suy giảm chức năng xã hội ở tuổi trưởng thành</p>
                                    </div>
                                </div>
                                <div style={{ justifyContent: 'center', alignItems: 'left' }}>
                                    <Link href="/about-1" className="edu-btn">
                                        Tìm hiểu thêm ADHD<i className="icon-4"></i>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-5 align-items-center" style={{ marginTop: '90px' }}>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {/* <span className="pre-title pre-textsecondary">Bạn có biết rằng</span> */}
                                <h2 className="title">Hiện nay, nhiều trẻ mắc ADHD vẫn đang bị đánh giá thông qua cảm quan</h2>
                                {/* <span className="shape-line"><i className="icon-19"></i></span> */}
                                {/* <h5></h5> */}
                            </div>
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">

                                    <div className="col-lg-6">
                                        <h1 className="title">9%</h1>
                                        <p>Số trẻ em tại Việt Nam đang mắc hội chứng tăng động giảm chú ý</p>
                                    </div>

                                    <div className="col-lg-6">
                                        <h1 className="title">67%</h1>
                                        <p>Trẻ em mắc chứng rối loạn tăng động giảm chú ý suy giảm chức năng xã hội ở tuổi trưởng thành</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/ADHD-parent-removebg-preview.png" alt="About Image" />
                            </div>

                            <ul className="shape-group">
                                <li className="shape-1">
                                    <img src="/assets/images/about/shape-11.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img src="/assets/images/about/shape-12.png" alt="Shape" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={{
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default About_ADHD;