import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";

import { sendToBackgroundViaRelay } from "@plasmohq/messaging";

console.log("oi");

let loiterTime = 0;

const intervalId = setInterval(async () => {
	console.log("it's been 1 second");
	loiterTime++;
	const OOT = await sendToBack();
	console.log("OOT", OOT[0].OOT);

	if (OOT[0].OOT) {
		console.log("overtimEE lmao");

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
		console.log("CLEAR", intervalId);
		return clearInterval(intervalId);
	}
	console.log("time passed:", loiterTime);
}, 1000);

async function sendToBack() {
	console.log("rrrrrelayy");
	try {
		const resp = await sendToBackgroundViaRelay({
			name: "ping",
		});
		// TODO: sent to background should send seconds active on a specific page
		// figure out how to put body in background function
		// figure out how to increment timer only when on appropriate website

		console.log("my resp :)", resp);
		//ISSUE - the resp isn't ticking up
		return resp;
	} catch (error) {
		console.error("Error sending message to background:", error);
	}
}
// when we're on a tracked tab, send a second
// if we get a response back- time is up- unleash the horror
export const config: PlasmoCSConfig = {
	matches: ["<all_urls>"],
	world: "MAIN",
};
