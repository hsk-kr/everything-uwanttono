import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Everything uwanttono :: Food Pros & Cons',
};

export default function FoodPropsAndConsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-8 flex justify-center items-center">
      <div className="w-full max-w-screen-lg">{children}</div>
    </main>
  );
}
