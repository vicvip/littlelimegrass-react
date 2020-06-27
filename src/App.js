import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import { Home } from './home';
import { Products } from './products';
import { ContactUs } from './contact-us';

function App() {
	return (
		<Router>
			<div>
				{/* <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
        </nav> */}

				<Route path="/" exact component={Home} />
				<Route path="/products/" component={Products} />
				<Route path="/contact-us/" component={ContactUs} />
			</div>
		</Router>
	);
}

export default App;
