import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

const axios = require('axios').default;

async function initializeAndLogin() {
	const client = Stitch.initializeDefaultAppClient('littlelimegrass-kczsz');
	let user = await client.auth.loginWithCredential(new AnonymousCredential());
	console.log(user.id);
	console.log(user.auth.activeUserAuthInfo.accessToken)

	const resp = await axios({
		url: 'https://realm.mongodb.com/api/client/v2.0/app/littlelimegrass-kczsz/graphql',
		method: 'post',
		headers: {
			'Authorization': `Bearer ${user.auth.activeUserAuthInfo.accessToken}`
		},
		data: {
			query: `
                query {
                    product {
                    _id
                        imageUrl
                        price
                        productId
                        stock
                    }
                }
            `
		}
	});
	console.log(resp);
}

window.onload = initializeAndLogin;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
