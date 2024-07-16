import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

async function main() {
  const connection = new Connection(clusterApiUrl('devnet'));
  const address = new PublicKey('3j5HG166HRRGEXUPGcJMEJc7L1jeDqbSENFqD3DSnmaR');
  const balanceInLamports = await connection.getBalance(address);
  const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${address} is ${balanceInSol} SOL`
  );

  console.log(`✅ Finished`);
}

main().catch((error) => {
  console.error(error);
});
