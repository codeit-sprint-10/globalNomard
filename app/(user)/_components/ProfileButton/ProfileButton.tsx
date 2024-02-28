import Link from 'next/link';
import * as S from './profileButton.style';
import Image from 'next/image';
import ProfileMini from '@/public/images/profile_mini.png';

function ProfileButton() {
  return (
    <S.Wrapper>
      <Link href="/my/reservationList">
        <Image src={ProfileMini} alt="ProfileMini" fill />
      </Link>
    </S.Wrapper>
  );
}

export default ProfileButton;
