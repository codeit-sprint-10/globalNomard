import Profile from '@/_components/Profile/Profile';
import Menu from './Menu/Menu';
import * as S from './SideMenu.style';

function SideMenu() {
  return (
    <S.StyledContainer>
      <Profile />
      <Menu />
    </S.StyledContainer>
  );
}

export default SideMenu;
