import React from "react";

import "./styles.scss";
import { ReactComponent as ThreedotIcons } from "../../assets/svgs/threeDot.svg";
import { ReactComponent as StarIcon } from "../../assets/svgs/starIcon.svg";

const KnowledgeCard = ({ item }) => {
	return (
		<div className={`knowledge-card-wrapper-${item.id}`} key={item.id}>
			<div className="knowledge-card-name">{item.title}</div>
			<div className="knowledge-card-subname">
				<span className="knowledge-card-subname-date">
					May 5, 2021 ·{" "}
				</span>
				<span className="knowledge-card-subname-user">
					{item.userName}
				</span>
			</div>
			<div className="knowledge-card-description">{item.description}</div>
			<div className="knowledge-card-tags">
				<div
					className="knowledge-card-tag1"
					style={{ background: item.buttonColor }}
				>
					UI/UX
				</div>
				<div className="knowledge-card-tag2">#articles</div>
				<div className="knowledge-card-buttons">
					<StarIcon />
					<ThreedotIcons />
				</div>
			</div>
		</div>
	);
};

export default KnowledgeCard;
