import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import Link from 'next/link';

const lists = [
    'Phát hiện sớm tình trạng bệnh ADHD',
    'Chuẩn đoán và tầm soát vấn đề sức khỏe',
    'Nâng cao kiến thức về sức khỏe tinh thần của bản thân và gia đình',
];

const factor = [
    'Trả lời trung thực và chính xác',
    'Các triệu chứng trả lời xuất hiện trong 6 ngày gần nhất',
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
                                <p>Tham vấn y khoa: DSM - Diagnostics Statistical Manual of Mental Disorders (Hiệp hội Chuyên gia Tâm thần Hoa Kỳ)<br/>Chú ý: Trắc nghiệm này chỉ có ý nghĩa tham khảo. Bạn nêu đến thăm khám các bác sĩ chuyên khoa để có được kết quả chính xác</p>
                            </div>

                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                {/* Comment in case of having a solution to send and receive result*/}
                                {/* <Link href="https://quiz-sigma-sand.vercel.app/">
                                    <a className="edu-btn btn-curved" target="_blank">
                                        Bắt đầu ngay <i className="icon-4"></i>
                                    </a>
                                </Link> */}
                                <Link
                                    href="https://psy-edu.net/test/thang-danh-gia-tang-dong-giam-chu-y-adhd-vanderbilt-danh-cho-cha-me/"
                                    className="edu-btn btn-curved"
                                    target="_blank">
                                    Bắt đầu ngay<i className="icon-4"></i>

                                </Link>
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
                
                <div className="col-lg-8" style={{marginTop: '80px', left: '20%' }} >
                    <div className='about-content'>
                        <div className='section-title' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <h3 className='title'>Trả lời các câu hỏi sàng lọc ADHD sau đây, bạn có thể:</h3>
                            <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {lists.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8" style={{marginTop: '50px', left: '20%' }} >
                    <div className='about-content'>
                        <div className='section-title' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <h3 className='title'>Khi thực hiện các câu hỏi, bạn cần <span className='color-secondary'>đảm bảo</span> các yếu tố sau:</h3>
                            <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {factor.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200"></li>
            </ul>
        </div>
    );
}

export default AboutQuiz;