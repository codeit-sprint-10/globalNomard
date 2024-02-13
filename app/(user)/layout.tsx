import { ReactNode } from 'react';
import Footer from './_components/FNB/Footer';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Footer />
      (user) 레이아웃
      {children}
    </div>
  );
}
