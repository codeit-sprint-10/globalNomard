'use client';
import * as S from './footer.style';
import { Text, TextType } from '@/_styles/Text';

function Footer() {
  return (
    <S.FooterContainer>
      <div>
        <Text
          $normalType={TextType.Ari31}
          $mobileType={TextType.Ari31}
          text="©codeit - 2023"
        />
        <div>
          <Text
            $normalType={TextType.Ari31}
            $mobileType={TextType.Ari31}
            text="Privacy Policy"
          />
          <Text
            $normalType={TextType.Ari31}
            $mobileType={TextType.Ari31}
            text="FAQ"
          />
        </div>
        <div>아이콘 4개</div>
      </div>
    </S.FooterContainer>
  );
}

export default Footer;
