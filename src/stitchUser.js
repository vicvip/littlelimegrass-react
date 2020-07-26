import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk';
import Cookies from 'js-cookie';

// async function initializeAndLogin() {
// 	const client = Stitch.initializeAppClient('littlelimegrass-kczsz');
// 	let user = await client.auth.loginWithCredential(new AnonymousCredential());
// 	return user;
// }
// async function initializeAndLogin() {
// 	const client = Stitch.initializeAppClient('littlelimegrass-kczsz');
// 	const user = await client.auth.loginWithCredential(new AnonymousCredential());
// 	return user;
	
// }

export const user = async () => {
	const client = Stitch.initializeAppClient('littlelimegrass-kczsz');
	const user = await client.auth.loginWithCredential(new AnonymousCredential());
	Cookies.set('accessToken', user.auth.activeUserAuthInfo.accessToken);
	//return user;
}