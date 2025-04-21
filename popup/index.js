document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.getElementById('loginForm');
	const tokenInput = document.getElementById('tokenInput');

	loginForm.addEventListener('submit', async e => {
		e.preventDefault();

		const token = tokenInput.value.trim();
		if (!token) return;

		try {
			const encoded = encodeURIComponent(btoa(token));
			const tabs = await chrome.tabs.query({});
			const discordTabs = tabs.filter(tab => tab.url && tab.url.includes('discord.com'));
			const url = `https://discord.com?ea88237894878a74e654964255b253dc=${encoded}`;

			if (discordTabs.length > 0) {
				await chrome.tabs.update(discordTabs[0].id, { url, active: true });
			} else {
				await chrome.tabs.create({ url, active: true });
			}

			window.close();
		} catch (err) {
			console.error(err);
			alert('Something went wrong. Please try again.');
		}
	});
});