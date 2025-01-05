import type { PlasmoMessaging } from "@plasmohq/messaging";

let blacklist = { "https://example.com": 0, "": 0 };

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	for (let site in blacklist) {
		blacklist[site] = 69;
	}
};

export default blacklist;
