import { ReactNode } from 'react';
import IMAGES from '@/public/images';
import Image from 'next/image';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      auth 레이아웃
      <Image src={IMAGES.logo} alt="logo" />
      {children}
    </div>
  );
}
