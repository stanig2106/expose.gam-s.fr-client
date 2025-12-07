import WebSocket from 'ws';

export default class HostipWebSocket extends WebSocket {
    constructor(address: string | URL, protocols?: string | string[], options?: WebSocket.ClientOptions) {
        super(address instanceof URL ? address : new URL(address), protocols, options);
    }

    sendMessage(object: unknown) {
        const json = JSON.stringify(object);
        this.send(json);
    }
}
