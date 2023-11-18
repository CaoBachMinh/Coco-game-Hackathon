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
                    text="Trẻ mắc ADHD thường gặp khó khăn khi cố gắng tập trung trong cuộc sống" />
                    <FeatureBox delay="100" color="color-secondary-style" icon="85" title="Thiếu sự cẩn thận" 
                    text="Trẻ thường gặp khó khăn và có những hành động như thường xuyên quên sách vở, không thể ngồi yên, thường phá vỡ các quy tắc và không theo đuổi mục tiêu đến khi hoàn thành." />
                    <FeatureBox delay="150" color="color-extra02-style" icon="86" title="Thường có hành động nguy hiểm" 
                    text="Trẻ có xu hướng thực hiện các hành động nguy hiểm, gây hại đến sức khỏe bản thân và người khác" />
                    <FeatureBox delay="50" color="color-extra03-style" icon="87" title="Gặp khó khăn khi làm việc một mình" 
                    text="Trẻ gặp khó khăn,bối rối khi thực hiện các công việc mà không có sự hướng dẫn." />
                    <FeatureBox delay="100" color="color-extra04-style" icon="88" title="Khó khăn trong kiểm soát lời nói" 
                    text="Trẻ gặp khó khăn khi kiểm soát cảm xúc, thường có những lời nói bộc phát, thiếu kiểm soát." />
                    <FeatureBox delay="150" color="color-extra05-style" icon="89" title="Dễ quên và khó ghi nhớ" 
                    text="Trẻ gặp khó khăn khi ghi nhớ chữ cái, bài học, con số." />
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;