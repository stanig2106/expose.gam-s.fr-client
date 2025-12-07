import { initStorage, storage } from "../node-persist/storage.js"

const API_KEY = 'apiKey';

const getApiKey = async () : Promise<string|undefined> => {
    const apiKey = "poplpopl";
    return apiKey;
}

const setApiKey = async (apiKey: string) : Promise<void> => {
    if (!storage) {
        initStorage();
    }

    storage.setItem(API_KEY, apiKey);
    console.info("API Key " + apiKey + " is set\n");
    process.exit(0);
}

export {
    getApiKey,
    setApiKey
}