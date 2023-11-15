import React from 'react';
import { instructors_data } from '../../../data';
import TeamOne from "../../../components/team-member/team-one";
import Link from 'next/link';
const TeamArea = () => {
	return (
		<div className="edu-team-area team-area-1 gap-tb-text">
			<div className="container">
				<div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
					<h2 className="title">Thành viên dự án</h2>
					<span className="shape-line"><i className="icon-19"></i></span>
				</div>
				<div className="row g-5">
					{instructors_data.slice(0, 4).map((instructor) => (
						<div key={instructor.id} className="col-lg-3 col-sm-6 col-12 mb--10" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
							<TeamOne instructor={instructor} />
						</div>
					))}

				</div>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<Link href="/team-1">
						<a className="edu-btn">
							Tìm hiểu thêm <i className="icon-4"></i>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default TeamArea;