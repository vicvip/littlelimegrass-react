import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';
import Cookies from 'js-cookie';

export const user = async () => {
	const appId = 'littlelimegrass-kczsz';
	let date = new Date();
	const client = Stitch.hasAppClient(appId) ? 
		Stitch.getAppClient(appId) : 
		Stitch.initializeAppClient(appId);
	
	const user = client.auth.isLoggedIn ? client.auth.user : await client.auth.loginWithCredential(new AnonymousCredential());

	date.setTime(date.getTime() + (1740 * 1000)); // 29minutes
	Cookies.set('accessToken', user.auth.activeUserAuthInfo.accessToken, { expires: date })
	return await user.auth.activeUserAuthInfo.accessToken;

	// const user = await client.auth.loginWithCredential(new AnonymousCredential());
	// Cookies.set('accessToken', user.auth.activeUserAuthInfo.accessToken, { expires: date })

	//Cookies.set('accessToken', user.auth.activeUserAuthInfo.accessToken);
	//client.auth.loginWithCredential(new AnonymousCredential()).then(a => a.)
	//Cookies.set('name', 'value', { expires: 7 })
	//return user;
}