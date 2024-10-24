import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
	const { id } = req.body;

	console.log("received id:", id);

	res.send({
		message: "pong",
		receivedId: id,
	});
};
export default handler;

