"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { LayoutDashboard, CalendarDays, Users, Settings } from 'lucide-react';

import { cn } from '@/lib/utils';

const montserrat = Montserrat({ weight: "600", subsets: ['latin'] });

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Calendar",
        icon: CalendarDays,
        href: "/calendar",
        color: "text-violet-500"
    },
    {
        label: "Groups",
        icon: Users,
        href: "/groups",
        color: "text-rose-500"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    }
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-black shadow-lg">
        <div className='px-3 py-2 flex-1'>
            <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
                <div className='relative w-6 h-6 mr-4'>
                    <Image 
                        fill
                        alt="Logo"
                        src="/logo.svg"
                    />
                </div>
                <h1 className={cn('text-xl font-bold', montserrat.className)}>
                    Calendar Fusion
                </h1>
            </Link>
            <div className='space-y-1'>
                {routes.map((route, i) => (
                    <Link 
                        href={route.href}
                        key={route.href}
                        className='text-sm group flex p-3 w-full justify-start 
                            font-medium cursor-pointer hover:text-white hover:bg-white/10 
                            rounded-lg transition'
                    >
                        <div className='flex items-center flex-1'>
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar