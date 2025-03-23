import { createPublicClient, defineChain, http, PublicClient } from "viem";
import { abstract, abstractTestnet } from "viem/chains";
import { useEffect, useState } from "react";
import { eip712WalletActions } from "viem/zksync";
import Greeter from "../artifacts-zk/contracts/Greeter.sol/Greeter.json";

const dockerizedNode = defineChain({
  id: 270,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:3050"] },
  },
});

export const chain = abstract; // Change to abstractTestnet or dockerizedNode if needed

export function usePublicClient(): PublicClient | null {
  const [publicClient, setPublicClient] = useState(null);

  useEffect(() => {
    const client = createPublicClient({
      chain,
      transport: http(),
    }).extend(eip712WalletActions());

    // @ts-ignore
    setPublicClient(client);
  }, []);

  return publicClient;
}

export const abi = [...Greeter.abi] as const;
export const contractAddress = Greeter.address as `0x${string}`;
