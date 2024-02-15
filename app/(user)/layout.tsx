import { ReactNode } from 'react';
import Footer from './_components/Footer/Footer';
import GNBNav from './_components/GNBNav/GNBNav';

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <GNBNav userType="profile" />
      <Footer />
      {/* (user) 레이아웃 */}
      {children}
    </div>
  );
}