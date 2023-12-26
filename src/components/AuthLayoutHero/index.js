import React from "react";
import { Col } from "antd";
import { useLocation } from "react-router";

import "./styles.scss";
import LoginPageImage from "../../assets/images/loginImage.png";
import RegisterPageImage from "../../assets/images/Location.png";
import { ReactComponent as DotSvg } from "../../assets/svgs/dot.svg";

const AuthLayoutHero = () => {
	const location = useLocation();
	const isRegisterPage = location.pathname.includes("register");

	return (
		<Col span={24} md={{ span: 12 }} className="hero-wrap">
			<div style={{ textAlign: "center" }}>
				{isRegisterPage ? (
					<img
						className="logo"
						src={RegisterPageImage}
						alt={LoginPageImage}
					/>
				) : (
					<img
						className="logo"
						src={LoginPageImage}
						alt={RegisterPageImage}
					/>
				)}
			</div>

			<span className="description1">
				{"Products are trusted \naround the World"}
			</span>
			<span className="description2">
				{"With great care, our products are \nloved all over the world"}
			</span>
			<span className="threeDot">
				<DotSvg />
			</span>
		</Col>
	);
};

export default AuthLayoutHero;
