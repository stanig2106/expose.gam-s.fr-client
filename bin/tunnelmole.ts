#!/usr/bin/env node

sendMessage({
    type: "cli-initialise",
    data: {
        nodeVersion: process.version ? process.version : "Unknown",
        platform: process.platform ? process.platform : "Unknown"
    }
});

// sourceMapSupport makes TypeScript line numbers show up in stack traces, making debugging much easier
import sourceMapSupport from 'source-map-support';
import program from 'commander';
import dispatchCommand from '../src/cli/dispatch-command.js';
import {sendMessage} from '../src/telemetry/send-message.js';
import {initStorage} from '../src/node-persist/storage.js';
import {initialiseClientId} from '../src/identity/client-id-service.js';
import {version} from '../version.js';

sourceMapSupport.install();

// This will make expose appear in the process list
process.title = "expose";

async function run() {
    await initStorage();
    await initialiseClientId();

    program
        .name('expose')
        .usage(
            `

Get a random public URL: "expose <port>"
For example you would run "expose 80" (without the quotes) if your local server is running on port 80.
Your server will then be accessible under a random URL like https://f38fg.e.gam-s.fr which will be shown in the output.
This method is free and is a good way to get started.

Get a public URL that does not change: "expose <port> as <subdomain>"
For example you would run "expose 80 as myapi" (without the quotes) if your server runs on port 80 and you want to make it available with the domain myapi.e.gam-s.fr

URLs are accessible from any unrestricted internet connection in the world. You don't need special firewall rules or network config, all traffic is routed through this client app from our servers to your local server.
`
        )
        .version(version)
        .arguments('[arg0]')
        .description('expose - Share your local server with a Public URL')
        .action(dispatchCommand);

    program.parse(process.argv);
}

(async function () {
    await run();
})();
