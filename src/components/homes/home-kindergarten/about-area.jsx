import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6" id='courses-area'>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/about/about-09.png" alt="About Image" />
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1">
                                    <img src="/assets/images/about/shape-11.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img src="/assets/images/about/shape-12.png" alt="Shape" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={ {
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Chào mừng bạn đến với CoCoGame</span>
                                <h2 className="title">Cải thiện <span className='color-secondary'>ADHD</span> với phương pháp Gamification!</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>CoCo Game là dự án mang đến các trò chơi trải nghiệm Gamification cho các bạn nhỏ trong quá trình điều trị ADHD nhằm tạo ra môi trường số có phương pháp cải thiện, đo lường và hỗ trợ phụ huynh, nhà trường và bản thân các em nhỏ.</p>
                            </div>
                            <div className="about-mission" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">
                                    {/* <div className="col-lg-6">
                                        <h5 className="title">Tầm nhìn của dự án</h5>
                                        <p>Tạo ra một thế giới nơi tất cả trẻ em mắc ADHD có cơ hội phát huy hết tiềm năng của mình thông qua sức mạnh của gamification.</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="title">Sứ mệnh của dự án</h5>
                                        <p>Phát triển và cung cấp các giải pháp gamification sáng tạo giúp trẻ em mắc ADHD học tập, phát triển và thành công.</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;