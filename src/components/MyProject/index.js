import React from "react";

import "./styles.scss";
import avatar2 from "../../../src/assets/images/Avatar2.png";
import avatar3 from "../../../src/assets/images/Avatar3.png";
import avatar4 from "../../../src/assets/images/Avatar4.png";
import avatar5 from "../../../src/assets/images/Avatar5.png";
import { ReactComponent as ThreedotIcons } from "../../assets/svgs/threeDot.svg";
import { ReactComponent as ClipIcon } from "../../assets/svgs/clip.svg";
import { ReactComponent as TimeIcon } from "../../assets/svgs/time.svg";

const MyProject = ({ item }) => {
	return (
		<div className="dashboard-my-project-wrapper" key={item.name}>
			<div className="dashboard-my-project-card">
				<div>
					<div className="dashboard-my-project-name">
						{item.title}
					</div>
					<span className="dashboard-my-project-members">
						{item.subtitle}
					</span>
				</div>
				<div className="dashboard-my-project-threedot">
					<ThreedotIcons />
				</div>
			</div>
			<div className="dashboard-my-project-details">
				<div className="dashboard-my-project-documents">
					<ClipIcon />
					<span className="dashboard-my-project-document-count">
						{item.documentCount}
					</span>
				</div>
				<div className="dashboard-my-project-deadline">
					<div className="dashboard-my-project-timeLeft">
						<TimeIcon />
						<span className="dashboard-my-project-timeLeft-days">
							{item.days}
						</span>
					</div>
				</div>
			</div>
			<div className="dashboard-my-project-progress">
				<div className="dashboard-my-project-progress-bar">
					<div className="dashboard-my-project-progress-bar1" />
				</div>
				<div className="dashboard-my-project-progress-percent">80%</div>
			</div>
			<div className="dashboard-my-project-avatars">
				<img src={avatar4} alt="" />
				<img src={avatar2} alt="" />
				<img src={avatar3} alt="" />
				<img src={avatar5} alt="" />
				<img src={avatar2} alt="" />
				<img src={avatar4} alt="" />
			</div>
		</div>
	);
};

export default MyProject;
