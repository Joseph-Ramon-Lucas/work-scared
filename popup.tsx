import { useState, useEffect } from "react";
import "./style.css";

function IndexPopup() {
	const [currentUrl, setCurrentUrl] = useState<string>("");

	const getCurrentUrl = async () => {
		const [tab] = await chrome.tabs.query({
			active: true,
			currentWindow: true,
		});

		// to simply the URL display
		const splitUrl: string[] = tab.url.split("/");
		if (splitUrl.length > 2) {
			setCurrentUrl(splitUrl[2]);
		} else {
			setCurrentUrl(tab.url);
		}
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
			<div className="bg-stone-800 p-5 rounded-2xl">
				<div className="mb-2">
					<h1 className=" text-nowrap text-stone-100 text-5xl font-bold text-center px-5 py-3">
						Go ahead :)
					</h1>
					<h2 className="text-stone-100 text-center text-2xl">
						Get your work done!
					</h2>
				</div>
				<div className="border-solid border-2 border-red-900 p-3">
					<h3 className="text-stone-100 text-center text-lg text-nowrap">
						Is this site <i>distracting</i> you? <br /> {currentUrl}
					</h3>
					<div className="bg-stone-900 flex justify-center">
						<div className="flex-1 text-center">
							<button className="text-stone-100 text-center" type="button">
								yes
							</button>
						</div>
						<div className="flex-1 text-center">
							<button className=" text-stone-100 text-center" type="button">
								no
							</button>
						</div>
					</div>
					{/* todo: add check mark to mark if the site is distracting, yes/no. Then display an indication */}
					{/* <input
						onChange={(e) => setCurrentUrl(e.target.value)}
						value={currentUrl}
					/> */}
				</div>
				<div className="mt-5">
					<ul className="flex justify-center bg-stone-700 rounded-2xl">
						<li className="flex-1 text-center text-stone-100 font-semibold">
							<button type="button">Settings ⚙️</button>
						</li>
						<li className="flex-1 text-center text-stone-100 font-semibold">
							<button type="button">Distractions 📃 </button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default IndexPopup;
