import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import "./styles.scss";
import Sidebar from "../Sidebar";
import AppHeader from "../Header";

const { Content } = Layout;

const PageLayout = ({ routes }) => {
	return (
		<Layout style={{ minHeight: "100vh" }} className="page-layout">
			<Sidebar />
			<Layout className="page-layout">
				<AppHeader />
				<Content className="content-layout">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default PageLayout;
