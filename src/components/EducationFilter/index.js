import React from "react";

import "./styles.scss";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { ReactComponent as FilterIcon } from "../../assets/svgs/filter.svg";
import { ReactComponent as ApplicationIcon } from "../../assets/svgs/fourDot.svg";

const EducationFilter = () => {
	return (
		<div className="education-filter-wrapper">
			<div className="education-filter-select">
				<span className="education-filter-title">Sort by:</span>
				<span className="education-filter-option">Popular</span>
				<div>
					<DownArrow />
				</div>
			</div>
			<div className="education-filter-select">
				<span className="education-filter-option">Courses</span>
				<div>
					<DownArrow />
				</div>
			</div>
			<div className="education-filter-select">
				<span className="education-filter-title">Category:</span>
				<span className="education-filter-option">All Category</span>
				<div>
					<DownArrow />
				</div>
			</div>
			<div className="education-filter-right-side">
				<div className="education-filter-select">
					<FilterIcon />
					<span className="education-filter-option">Filter</span>
				</div>
				<div className="education-filter-application-icon">
					<ApplicationIcon />
				</div>
			</div>
		</div>
	);
};

export default EducationFilter;
