import React from "react";

import "./styles.scss";
import { ReactComponent as StarIcon } from "../../assets/svgs/starIcon.svg";
import { ReactComponent as TimeIcon } from "../../assets/svgs/time.svg";

const EducationCard = ({ item }) => {
	return (
		<div key={item.id}>
			<div className="education-card-image">
				<img src={item.image} alt="" />
			</div>
			<div
				className="education-card-tag"
				style={{ backgroundColor: item.tagColor }}
			>
				{item.tagName}
			</div>
			<div className="education-card-title">{item.title}</div>

			<div className="education-card-footer">
				<div className="education-card-rating">
					<StarIcon />
					<span className="education-card-footer-text">
						{item.rating}
					</span>
				</div>
				<div className="education-card-rating">
					<TimeIcon />
					<span className="education-card-footer-text">
						{item.duration}
					</span>
				</div>
			</div>
		</div>
	);
};

export default EducationCard;
