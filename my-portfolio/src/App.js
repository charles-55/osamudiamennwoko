import './App.css';
import { NavBar, Banner, Skills, Projects, Contact, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
		<NavBar />
		<Banner />
		<Skills />
		<Projects />
		<Contact />
		<Footer />
		</div>
	);
}

export default App;
