"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
async function main() {
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'));
    const address = new web3_js_1.PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
    const balance = await connection.getBalance(address);
    const balanceInSol = balance / web3_js_1.LAMPORTS_PER_SOL;
    console.log(`The balance of an account at ${address} is ${balanceInSol} SOL`);
    console.log(`✅ FInished`);
}
//# sourceMappingURL=example.js.map