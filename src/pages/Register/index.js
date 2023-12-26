import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";

import "./styles.scss";
import { ReactComponent as CaallIcon } from "../../assets/svgs/caallLogo.svg";
import { ReactComponent as CaallText } from "../../assets/svgs/caallText.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/googleLogo.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svgs/twitterLogo.svg";

const RegisterPage = () => {
	const navigate = useNavigate();
	return (
		<div className="register-page-form">
			<div className="login-page-logo">
				<CaallIcon />
				<CaallText />
			</div>
			<div className="login-page-form-title">Sign up to CaAll</div>
			<div className="login-page-form-title2">
				Create an account to continue!
			</div>
			<div className="login-page-form-signin-buttons">
				<Button
					type="default"
					htmlType="submit"
					size="large"
					className="login-form-button"
				>
					<span className="login-form-button-name">
						<GoogleIcon />
						<span>Continue with Google</span>
					</span>
				</Button>
				<Button
					type="default"
					htmlType="submit"
					size="large"
					className="login-form-button"
				>
					<span className="login-form-button-name">
						<TwitterIcon />
						<span>Continue with Twitter</span>
					</span>
				</Button>
			</div>
			<Form
				autoComplete="off"
				layout="vertical"
				onFinish={() => {
					navigate("/dashboard");
				}}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{ required: true, message: "Please input your email!" },
						{ type: "email", message: "Please enter valid email!" },
					]}
				>
					<Input size="large" />
				</Form.Item>

				<Form.Item
					label="Your name"
					name="name"
					rules={[
						{ required: true, message: "Please input your name!" },
					]}
				>
					<Input size="large" />
				</Form.Item>

				<Form.Item
					label="Create password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password size="large" />
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						size="large"
						className="register-form-button"
					>
						Register
					</Button>
				</Form.Item>
				<Form.Item className="register-line">
					<span>
						Already have an account? <a href="/">Sign in</a>
					</span>
				</Form.Item>
			</Form>
		</div>
	);
};

export default RegisterPage;
