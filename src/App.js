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
	// const [response, setResponse] = useState(null);

	// useEffect(() => {
	// 	async function fetchProducts() {
	// 		const accessToken  = await user();
	// 		const resp = await Axios({
	// 			url: 'https://realm.mongodb.com/api/client/v2.0/app/littlelimegrass-kczsz/graphql',
	// 			method: 'post',
	// 			headers: {
	// 				'Authorization': `Bearer ${accessToken}`
	// 			},
	// 			data: {
	// 				query: `
	// 					query {
	// 						products {
	// 							productId
	// 						}
	// 					}
	// 				`
	// 			}
	// 		});
	// 		setResponse(resp);
	// 	}

	// 	fetchProducts();
	// }, [])

	// const allProductId = response ? response.data.data.products.map(item => {
	// 	return item.productId
	// }) : [];

	// 	const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
	// 	items.map(item =>
	//     	<Route exact path=`/product/${item.id}` component={Product} />
	// )

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/shop/" component={Shop} />
					<Route path="/contact-us/" component={ContactUs} />
					<Route path="/test/scrunchie-linen-skyblue/" component={Product} />
					{/* {allProductId.forEach(productId => {
						console.log(productId)
						return <Route path={`/${productId}/`} component={Product} />
					})} */}
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
