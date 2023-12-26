import React from "react";
import { Layout, Menu, Button } from "antd";
import { useNavigate } from "react-router";
import {
	MailOutlined,
	AppstoreAddOutlined,
	TeamOutlined,
	LogoutOutlined,
} from "@ant-design/icons";

import "./styles.scss";
import Avatar from "../../assets/images/Avatar.png";
import TwoAvatar from "../../../src/assets/images/twoAvatar.jpg";
import { ReactComponent as CaallIcon } from "../../assets/svgs/caallLogo.svg";
import { ReactComponent as CaallText } from "../../assets/svgs/caallText.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plus.svg";

const { Sider } = Layout;

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<Sider width={240} className="root">
			<div className="side-bar-logo">
				<CaallIcon />
				<CaallText />
			</div>
			<div className="side-bar-user-profile">
				<img className="avatar-image" src={Avatar} />
				<p className="avatar-name">Linh Nguyen</p>
				<p className="avatar-designation">Owner & Founder</p>
			</div>
			<Menu mode="vertical" className="side-bar-menu">
				<Menu.Item
					icon={<MailOutlined />}
					className="side-bar-menu-option"
					onClick={() => navigate("/dashboard")}
				>
					<span className="side-bar-menu-name">Dashboard</span>
				</Menu.Item>
				<Menu.Item
					className="side-bar-menu-option"
					icon={<AppstoreAddOutlined />}
					onClick={() => navigate("knowledge")}
				>
					<span className="side-bar-menu-name">Knowledge</span>
				</Menu.Item>
				<Menu.Item
					className="side-bar-menu-option"
					icon={<TeamOutlined />}
					onClick={() => navigate("education")}
				>
					<span className="side-bar-menu-name">Education</span>
				</Menu.Item>
				<Menu.Item
					className="side-bar-menu-option"
					icon={<LogoutOutlined />}
					onClick={() => navigate("/")}
				>
					<span className="side-bar-menu-name">Logout</span>
				</Menu.Item>
			</Menu>
			<div className="side-bar-footer">
				<div className="side-bar-footer-heading">
					<p> My Teams</p>
				</div>

				<div className="side-bar-footer-company">
					<div>
						<img src={TwoAvatar} alt="" />
					</div>
					<div>
						<div className="side-bar-footer-company-name">
							CaDesign
						</div>
						<span className="side-bar-footer-company-members">
							@cadesign
						</span>
					</div>
				</div>
				<Button
					type="text"
					icon={<PlusIcon />}
					className="side-bar-footer-button"
				>
					Add New Team
				</Button>
			</div>
		</Sider>
	);
};

export default Sidebar;
