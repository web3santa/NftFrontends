import React from 'react'
import { GoldNFTAbi } from "../solidity/GoldNFT"
import { useReadContracts } from 'wagmi'
import { useWriteContract } from 'wagmi'
import { parseEther } from 'viem'


const contractAddress = "0x50D838534c8F23E75345A976e232e0c976a71FFf";

const wagmigotchiContract = {
    address: contractAddress,
    abi: GoldNFTAbi,
} as const

const Body = () => {
    const { writeContract } = useWriteContract()

    const result = useReadContracts({
        contracts: [
            {
                ...wagmigotchiContract,
                functionName: 'name',
            },

        ],
    })

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="./nft.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">GoldNFT!</h2>
                <p>NFTName:  {result?.data?.[0].result?.toString()}</p>
                <p>Try Mint Your NFT!!</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() =>
                            writeContract({
                                ...wagmigotchiContract,
                                functionName: 'mint',
                                value: parseEther('0.005'),
                            })
                        }
                    >
                        Mint
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Body