import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";

import { sendToBackgroundViaRelay } from "@plasmohq/messaging";
// import blacklist from "../background/messages/blacklist";

let loiterTime = 0;

const intervalId = setInterval(async () => {
	console.log("it's been 1 second");
	loiterTime++;
	const OOT = await siteTick();
	console.log("OOT", OOT[0].OOT);

	if (OOT[0].OOT) {
		scare();

		return clearInterval(intervalId);
	}
	console.log("time passed:", loiterTime);
}, 1000);

// console.log("time should be up");
// await resetLoiterTimes();
// ISSUE: Loiter reset isn't working

async function resetLoiterTimes() {
	console.log("resetting loiter times");

	try {
		const resp = await sendToBackgroundViaRelay({
			name: "blacklist",
		});
		console.log("loiter sent back", resp);
	} catch (error) {
		console.error("Error sending message to background:", error);
	}
}

async function siteTick() {
	console.log("rrrrrelayy");
	try {
		const resp = await sendToBackgroundViaRelay({
			name: "ping",
		});

		console.log("my resp :)", resp);
		return resp;
	} catch (error) {
		console.error("Error sending message to background:", error);
	}
}

function scare(): void {
	console.log("overtimEE  lmao");

	const bodyChildren = document.body.children;
	for (const child of bodyChildren) {
		child.remove();
	}

	const image = document.createElement("img");
	image.src =
		"https://cdn.inprnt.com/thumbs/06/d6/06d628ffaa17d5a01e53b186a291a5f4.jpg?response-cache-control=max-age=2628000";

	image.style.position = "fixed";
	image.style.left = "0";
	image.style.top = "0";
	image.style.bottom = "0";
	image.style.right = "0";
	image.style.zIndex = "9999";
	image.style.width = "100vw";
	image.style.height = "100vh";
	document.body.appendChild(image);
}

export const config: PlasmoCSConfig = {
	matches: ["<all_urls>"],
	world: "MAIN",
};
