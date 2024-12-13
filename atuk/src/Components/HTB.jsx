import React from 'react'

export default function HTB() {
    const step = [
        {
            step: "Connect your wallet",
            description: "Go to Raydium.io and click on the \"Connect Wallet\" button at the top right corner. Select your preferred Solana wallet (e.g., Phantom) and approve the connection."
        },
        {
            step: "Add Nugget Token",
            description: "Once your wallet is connected, navigate to the \"Swap\" tab. In the token selection dropdown, paste the Nugget contract address: nGfzXd7VyMMS86FyqEnrVr6SP7Cmhp4SoMnVbsR8YbN. Add the token to the list. Always confirm the CA."
        },
        {
            step: "Swap SOL for Nugget",
            description: "Enter the amount of SOL you want to swap for Nugget. Review the details and click on the \"Swap\" button. Confirm the transaction in your wallet and wait for it to be processed. Congratulations, you now own Nugget!"
        }
    ]

    return (
        <div className="wrap py-16">
            <div className="container mx-auto">
                <div className="header  lg:text-6xl text-4xl text-center font-bold font-jumb">
                    <h1> How to Buy<span className='text-amber-900 '>$NUGG</span></h1>
                </div>
                <div className="lg:flex  gap-4 items-center">
                    <div className="wrap">
                        <img src="/asset/stop.png" alt="Stopp Nugget!" className='w-[800px]' />
                    </div>
                    <div className="wrap">
                        {step.map((i, index) => (
                            <div className="card my-10">
                                <div className="header mb-2 font-extrabold text-xl font-jumb text-amber-950">
                                    <h1>{i.step}</h1>
                                </div>
                                <div className="span font-light">{i.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
