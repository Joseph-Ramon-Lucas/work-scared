import type { PlasmoMessaging } from "@plasmohq/messaging";
import { relayMessage } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	const message = "pelotas de ping";

	res.send({
		message,
	});
};

export default handler;

// async function catchRelay(req) {
// 	relayMessage({ name: "ping" }, async (req) => {

// 	});
// }

// export default catchRelay;
