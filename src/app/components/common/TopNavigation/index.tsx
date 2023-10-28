'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopNavigationProps {
  navItems: {
    label: string;
    href: string;
  }[];
}

const TopNavigation = ({ navItems }: TopNavigationProps) => {
  const pathname = usePathname();

  const activeLinkAdditionalClassName = 'font-bold text-slate-500';

  return (
    <nav>
      <ul className="h-12 flex items-center pl-8 pr-8 uppercase gap-x-4 shadow-md overflow-x-auto no-scrollbar">
        {navItems.map((navItem) => (
          <li
            key={navItem.label}
            className={`hover:text-slate-500 hover:font-bold cursor-pointer transition-all duration-500 whitespace-nowrap ${
              pathname.startsWith(navItem.href)
                ? activeLinkAdditionalClassName
                : ''
            }`}
          >
            <Link href={navItem.href}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigation;
