import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

async function main() {
  const connection = new Connection(clusterApiUrl('devnet'));
  const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
  const balance = await connection.getBalance(address);

  console.log(`The balance of an account at ${address} is ${balance} SOL`);
  console.log(`✅ Finished`);
}

main().catch((error) => {
  console.error(error);
});
