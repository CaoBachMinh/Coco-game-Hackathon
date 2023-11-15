import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const lists = [
    'Giảm chú ý',
    'Tăng động/Bốc đồng',
    'Tế bào hỗn hợp',
];

const AboutQuiz = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="section-gap-large edu-about-area about-style-7">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Bộ câu hỏi tầm soát</span>
                                <h2 className="title"> <span className="color-secondary">ADHD: </span> tầm soát ngay trước khi quá muộn.</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Tham vấn y khoa: DSM - Diagnostics Statistical Manual of Mental Disorders (Hiệp hội Chuyên gia Tâm thần Hoa Kỳ)</p>
                            </div>
                            {/* <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {lists.map((l,i) => <li key={i}>{l}</li>)}
                            </ul> */}

                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <button className="edu-btn btn-curved">
                                    <a>Bắt đầu ngay <i className="icon-4"></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/ADHD.jpg" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-38.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-37.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-04.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200"></li>
            </ul>
        </div>
    )
}

export default AboutQuiz;