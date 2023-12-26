import React from "react";
import { Col, Row } from "antd";

import "./styles.scss";
import ComponentHeading from "../../components/ComponentHeading";
import KnowledgeCard from "../../components/KnowledgeCard";

const cardList = [
	{
		id: 1,
		title: "20 Most Inspirational Interactive Pr…",
		userName: "Dennis Price",
		description:
			"Attention is one of the most valuable resources of the digital age.\nFor most of human history, access to information was limited.",
		buttonText: "UX/UI",
		buttonColor: "#E6521F",
	},
	{
		id: 2,
		title: "How Hiding Likes on Instagram will …",
		userName: "Rosie Murray",
		description:
			"Social media is many different things to people. While the majority of users use social media to stay connected to friends and famil…",
		buttonText: "Sales",
		buttonColor: "#F5B544",
	},
	{
		id: 3,
		title: "20 Most Inspirational Interactive Pr…",
		userName: "Earl Chavez",
		description:
			"Social media is many different things to people. While the majority of users use social media to stay connected to friends and famil…",
		buttonText: "Dev",
		buttonColor: "#4B9F47",
	},
	{
		id: 4,
		title: "How to Promote a Mobile App With…",
		userName: "Martha Stevens",
		description:
			"Attention is one of the most valuable resources of the digital age. For most of human history, access to information was limited.",
		buttonText: "UX/UI",
		buttonColor: "#E6521F",
	},
];

const KnowledgeComponent = () => {
	return (
		<div>
			<ComponentHeading title="Recent Materials" />
			<div className="knowledge-card-main-wrapper">
				<Row
					gutter={[24, 24]}
					className="knowledge-card-main-container"
				>
					{cardList.map((item) => (
						<Col>
							<KnowledgeCard item={item} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default KnowledgeComponent;
