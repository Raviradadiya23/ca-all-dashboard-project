import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import PageLayout from "../components/PageLayout";
import Dashboard from "../pages/DashBoard";
import KnowledgeComponent from "../pages/Knowledge";
import EducationComponent from "../pages/Education";
const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />
			</Route>
			<Route path="/dashboard" element={<PageLayout />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="knowledge" element={<KnowledgeComponent />} />
				<Route path="education" element={<EducationComponent />} />
				<Route
					path="*"
					element={<Navigate to="/dashboard" replace />}
				/>
			</Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</RouterRoutes>
	);
};

export default Routes;
