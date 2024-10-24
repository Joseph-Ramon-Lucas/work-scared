import type { PlasmoMessaging } from "@plasmohq/messaging";

export interface PingMessage extends PlasmoMessaging.MessageHandler{
    name: "ping"
    body: {
        id: number
    }
}

export type pMessage = PingMessage