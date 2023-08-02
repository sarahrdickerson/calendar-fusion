import LandingNavbar from '@/components/landing/LandingNavbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Balancer } from "react-wrap-balancer"


const LandingPage = () => {
  return (
    // <div>
    //     LandingPage (Unprotected)
        // <div>
        //     <Link href='/sign-in'>
        //         <Button>
        //             Login
        //         </Button>
        //     </Link>
        //     <Link href='/sign-up'>
        //         <Button>
        //             Register
        //         </Button>
        //     </Link>
        // </div>
    // </div>
    
    <div>
        <LandingNavbar />
      <div className="mx-auto fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-violet-200"/>

      <div className="grid justify-center items-center z-10 py-32">

        <div className="flex flex-col gap-10 justify-center items-center w-screen px-20 py-10">
          <h1
              className="animate-fade-up bg-gradient-to-br from-slate-800 to-slate-500 bg-clip-text text-transparent text-center font-display text-4xl font-bold tracking-[-0.02em] opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <Balancer>Never miss another connection like this.</Balancer>
          </h1>
          <div className="flex flex-col gap-3">
            <div className="chat chat-end">
              <div className="chat-bubble bg-blue-500 text-slate-100">We all need to hang out soon!</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble bg-purple-500 text-slate-100">Yes!!!!</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble bg-pink-500 text-slate-100">For sure! I miss you guys so much!</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble bg-blue-500 text-slate-100">Yay! When is everyone free?</div>
              <div className="chat-footer opacity-50">
                Seen 1 month ago
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-10 justify-center items-center w-screen px-20 py-20">
          <h1
              className="animate-fade-up bg-gradient-to-br from-slate-800 to-slate-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <Balancer>Join Circles. See everyone's availability all in once place.</Balancer>
            </h1>
          
        </div>

      </div>
    </div>
  )
}

export default LandingPage