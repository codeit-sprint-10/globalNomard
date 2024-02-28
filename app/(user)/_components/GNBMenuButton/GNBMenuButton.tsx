import Link from 'next/link';
import * as S from './gnbMenuButton.style'; // Fix the casing of the file name
import { Text, TextType } from '@/_styles/Text';

interface Props {
  type: 'member' | 'signOut' | 'signIn' | 'signUp';
  onClick?: () => void;
}

function GNBMenuButton({ type, onClick }: Props) {
  let link = '/';
  let content = '';

  switch (type) {
    case 'member':
      link = '/my/reservationList';
      content = '내이름';
      break;
    case 'signOut':
      link = '/';
      content = '로그아웃';
      break;
    case 'signIn':
      link = '/signin';
      content = '로그인';
      break;
    case 'signUp':
      link = '/signup';
      content = '회원가입';
      break;
    default:
      break;
  }

  return (
    <S.Wrapper>
      <Link href={link} onClick={onClick}>
        <S.StyledWrapper>
          <Text
            $normalType={TextType.Pre21}
            $mobileType={TextType.Pre21}
            text={content}
          />
        </S.StyledWrapper>
      </Link>
    </S.Wrapper>
  );
}

export default GNBMenuButton;
