"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
async function main() {
    const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'));
    const address = new web3_js_1.PublicKey('3j5HG166HRRGEXUPGcJMEJc7L1jeDqbSENFqD3DSnmaR');
    const balanceInLamports = await connection.getBalance(address);
    const balanceInSol = balanceInLamports / web3_js_1.LAMPORTS_PER_SOL;
    console.log(`💰 Finished! The balance for the wallet at address ${address} is ${balanceInSol} SOL`);
}
//# sourceMappingURL=check-balance.js.map