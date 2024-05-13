"use client";

import { headerLinks } from '@/constants';
import Link  from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavItems() {
    const pathname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
        {headerLinks.map((Link) => {
            const isActive = pathname === Link.route;
            return (
                <li key={Link.route}
                className={`${
                    isActive && "text-primary-500"
                } flex-center p-medium-16 whitespace-nowrap`}
                >
                    <a href={Link.route}>{Link.label}</a>
                </li>
            )
        })}
    </ul>
  )
}

export default NavItems