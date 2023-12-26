import React from "react";
import { Col, Row } from "antd";

import "./styles.scss";
import Image1 from "../../../src/assets/images/Image1.png";
import Image2 from "../../../src/assets/images/Image2.png";
import Image3 from "../../../src/assets/images/Image3.png";
import Image4 from "../../../src/assets/images/Image4.png";
import Image5 from "../../../src/assets/images/Image5.png";
import Image6 from "../../../src/assets/images/Image6.png";
import Image7 from "../../../src/assets/images/Image7.png";
import Image8 from "../../../src/assets/images/Image8.png";
import ComponentHeading from "../../components/ComponentHeading";
import EducationCard from "../../components/EducationCard";
import EducationFilter from "../../components/EducationFilter";

const cardList = [
	{
		id: 1,
		title: "Learning Maxon Cinema 4D - A Beginners Training Course",
		rating: "4.8/5",
		duration: "2h45m",
		tagName: "Design",
		tagColor: "#E6521F",
		image: Image1,
	},
	{
		id: 2,
		title: "Introduction to Community Management",
		rating: "4.1/5",
		duration: "1h5m",
		tagName: "Marketing & Business",
		tagColor: "#F5B544",
		image: Image2,
	},
	{
		id: 3,
		title: "Content Creation and Editing for Instagram Stories",
		rating: "3.0/5",
		duration: "1h12m",
		tagName: "Photography & Video",
		tagColor: "#4B9F47",
		image: Image3,
	},

	{
		id: 4,
		title: "Architectural Sketching with Watercolor and Ink",
		rating: "4.0/5",
		duration: "2h",
		tagName: "Illustration",
		tagColor: "#091B3D",
		image: Image4,
	},
	{
		id: 5,
		title: "Learning Maxon Cinema 4D - A Beginners Training Course",
		rating: "4.8/5",
		duration: "2h45m",
		tagName: "Design",
		tagColor: "#E6521F",
		image: Image5,
	},
	{
		id: 6,
		title: "Introduction to Community Management",
		rating: "4.1/5",
		duration: "1h5m",
		tagName: "Marketing & Business",
		tagColor: "#F5B544",
		image: Image6,
	},
	{
		id: 7,
		title: "Content Creation and Editing for Instagram Stories",
		rating: "3.0/5",
		duration: "1h12m",
		tagName: "Photography & Video",
		tagColor: "#4B9F47",
		image: Image7,
	},

	{
		id: 8,
		title: "Architectural Sketching with Watercolor and Ink",
		rating: "4.0/5",
		duration: "2h",
		tagName: "Illustration",
		tagColor: "#091B3D",
		image: Image8,
	},
];

const EducationComponent = () => {
	return (
		<div>
			<ComponentHeading title="Discover" />
			<EducationFilter />
			<div className="education-card-main-wrapper">
				<Row
					gutter={[24, 24]}
					className="education-card-main-container"
				>
					{cardList.map((item) => (
						<Col>
							<EducationCard item={item} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default EducationComponent;
