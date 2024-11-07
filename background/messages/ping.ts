import type { PlasmoMessaging } from "@plasmohq/messaging";
import { relayMessage } from "@plasmohq/messaging";

let timeKeeper = { "https://example.com/": 0, "https://github.com": 0 };
// {url: time spent}

const timeoutLimit = 10;
const OOT = false;

// how to handle the ping message
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	const message = "pelotas de ping";
	console.log("MY REQ AAA", req);
	// update time on timeKeeper
	const site = req.sender.origin;
	if (Object.keys(timeKeeper).includes(site)) {
		timeKeeper[site]++;
	}
	if (timeKeeper[site] >= timeoutLimit) {
		res.send({ OOT: true });
	}

	// webTracker++;

	res.send([site, timeKeeper]);
	// send some boolean: time is up?,
};

export default handler;

// TODO: create list of blacklisted websites - dictionary - done
// check the req if specific page is in dictionary
// check if time spent === max time allowed
// send true boolean: time is up
