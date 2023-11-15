import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const About_ADHD = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
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
                                <span className="pre-title pre-textsecondary">Bạn có biết rằng</span>
                                {/* <h2 className="title">Cải thiện ADHD với phương pháp Gamification!</h2>
                                <span className="shape-line"><i className="icon-19"></i></span> */}
                                {/* <p>CoCoGame là dự án mang đến các trò chơi trải nghiệm Gamification cho các bạn nhỏ trong quá trình điều trị ADHD nhằm tạo ra môi trường số có phương pháp cải thiện, đo lường và hỗ trợ phụ huynh, nhà trường và bản thân các em nhỏ. ADHD (Attention-Deficit/Hyperactivity Disorder) là một chứng rối loạn sức khỏe tâm thần phổ biến ở trẻ em và thanh thiếu niên, gây ra các vấn đề về chú ý và hiếu động. ADHD có thể ảnh hưởng đến khả năng học tập, giao tiếp và tương tác xã hội của các em.</p> */}
                            </div>
                            <div className="about-mission" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">
                                    <div className="col-lg-6">
                                        <h1 className="title">67%</h1>
                                        <p>Trẻ em mắc chứng rối loạn tăng động giảm chú ý suy giảm chức năng xã hội ở tuổi trưởng thành</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="title">9%</h1>
                                        <p>Số trẻ em tại Việt Nam đang mắc hội chứng tăng động giảm chú ý</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_ADHD;