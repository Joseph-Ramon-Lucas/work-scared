import type { PlasmoMessaging } from "@plasmohq/messaging";
import { relayMessage } from "@plasmohq/messaging";
import blacklist from "./blacklist";

// {url: time spent}

const timeoutLimit = 10;

// how to handle the ping message
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	console.log("MY REQ AAA", req);
	// update time on timeKeeper
	const site = req.sender.origin;
	console.log("timeeeee", timeoutLimit);
	if (Object.keys(blacklist).includes(site)) {
		blacklist[site]++;
	}
	if (blacklist[site] >= timeoutLimit) {
		res.send([{ OOT: true }, site, blacklist]);
	} else {
		res.send([{ OOT: false }, site, blacklist]);
	}

	res.send([site, blacklist]);
	// send some boolean: time is up?,
};

export default handler;

// TODO: create list of blacklisted websites - dictionary - done
// check the req if specific page is in dictionary
// check if time spent === max time allowed
// send true boolean: time is up
