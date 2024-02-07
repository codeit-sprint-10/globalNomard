import { ReactNode } from 'react';
import Footer from '@/(user)/_components/Footer';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      홈 레이아웃
      {children}
      <Footer />
    </div>
  );
}
