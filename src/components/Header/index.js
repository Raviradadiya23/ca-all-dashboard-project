import React from "react";
import { Layout, Input, Button, Space } from "antd";

import "./styles.scss";
import { ReactComponent as WhitePlusIcon } from "../../assets/svgs/whitePlus.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/SearchIcon.svg";
import { ReactComponent as HeaderIconOne } from "../../assets/svgs/headerIcon1.svg";
import { ReactComponent as HeaderIconTwo } from "../../assets/svgs/headerIcon2.svg";

const { Header } = Layout;

const AppHeader = () => {
	return (
		<Header
			style={{
				paddingLeft: "50px",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
			}}
			className="app-header"
		>
			<div className="app-header-searchbar">
				<Input
					prefix={<SearchIcon style={{ marginRight: "12px" }} />}
					placeholder="Search for..."
					className="app-header-searchbar"
				/>
			</div>
			<div
				style={{ display: "flex", alignItems: "center" }}
				className="app-header-right-space"
			>
				<Button
					className="app-header-right-icon"
					type="primary"
					icon={<HeaderIconOne />}
				/>
				<Button
					className="app-header-right-icon"
					type="primary"
					icon={<HeaderIconTwo />}
				/>
				<Space size="middle">
					<div></div>
					<Button
						type="primary"
						icon={<WhitePlusIcon />}
						className="app-header-right-button"
					>
						Start Project
					</Button>
				</Space>
			</div>
		</Header>
	);
};

export default AppHeader;
