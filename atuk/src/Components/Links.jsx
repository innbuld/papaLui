import React from 'react'

export default function Links() {
    return (
        <div className="wrap bg-black bg-opacity-20 py-16">
            <div className="container mx-auto">
                <div className="header">
                    <h1 className='text-4xl font-bold  text-black'>Links</h1>
                </div>

                <div className="flex flex-wrap gap-10 justify-center md:w-1/2 mx-auto font-jumb mt-3">
                    <a href="https://t.me/papaluigui">Telegram</a>
                    <a href="https://x.com/">X</a>
                    
                    <a href="https://www.dexscreener.com/solana/">DexScreener</a>
                    <a href ="https://www.dextools.io/app/en/solana/pair-explorer/" className='p-4 px-7 border border-black font-jumb text-black'>DexTools</a>
                    

                </div>
            </div>
        </div>
    )
}
