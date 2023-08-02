"use client";

import React from 'react';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import useScroll from '@/lib/hooks/useScroll';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import ClientOnly from '@/components/ClientOnly';
import LoginForm from '../auth/LoginForm';
import { FcGoogle } from 'react-icons/fc';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const LandingNavbar = () => {
    const scrolled = useScroll(50);

    return (
    // <div className={`navbar mb-5 scroll ${isScrolled ? 'bg-base-100 shadow-sm' : ''}`}>
    <div
        className={`navbar fixed top-0 w-full flex justify-center 
            ${ scrolled
                ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                : "bg-white/0"
            } z-30 transition-all`}
        >
            <div className="flex-1">
                <Link href="/"><button className="btn btn-link normal-case text-xl no-underline hover:no-underline text-black">calendar fusion</button></Link>
            </div>

            <div className="flex-none gap-2">
                <ClientOnly>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="default">
                                Login
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='items-center justify-center flex'>
                            <DialogHeader className='gap-2'>
                                <DialogTitle>Login to Calendar Fusion</DialogTitle>
                                <LoginForm />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </ClientOnly>

                <ClientOnly>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="secondary">
                                Register
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='items-center justify-center flex'>
                            <DialogHeader className='gap-2'>
                                <DialogTitle>Register for Calendar Fusion</DialogTitle>
                                <LoginForm />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </ClientOnly>
            </div>
        </div>
    )
}

export default LandingNavbar