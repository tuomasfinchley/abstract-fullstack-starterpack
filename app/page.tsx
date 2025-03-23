"use client";

import {
  useLoginWithAbstract,
  useAbstractClient,
} from "@abstract-foundation/agw-react";
import { useAccount } from "wagmi";
import { contractAddress, abi, usePublicClient } from "@/utils";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

export default function Home() {
  const [balance, setBalance] = useState<bigint>(BigInt(0));
  const { address, status, isConnected } = useAccount();
  const { data: abstractClient } = useAbstractClient();
  const { login, logout } = useLoginWithAbstract();
  const publicClient = usePublicClient();

  const fetchBalance = async () => {
    if (publicClient && address) {
      const balance = await publicClient.getBalance({
        address: address as `0x${string}`,
      });
      setBalance(balance);
    }
  };

  const interactWithContract = async () => {
    if (!abstractClient) {
      return;
    }

    const tx = await publicClient?.readContract({
      address: contractAddress,
      abi: abi,
      functionName: "greet",
    });

    alert("Response from your contract: " + tx);
  };

  useEffect(() => {
    fetchBalance();
  }, [publicClient, address]);

  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center">
        {!isConnected ? (
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={login}
          >
            Connect wallet
          </button>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p>connected as {address}</p>
            <p>balance: {formatEther(balance)} ETH</p>
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={interactWithContract}
              disabled={!abstractClient || status !== "connected"}
            >
              Interact with smart contract
            </button>

            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
