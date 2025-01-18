'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { P } from '@/utils/typography/p';
import { Small } from '@/utils/typography/small';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ModeToggle } from '../theme/mode-toggle';
import { navbar } from './data';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 inset-x-0 border-b select-none z-50',
        scroll && 'backdrop-blur-md',
      )}
    >
      <div className="flex items-center justify-between py-4 container mx-auto">
        <div>
          <Link href="/">
            <P>Muhammad Asif</P>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navbar.map((item) => (
            <Link key={item.path} href={item.path}>
              <Small>{item.name}</Small>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button>
            <Link href="/resume">
              <Small>Resume</Small>
            </Link>
          </Button>
          <ModeToggle />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetTitle></SheetTitle>
        <div className="flex flex-col gap-4 mt-8">
          {navbar.map((item) => (
            <Link key={item.path} href={item.path}>
              <Small>{item.name}</Small>
            </Link>
          ))}
          <div className="flex gap-2 w-full mt-4">
            <Button>
              <Link href="/resume">
                <Small>Resume</Small>
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
