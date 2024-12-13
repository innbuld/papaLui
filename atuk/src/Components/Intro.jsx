import React from 'react'

export default function Intro() {
    return (
        <div className="wrap py-16">
            <div className="img-wrap">
                <img src="/pop.jpg" className='w-[100px] mx-auto' alt="PLUG-AI" />
            </div>

            <div className="socials flex gap-5 justify-center items-center font-light uppercase text-lg mt-5">
                <a href="#" className='underline'>Socials:</a>
                <a href="https://t.me/papaluigui">Telegram</a>
                <a href="https://x.com/">X (formely twitter)</a>
              
            </div>

            <div className="wrap mt-16 text-center p-5">
                <p className='uppercase text-xl'>Papa Luigi Mario - $PLUG-AI</p>
                <h1 className='lg:text-8xl text-4xl font-extrabold my-5 mt-3 font-jumb'>MEet $PLUG</h1>
                <span className='italic text-3xl'>$Meet Papa Luigi, the crypto #DOGEFATHER behind $LUIGI, $WALUIGI, $WARIO, and $YOSHI.  </span>
            </div>

            <div className="btn-wrap text-center my-10 ">
            <a href ="https://www.dexscreener.com/solana/" className='p-4 px-7 border border-black font-jumb text-[black]'>DexScreener</a>
           
            </div>
            <div className="btn-wrap text-center my-10 ">
            <a href ="https://t.me/PapaLuigiAi_Bot" className='p-4 px-7 border border-black font-jumb text-[black]'>Bet $PLUG AI Now</a>
           
            </div>
           
            <div className="wrap py-5 my-5">
                <div className="flex flex-wrap gap-5 justify-center">
                    <img src="/pop.jpeg" alt="$PLUG" className='w-[400px]' />
                    <img src="/papa.jpeg" alt="$PLUG" className='w-[400px]' />
                    <img src="/big.jpeg" alt="$PLUG" className='w-[400px]' />
                </div>
            </div>
        </div>
    )
}
