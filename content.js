const params = new URLSearchParams(window.location.search);
const encoded = params.get('ea88237894878a74e654964255b253dc');

if (encoded) {
	try {
		const token = atob(decodeURIComponent(encoded));
		localStorage.clear();
		localStorage.setItem('token', JSON.stringify(token));
		window.history.replaceState({}, document.title, '/');
		window.location.replace('https://discord.com/channels/@me');
	} catch (err) {
		console.error(err);
	}
}