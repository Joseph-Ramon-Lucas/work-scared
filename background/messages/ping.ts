import type { PlasmoMessaging } from "@plasmohq/messaging";
import type { PingMessage, pMessage } from "~messages";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	const { body } = req.body;

	console.log("received body:", body);

	res.send({
		message: "pong",
		receivedId: body,
	});
};
export default handler;
