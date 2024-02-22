import IMAGES from '@/public/images';
import EditImg from '@/assets/icons/Pen';
import * as S from './Profile.style';

function Profile() {
  return (
    <S.StyledContainer>
      <S.ProfileSection>
        <S.ProfileImage
          src={IMAGES.profile}
          alt="프로필 사진"
          placeholder="blur"
          fill
          priority
        />
        <S.EditImageBtn>
          <EditImg />
        </S.EditImageBtn>
      </S.ProfileSection>
    </S.StyledContainer>
  );
}

export default Profile;
