import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        count: 29.3,
        icon: '48',
        text: 'Tạo ra một thế giới nơi tất cả trẻ em mắc ADHD có cơ hội phát huy hết tiềm năng của mình thông qua sức mạnh của gamification.',
        title: 'Tầm nhìn',
        decimal: 1

    },
    {
        color: 'secondary-color',
        count: 32.4,
        icon: '47',
        text: 'Phát triển và cung cấp các giải pháp gamification sáng tạo giúp trẻ em mắc ADHD học tập, phát triển và thành công.',
        title: 'Sứ mệnh',
        decimal: 1
    }
]

const CounterArea = ({ about_p_3 }) => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="counterup-area-1" style={{ marginTop: '40px' }}>
            <div className="container edublink-animated-shape">
                <div className="row g-5 section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title"><span className='color-secondary'>Tầm nhìn</span> và <span className='color-secondary'>sứ mệnh</span></h2>

                    <span className="shape-line"><i className="icon-19"></i></span>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {counter_data.map((c, i) => {
                            const { color, count, text, title, icon } = c;
                            return (
                                <div key={i} className="col-lg-4 col-sm-6" style={{marginRight: '50px'}} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                    <div className="edu-counterup counterup-style-1" style={{ padding:'30 29px'}} >
                                        {/* <div className={`icon ${color}`}>
                                        <i className={`icon-${icon}`}></i>
                                    </div> */}
                                        {/* <h2 className="counter-item count-number">
                                        <span className="odometer">
                                            <Counter number={parseFloat(count)} text={text} decimal={c.decimal} />
                                        </span>
                                    </h2> */}
                                        <h1 className="title" style={{ textTransform: 'none', color: color, fontWeight: 700, fontSize: '32px', marginBottom: '10px' }}>
                                            {title}
                                        </h1>
                                        <p>{text}</p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <ul className="shape-group">
                    <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                        animate={{
                            x: mouseDirection(40).x,
                            y: mouseDirection(40).y
                        }}
                    >
                        <img src="/assets/images/others/shape-27.png" alt="Shape" />
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default CounterArea;