import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

import "./styles.scss";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/googleLogo.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svgs/twitterLogo.svg";
import { ReactComponent as CaallIcon } from "../../assets/svgs/caallLogo.svg";
import { ReactComponent as CaallText } from "../../assets/svgs/caallText.svg";
import { useNavigate } from "react-router";

const LoginPage = () => {
	const navigate = useNavigate();

	return (
		<div className="login-page-form">
			<div className="login-page-logo">
				<CaallIcon />
				<CaallText />
			</div>
			<div className="login-page-form-title">Let’s Sign In to CaAll</div>
			<div className="login-page-form-title2">
				Welcome back, you’ve been missed!
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
					label="Password"
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
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a href="#" className="forgot-link">
						Forgot Password ?
					</a>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						size="large"
						className="login-form-button-login"
					>
						Login
					</Button>
				</Form.Item>
				<Form.Item className="register-line">
					<span>
						Don’t have an account? <a href="/register">Sign up</a>
					</span>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginPage;
