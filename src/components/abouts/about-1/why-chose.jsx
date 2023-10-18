import React from 'react';
import ChoseBox from './chose-box-item';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="why-choose-area-2 section-gap-large">
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Các phương pháp</span>
                    <h2 className="title">Điều trị <span className="color-secondary">ADHD</span> </h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5 d-flex justify-content-center">
                    <ChoseBox color="color-primary-style" icon="1" title="Liệu pháp hành vi" subtitle="Liệu pháp hành vi là biện pháp can thiệp phổ biến ở Việt Nam, có thể được áp dụng với hầu hết các trẻ mắc chứng rối loạn tăng giảm chú ý." />

                    <ChoseBox color="color-secondary-style" icon="38" title="Điều trị bằng thuốc" subtitle="Điều trị ADHD bằng thuốc thường sử dụng thuốc kích thích hoặc thuốc không kích thích để giảm triệu chứng. Điều này thường đòi hỏi sự theo dõi của bác sĩ và có thể kết hợp với phương pháp tâm lý học." />

                </div>
                <ul className="shape-group">
                    <li className="shape-5" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span></span>
                    </li>
                </ul>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" />
                </motion.li>
                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    } }
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={ {
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    } }
                >
                    <img src="/assets/images/about/shape-40.png" alt="shape" />
                </motion.li>
            </ul>
        </section>
    )
}

export default WhyChose;