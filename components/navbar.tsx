import MobileSidebar from "@/components/mobile-sidebar"
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';


const Navbar = () => {
  return (
    <div className="flex items-center p-4 shadow-md">
       {/* <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
        </Button> */}
        
       <div className='flex w-full justify-end'>
        
       </div>
    </div>
  );
}

export default Navbar