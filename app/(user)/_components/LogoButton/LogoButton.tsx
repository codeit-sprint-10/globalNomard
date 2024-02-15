import Link from 'next/link';
import LogoIcon from '@/public/images/logo_small.png';
import * as S from './logoButton.style';
import Image from 'next/image';

function LogoButton() {
  return (
    <S.Wrapper>
      <Link href="/">
        <Image src={LogoIcon} alt="Logo" fill />
      </Link>
    </S.Wrapper>
  );
}

export default LogoButton;
