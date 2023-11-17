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
                    <p style={{textAlign:'justify'}}>{text}</p>
                </div>
            </div>
        </div>
    )
}

const DetailGami = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div style={{scale:'0.9'}} className="main-img-1">
                                <img src="/assets/images/experiment.jpg" alt="About Image" />
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
                            <h2 className="title">Thí nghiệm của Iran J.Psychiatry</h2>
                            </div>
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">

                                    <div style={{textAlign: 'justify'}}>
                                        <p>Trong một thí nghiệm của Iran J.Psychiatry, ông đã chia 60 trẻ mắc ADHD thành hai nhóm, nhóm 1 sẽ tiếp nhận điều trị thông qua trò chơi điện tử đã được lập trình để cải thiện khả năng ghi nhớ và xử lí thông tin (trong hai buổi/tuần, mỗi buổi 60 phút), nhóm 2 không tiếp nhận bất cứ sự can thiệp nào. Sau 12 tuần, kết quả của bài kiểm tra  cho thấy sự cải thiện đáng kể trong triệu chứng, kết quả học tập và khả năng tập trung cũng như giảm đáng kể báo cáo của phụ huynh về tình trạng thiếu chú ý của trẻ. Không có thay đổi đáng kể nào được tìm thấy ở trẻ thuộc nhóm 2.</p>
                                    </div>
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
                                <h2 style={{textAlign:'justify'}} className="title">Sáng tạo nghệ thuật được đánh giá rất cao trong khả năng điều trị cho trẻ mắc ADHD</h2>
                                {/* <span className="shape-line"><i className="icon-19"></i></span> */}
                                {/* <h5></h5> */}
                            </div>
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">

                                    <div style={{textAlign:'justify'}} className="">
                                
                                        <p>Trong một thí nghiệm của Iran J.Psychiatry, ông đã chia 60 trẻ mắc ADHD thành hai nhóm, nhóm 1 sẽ tiếp nhận điều trị thông qua trò chơi điện tử đã được lập trình để cải thiện khả năng ghi nhớ và xử lí thông tin (trong hai buổi/tuần, mỗi buổi 60 phút), nhóm 2 không tiếp nhận bất cứ sự can thiệp nào. Sau 12 tuần, kết quả của bài kiểm tra  cho thấy sự cải thiện đáng kể trong triệu chứng, kết quả học tập và khả năng tập trung cũng như giảm đáng kể báo cáo của phụ huynh về tình trạng thiếu chú ý của trẻ. Không có thay đổi đáng kể nào được tìm thấy ở trẻ thuộc nhóm 2.
                                        Liệu pháp nghệ thuật là một công cụ cung cấp cách tiếp cận phi ngôn ngữ để giao tiếp và thể hiện cảm xúc, nâng cao khả năng tương tác với bạn bè. Ngoài ra chúng còn giúp tăng độ tập trung và thời gian tập trung của trẻ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img style={{scale:'0.9'}} src="/assets/images/children-drawing.jpg" alt="About Image" />
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

                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div style={{scale:'0.9'}} className="main-img-1">
                                <img src="/assets/images/brain.jpg" alt="About Image" />
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
                            
                            <div className="about-mission" style={{ marginTop: '30px' }} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">

                                    <div style={{textAlign: 'justify'}}>
                                        <p>
                                        Bộ não được kích thích bằng cách sáng tạo nghệ thuật và sản sinh ra lượng dopamine cao hơn. Điều này đặc biệt quan trọng đối với chứng rối loạn tăng động giảm chú ý (ADHD) vì mức độ dopamine tăng lên sẽ cải thiện khả năng tập trung. Thể hiện sự sáng tạo thông qua nghệ thuật cũng làm tăng serotonin và giảm mức độ căng thẳng. Được sử dụng trong trị liệu, sáng tạo nghệ thuật cũng có thể cải thiện các triệu chứng về chức năng điều hành ở trẻ em mắc chứng ADHD.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>

                

            </div>
        </div>
    );
}

export default DetailGami;
