import React from "react";
import { Col, Row } from "antd";

import "./styles.scss";
import MyTeam from "../../components/MyTeam";
import ComponentHeading from "../../components/ComponentHeading";
import MyProject from "../../components/MyProject";
import TwoAvatar from "../../../src/assets/images/twoAvatar.jpg";

export const teamList = [
	{
		name: "CaDesign",
		members: "30 Members",
		image: TwoAvatar,
		icon: "",
	},
	{
		name: "UI/UX Designer",
		members: "30 Members",
		image: TwoAvatar,
		icon: "",
	},
	{
		name: "Developer",
		members: "30 Members",
		image: TwoAvatar,
		icon: "",
	},
];

export const projectList = [
	{
		title: "CaAll UI Kit",
		subtitle: "CaDesign",
		documentCount: 12,
		progress: "80%",
		days: "5 days left",
	},
	{
		title: "Design Website for ca.design",
		subtitle: "UI/UX Designer",
		documentCount: 6,
		progress: "80%",
		days: "2 days left",
	},
	{
		title: "UX Research for Product",
		subtitle: "UI/UX Designer",
		documentCount: 8,
		progress: "80%",
		days: "7 days left",
	},
];

const Dashboard = () => {
	return (
		<div>
			<div>
				<ComponentHeading title="My Team" />
				<Row gutter={[72, 16]} className="dashboard-my-team-container">
					{teamList.map((item) => (
						<Col>
							<MyTeam item={item} />
						</Col>
					))}
				</Row>
			</div>
			<div style={{ marginTop: "25px" }}>
				<ComponentHeading title="My Project" />
				<Row gutter={[72, 16]} className="dashboard-my-team-container">
					{projectList.map((item) => (
						<Col>
							<MyProject item={item} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Dashboard;
