import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MessageScreen } from "./components/MessageScreen";
import { MessageDetailScreen } from "./components/MessageDetailScreen";
import { dummyMessages } from "./messages";

function App() {
	return (
		<main className='max-w-7xl flex items-center justify-center mx-auto p-24 bg-gray-100'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<MessageScreen />}
					/>
					<Route
						path='/chat/:messageId'
						element={<MessageDetailScreen messages={dummyMessages} />}
					/>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
