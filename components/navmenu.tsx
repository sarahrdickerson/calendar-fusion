"use client";

import { Menu } from "lucide-react";

const NavMenu = () => {
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div
                onClick={() => console.log('clicked')}
                className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                "
            >
                hi
            </div>
        </div>
    </div>
  )
}

export default NavMenu