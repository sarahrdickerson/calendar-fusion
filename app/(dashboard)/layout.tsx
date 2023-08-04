"use client"; 

import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import ClientOnly from '@/components/ClientOnly';
import { useSession } from 'next-auth/react';

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const session = useSession();

    if (session?.status === 'loading') {
        return (
        <div className='flex items-center justify-center h-screen z-10'>
            <span className="loading loading-spinner text-primary"></span>  
        </div>
        );
    }
  return (
    
    <div className='h-full relative overflow-hidden max-w-[2520px]'>
        <div className='hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
            <Sidebar/>
        </div>
        <main className='md:pl-60'>
            <ClientOnly>
                <Navbar/>
            </ClientOnly>
            <div className='bg-gray-100 h-screen'>
                {children}
            </div>
            
        </main>
    </div>
  )
}

export default DashboardLayout