import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";
import type { PingMessage, pMessage } from "~messages";

console.log("oi");

const maxTime = 5;

let currentTime = 0;

const intervalId = setInterval(() => {
	console.log("it's been 1 second");
	currentTime++;
	if (currentTime > maxTime) {
		console.log("overtimEE lmao");

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

		return clearInterval(intervalId);
	}
	console.log("time passed:", currentTime);
}, 1000);

async function sendToBack() {
	try {
		const resp = await sendToBackground({
			name: "ping",
			body: {
				id: 123,
			},
			extensionId: "ccmhihllkmoajiidmpaddloegmgpimbd",
		});
		console.log(resp, "Background sent this");
	} catch (error) {
		console.error("Error sending message to background:", error);
	}
}

sendToBack();

export const config: PlasmoCSConfig = {
	matches: ["<all_urls>"],
	world: "ISOLATED",
};
