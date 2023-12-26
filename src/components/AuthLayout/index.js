import React from "react";
import { Col, Row } from "antd";
import { Outlet } from "react-router";

import "./styles.scss";
import AuthLayoutHero from "../AuthLayoutHero";

const AuthLayout = () => {
	return (
		<div className="auth-layout">
			<Row className="auth-layout-row">
				<Col span={24} md={{ span: 12 }} className="auth-form-wrap">
					<Outlet />
				</Col>
				<AuthLayoutHero />
			</Row>
		</div>
	);
};

export default AuthLayout;
