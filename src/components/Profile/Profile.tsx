import testImg from '@/assets/images/testImg.jpg';
import PenImg from '@/assets/icons/Pen.svg';
import * as S from './Profile.style';

function Profile() {
  return (
    <S.StyledContainer>
      <S.ProfileSection>
        <S.ProfileImage src={testImg} alt="프로필 사진" placeholder="blur" fill priority />
        <S.EditImageBtn>
          <PenImg />
        </S.EditImageBtn>
      </S.ProfileSection>
    </S.StyledContainer>
  );
}

export default Profile;
