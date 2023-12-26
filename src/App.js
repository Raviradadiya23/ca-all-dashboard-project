import "./App.css";
import "./globalStyles/main.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;
