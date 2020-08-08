import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import { Home } from './home';
import { Shop } from './shop';
import { Product } from './product'
import { ContactUs } from './contact-us';
import { CssBaseline } from '@material-ui/core';
import { user } from './stitchUser';
import Cookies from 'js-cookie';
import Axios from 'axios';

const theme = createMuiTheme({
	palette: {
		background: {
			paper: "#f7f0eb"
		}
	}
})

function App() {
	useEffect(() => { 
		document.body.style.backgroundColor = theme.palette.background.paper 
	}, [])

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/shop/" exact component={Shop} />
					<Route path="/contact-us/" component={ContactUs} />
					<Route path="/shop/:product/" component={Product} />
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
