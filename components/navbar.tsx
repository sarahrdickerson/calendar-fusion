"use client";

import MobileSidebar from "@/components/mobile-sidebar";
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';
import UserNav from '@/components/usernav';


const Navbar = () => {
  return (
    <div className="flex items-center p-4 shadow-md border-b border-gray-200">
        <MobileSidebar />
        
       <div className='flex w-full justify-end'>
            <UserNav />
       </div>
    </div>
  );
}

export default Navbar