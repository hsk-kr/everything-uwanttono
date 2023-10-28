'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black h-12 md:h-16 text-white flex justify-center items-center">
      <Link href="/">Everything uwanttono</Link>
    </header>
  );
};

export default Header;
