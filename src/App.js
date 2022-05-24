import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookDetail from "./constants/BookDetail";
import BookList from "./constants/BookList"

function App() {
  return (
		<Router>
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>

				<Routes>
					<Route path="/" exact>
						<BookList />
					</Route>
					<Route path="/detail/:id">
						<BookDetail />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
