This is a [Next.js](https://nextjs.org) project that uses Abstract Global Wallet.

Tech stack:

- TypeScript
- Next.js
- Hardhat
- Solidity
- TailwindCSS
- viem

It aims to be a quick boilerplate for building a dapp (or a game) on Abstract.
It contains the code for deploying the contract, interacting with it, and a frontend.

## Project Structure

- `/contracts` contains the solidity source code for your contracts. The default one is a simple Greeter contract.
- `/artifacts-zk` After you run `evm-compile`, this folder will be populated with the compiled contract artifacts.
- `/cache-zk` ignore this folder.
- `/components /app` contains the code for the frontend.
- `/scripts` contains the code for the deploy script.

## Getting Started

By default, this project uses Abstract Mainnet since deployment costs are nearly 0 so there is no need to bother with testnets/localnets.
However, you can change the chain in `utils/index.ts` and `hardhat.config.ts` to any other chain that you want to use.

You will need two wallets to run this project:

1. A wallet to deploy the contract. e.g. export private key from MM or Rabby
2. A wallet to interact with the contract. e.g. Abstract Global Wallet (don't need to install anything)

Run `cp .env.example .env` and fill in your deployer wallet's private key in the `.env` file.

Then compile the contracts with

```bash
npm run evm-compile
# or
yarn evm-compile
# or
pnpm evm-compile
# or
bun evm-compile
```

After the compilation is done, you can deploy the contract with

```bash
npm run evm-deploy
# or
yarn evm-deploy
# or
pnpm evm-deploy
# or
bun evm-deploy
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Check out Abstract docs for more information: https://docs.abs.xyz/

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
