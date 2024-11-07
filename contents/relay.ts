import { relayMessage } from "@plasmohq/messaging";
import type { PlasmoCSConfig } from "plasmo";

// isolated
export const config: PlasmoCSConfig = {
	matches: ["<all_urls>"],
};

relayMessage({
	name: "ping",
	body: {
		site: "https://example.com/",
		time: 69,
	},
});