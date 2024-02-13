import Link from 'next/link';
import * as S from './gnbMenuButton.style'; // Fix the casing of the file name
import { Text, TextType } from '@/_styles/Text';

interface Props {
  type: 'login' | 'signOut' | 'signIn' | 'signUp';
  onClick?: () => void;
}

function GNBMenuButton({ type, onClick }: Props) {
  let link = '/';
  let content = '';

  // 미완성
  switch (type) {
    case 'login':
      link = '';
      content = '내 프로필';
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
        <Text
          $normalType={TextType.Pre21}
          $mobileType={TextType.Pre21}
          text={content}
        />
      </Link>
    </S.Wrapper>
  );
}

export default GNBMenuButton;
