import React from 'react';
import { instructors_data } from '../../../data';
import TeamFive from "../../team-member/team-five";

const TeamArea = () => {
    return (
        <div className="edu-team-area team-area-6 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title color-secondary">COCO TEAM</span>
                    <h2 className="title">Thành viên dự án</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5 d-flex justify-content-center">
                    {instructors_data.slice(0,2).map((instructor) => (
                        <div key={instructor.id} className="col-lg-4 col-md-6" data-sal-delay={instructor.delay} data-sal="slide-up" data-sal-duration="800">
                            <TeamFive instructor={instructor} />
                        </div>
                    ))}
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1">
                    <img src="/assets/images/others/map-shape-3.png" alt="Shape" />
                </li>
                <li className="shape-2">
                    <img src="/assets/images/others/map-shape-3.png" alt="Shape" />
                </li>
                <li className="shape-3">
                    <img src="/assets/images/others/map-shape-3.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default TeamArea;