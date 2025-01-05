import { useState, useEffect } from "react";
import "./style.css";
import Settings from "~Settings";
import Distractions from "~Distractions";

function IndexPopup() {
	const optionSelectedStyle: { true: string; false: string } = {
		true: "bg-stone-900 text-stone-100 flex-1 text-center font-semibold w-full hover:text-bg-stone-50 rounded-2xl",
		false:
			"text-stone-100 flex-1 text-center font-semibold w-full hover:bg-stone-900 rounded-2xl",
	};

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

	const [clickSettings, setClickSettings] = useState<boolean>(true);
	const [clickDistractions, setClickDistractions] = useState<boolean>(false);
	const [clickYes, setClickYes] = useState<boolean>(false);
	const [clickNo, setClickNo] = useState<boolean>(true);

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
				<div className="border-solid border-2 border-red-900 p-3 rounded-md">
					<h3 className="text-stone-100 text-center text-lg text-nowrap m-1">
						Is this site <i>distracting</i> you? <br /> {currentUrl}
					</h3>
					<div className="bg-stone-700 flex justify-center rounded-2xl">
						<div className="flex-1 text-center">
							<button
								type="button"
								className={
									clickYes
										? optionSelectedStyle.true
										: optionSelectedStyle.false
								}
								onClick={() => {
									setClickYes(true);
									setClickNo(false);
								}}
							>
								yes
							</button>
						</div>
						<div className="flex-1 text-center ">
							<button
								type="button"
								className={
									clickNo ? optionSelectedStyle.true : optionSelectedStyle.false
								}
								onClick={() => {
									setClickNo(true);
									setClickYes(false);
								}}
							>
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
						<li
							className={
								clickSettings
									? optionSelectedStyle.true
									: optionSelectedStyle.false
							}
						>
							<button
								className="w-full"
								type="button"
								onClick={() => {
									setClickSettings(true);
									setClickDistractions(false);
								}}
							>
								Settings ⚙️
							</button>
						</li>
						<li
							className={
								clickDistractions
									? optionSelectedStyle.true
									: optionSelectedStyle.false
							}
						>
							<button
								className="w-full"
								type="button"
								onClick={() => {
									setClickDistractions(true);
									setClickSettings(false);
								}}
							>
								Distractions 📃
							</button>
						</li>
					</ul>
				</div>
				{clickSettings ? <Settings /> : <div> </div>}
				{clickDistractions ? <Distractions /> : <div> </div>}
			</div>
		</div>
	);
}

export default IndexPopup;
