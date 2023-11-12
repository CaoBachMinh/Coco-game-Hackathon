import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import FooterSocial from './component/footer-social';

const footer_contents = {
    desc: 'Cảm ơn sự hỗ trợ từ Trung tâm Hướng Dương, Trung tâm can thiệp sớm An Phúc, Trung tâm Giải pháp giáo dục NewWings, Trung tâm can thiệp sớm Sơn Ca.',
    teacher: 'Nguyễn Võ Thanh Việt',
    advisor: 'Võ Nguyễn Đình Trí',
    tool:'Bing AI Image Creator, ChatGPT, Visual Studio Code, Github, Vercel'
}

const { desc, advisor, teacher, tool} = footer_contents;

const FooterTwo = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <footer className="edu-footer footer-light footer-for-kitchen footer-style-4">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5 d-flex justify-content-center">
                        <div className="edu-footer-widget">
                            <h4 className="widget-title color-secondary">Lời cảm ơn</h4>
                            <div className="inner">
                                <div className="widget-information">
                                    <ul className="information-list">
                                        <li>{desc}</li>
                                        <li><span>Cố vấn dự án:</span>{advisor}</li>
                                        <li><span>Công cụ:</span>{tool}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="shape-group">
                    <motion.li className="shape-1 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={{
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        }}
                    >
                        <img src="/assets/images/others/shape-01-01.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-2 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={{
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        }}
                    >
                        <img src="/assets/images/others/shape-02-01.png" alt="shape" />
                    </motion.li>
                    <li className="shape-3" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                        <img src="/assets/images/others/shape-03-01.png" alt="shape" />
                    </li>
                    <motion.li className="shape-4 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={{
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        }}
                    >
                        <img src="/assets/images/others/shape-04-01.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-5 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={{
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        }}
                    >
                        <img src="/assets/images/others/shape-05-01.png" alt="shape" />
                    </motion.li>
                </ul>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} Coco Game. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo;