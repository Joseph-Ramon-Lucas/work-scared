import type { PlasmoMessaging } from "@plasmohq/messaging";

export interface PingMessage extends PlasmoMessaging.Message {
	name: "ping";
	body: {
		id: number;
	};
}

export type pMessage = PingMessage;
