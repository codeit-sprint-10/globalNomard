import Info from '@/assets/icons/info.svg';
import ReservationDetails from '@/assets/icons/ReservationDetails.svg';
import ExperienceManagement from '@/assets/icons/ExperienceManagement.svg';
import CurrentSituation from '@/assets/icons/currentSituation.svg';
import * as S from './Menu.style';

function Menu() {
  return (
    <S.StyledContainer>
      <S.StyledMenu>
        <Info />내 정보
      </S.StyledMenu>
      <S.StyledMenu>
        <ReservationDetails />
        예약 내역
      </S.StyledMenu>
      <S.StyledMenu>
        <ExperienceManagement />내 체험 관리
      </S.StyledMenu>
      <S.StyledMenu>
        <CurrentSituation />
        예약 현황
      </S.StyledMenu>
    </S.StyledContainer>
  );
}

export default Menu;
