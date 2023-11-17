import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

function FeatureBox({ img, color, title, icon, text }) {
    return (
        <div className="col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div className={`why-choose-box-3 features-box ${color}`}>
                <div className="thumbnail">
                    <img src={`/assets/images/others/why-choose-${img}.jpg`} alt="why choose image" />
                </div>
                <div className="content">
                    <div className="icon">
                        <i className={`icon-${icon}`}></i>
                    </div>
                    <h4 className="title">{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="why-choose-area-4 edu-section-gap">
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Tại sao nên chọn phương pháp Gamification</span>
                    <h2 className="title">Những chuyên gia đã nói gì về <br />  <span className="color-secondary">Gamification</span></h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    <FeatureBox color="color-primary-style" img="12" icon="45" title="Natalie Weder"
                    text="“Các trò chơi điện tử sẽ luôn thay đổi và yêu cầu người chơi phải đáp ứng lại, nếu không kịp thời phản ứng bạn sẽ thua cuộc. Do vậy những đứa trẻ mắc chứng tăng động giảm chú ý sẽ rất thích thú với những trò chơi này, bởi chúng sẽ không phải suy nghĩ sang một vấn đề khác do không có một khoảng trống thời gian nào cả”." />

                    <FeatureBox color="color-secondary-style" img="11" icon="46" title="Báo VnExpress"
                    text="Chơi game là một cách hữu ích giúp trẻ ADHD tập trung năng lượng và giải trí, đặc biệt là trò chơi liên quan đến trí nhớ hoặc câu đố chữ có thể cải thiện trí não, khả năng chú ý của trẻ. Đồng thời trẻ mắc ADHD có xu hướng trở nên “siêu tập trung” khi bị kích thích bởi game trong một khoảng thời gian nhất định." />

                    <FeatureBox color="color-extra08-style" img="13" icon="47" title="Một bài báo của Frontier in Psychiatry"
                    text="Sau khi sử dụng trò chơi điện tử trong việc can thiệp/phục hồi tâm lý thần kinh ADHD, đặc biệt là với các trò chơi trí nhớ, kết quả cho thấy sự cải thiện trong năm khả năng nhận thức: các kỹ năng ghi nhớ làm việc, các kỹ năng chú ý, các chức năng điều hành, các nhiệm vụ lý luận phức tạp, trí nhớ ngắn hạn." />
                </div>
                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" alt="shape" />
                    </li>
                    <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                        animate={ {
                            x: mouseReverse(40).x,
                            y: mouseReverse(40).y
                        } }
                    >
                        <span></span>
                    </motion.li>
                    <li className="shape-3 circle scene sal-animate" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span className="d-block"></span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhyChose;