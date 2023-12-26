import React from "react";
import { Row, Col, Space } from "antd";

import "./styles.scss";
import { ReactComponent as BlueThreedotIcons } from "../../assets/svgs/blueThreeDot.svg";

const ComponentHeading = ({ title }) => {
	return (
		<Row
			align="middle"
			justify="space-between"
			className="component-heading-wrapper"
		>
			<Col className="component-heading-title">{title}</Col>
			<Col>
				<Space className="component-heading-icon">
					<BlueThreedotIcons />
				</Space>
			</Col>
		</Row>
	);
};

export default ComponentHeading;
