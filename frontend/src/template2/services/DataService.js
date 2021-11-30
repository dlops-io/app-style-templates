import { BASE_API_URL } from "./Common";

const axios = require('axios');

const DataService = {
    Init: function () {
        // Any application initialization logic comes here
    },
    GetAppleFinanceData: async function () {
        return await axios.get("/data/finance-charts-apple.json");
    },
    GetBTCUSDData: async function () {
        return await axios.get("/data/crypto_3.json");
    },
}

export default DataService;