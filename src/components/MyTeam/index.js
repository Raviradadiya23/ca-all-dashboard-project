import React from "react";

import "./styles.scss";
import avatar2 from "../../../src/assets/images/Avatar2.png";
import avatar3 from "../../../src/assets/images/Avatar3.png";
import avatar4 from "../../../src/assets/images/Avatar4.png";
import avatar5 from "../../../src/assets/images/Avatar5.png";
import { ReactComponent as ThreedotIcons } from "../../assets/svgs/threeDot.svg";

const MyTeam = ({ item }) => {
	return (
		<div className="dashboard-my-team-wrapper" key={item.name}>
			<div className="dashboard-my-team-card">
				<div>
					<img src={item.image} alt="" />
				</div>
				<div>
					<div className="dashboard-my-team-name">{item.name}</div>
					<span className="dashboard-my-team-members">
						{item.members}
					</span>
				</div>
				<div className="dashboard-my-team-threedot">
					<ThreedotIcons />
				</div>
			</div>
			<div className="dashboard-my-team-avatars">
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

export default MyTeam;
