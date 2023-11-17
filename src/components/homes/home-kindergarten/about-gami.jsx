import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const About_gami = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Tìm hiểu về</span>
                                <h2 className="title" style={{ fontSize: '40px' }}>Phương pháp Gamification:</h2>
                                {/* <span className="shape-line"><i className="icon-19"></i></span> */}
                                {/* <h5></h5> */}
                            </div>
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">
                                    {/* <div className="col-lg-6">
                                        <h1 className="title">67%</h1>
                                        <p>Trẻ em mắc chứng rối loạn tăng động giảm chú ý suy giảm chức năng xã hội ở tuổi trưởng thành</p>
                                    </div> */}
                                    {/* <div className="col-lg-6">
                                        <h1 className="title">9%</h1>
                                        <p>Số trẻ em tại Việt Nam đang mắc hội chứng tăng động giảm chú ý</p>
                                    </div> */}
                                    <p>Là việc ứng dụng những cơ chế của trò chơi tương tác như bảng xếp hạng, nhiệm vụ, phần thưởng vào các hoạt động như: marketing, giáo dục để thúc đẩy người tham gia hoàn thành các mục tiêu cụ thể. Gamification trong chăm sóc sức khỏe đang dần trở nên phổ biến hơn với những nỗ lực áp dụng các nguyên tắc chơi game để cải thiện các triệu chứng kết quả lâm sàng.</p>
                                </div>
                            </div>
                            <div style={{ justifyContent: 'center', alignItems: 'left' }}>
                                <Link href="/" className="edu-btn btn-curved">
                                    Tìm hiểu thêm<i className="icon-4"></i>

                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/Thiet-ke-chua-co-ten-11.png" alt="About Image" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About_gami;