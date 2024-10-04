import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div className="fixed z-40 mt-0 flex w-full justify-between bg-black px-[72px] py-[36px] max-md:pl-5">
      <h1 className="ml-10 text-2xl font-bold text-white">WebTech</h1>
      <ul className="justify-center gap-x-10 text-[#FFFFFF] max-md:hidden lg:flex">
        <li className="uppercase">
          <a href="/)" className="transition-all hover:text-blue-600">
            Company
          </a>
        </li>
        <li className="uppercase">
          <a href="/)" className="transition-all hover:text-blue-600">
            Services
          </a>
        </li>
        <li className="uppercase">
          <a href="/)" className="transition-all hover:text-blue-600">
            Portfolio
          </a>
        </li>
        <li className="uppercase">
          <a href="/)" className="transition-all hover:text-blue-600">
            Contact us
          </a>
        </li>
      </ul>
      <Button
        className="mr-10 border-[0.5px] border-white bg-black text-white"
        variant="outline"
      >
        Get a Free Qoute
      </Button>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="bg-black text-white">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ddd9d9"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div>
                  <ul className="flex flex-col items-start gap-4 py-5 text-lg uppercase">
                    <li>Company</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact US</li>
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
