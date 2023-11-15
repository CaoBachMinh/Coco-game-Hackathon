import React from 'react';

function FeatureBox ({delay,icon,color,title,text}) {
    return (
        <div className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
            <div className={`features-box features-style-4 ${color}`}>
                <div className="icon">
                    <i className={`icon-${icon}`}></i>
                </div>
                <div className="content">
                    <h5 className="title">{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

const CategoryArea = () => {
    return (
        <div className="features-area-4">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Triệu chứng</span>
                    <h2 className="title">Các triệu chứng thường gặp ở ADHD</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row">
                    <FeatureBox delay="50" color="color-primary-style" icon="84" title="Thiếu tập trung" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                    <FeatureBox delay="100" color="color-secondary-style" icon="85" title="Thiếu sự cẩn thận" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                    <FeatureBox delay="150" color="color-extra02-style" icon="86" title="Thường có hành động nguy hiểm" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                    <FeatureBox delay="50" color="color-extra03-style" icon="87" title="Gặp khó khăn khi làm việc một mình" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                    <FeatureBox delay="100" color="color-extra04-style" icon="88" title="Khó khăn trong kiểm soát lời nói" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                    <FeatureBox delay="150" color="color-extra05-style" icon="89" title="Dễ quên và khó ghi nhớ" 
                    text="Magna aliquaenim minim veniam nostrud exercit ation ullamco laboris." />
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;