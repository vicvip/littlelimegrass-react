import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import { Home } from './home';
import { Shop } from './shop';
import { ContactUs } from './contact-us';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		background: {
			paper: "#f7f0eb"
		}
	}
})

function App() {
	console.log(theme)
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
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
					<Route path="/shop/" component={Shop} />
					<Route path="/contact-us/" component={ContactUs} />
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
