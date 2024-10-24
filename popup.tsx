import { useState, useEffect } from "react";

function IndexPopup() {
	const [currentUrl, setCurrentUrl] = useState<string>("");

	const getCurrentUrl = async () => {
		const [tab] = await chrome.tabs.query({
			active: true,
			currentWindow: true,
		});
		setCurrentUrl(tab.url);
	};

	useEffect(() => {
		getCurrentUrl();
	}, [currentUrl]);

	return (
		<div
			style={{
				padding: 16,
			}}
		>
			<h2>
				Welcome to your v v cool{" "}
				<a href="https://www.plasmo.com" target="_blank" rel="noreferrer">
					Plasmo
				</a>{" "}
				Extension!
			</h2>
			<h3>You are currently at {currentUrl}</h3>
			<input
				onChange={(e) => setCurrentUrl(e.target.value)}
				value={currentUrl}
			/>
			<a href="https://docs.plasmo.com" target="_blank" rel="noreferrer">
				View Docs
			</a>
		</div>
	);
}

export default IndexPopup;
