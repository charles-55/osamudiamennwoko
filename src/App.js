import { useEffect } from 'react';
import { NavBar, Banner, Skills, Projects, Contact, Footer } from './components';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
    useEffect(() => {
        document.title = 'Osamudiamen Nwoko';
    }, []);
    
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
