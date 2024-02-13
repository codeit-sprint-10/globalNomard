'use client';
import * as S from './footer.style';
import { Text, TextType } from '@/_styles/Text';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import Link from 'next/link';

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <Text
          $normalType={TextType.Ari31}
          $mobileType={TextType.Ari31}
          text="©codeit - 2023"
        />
        <S.FooterInnerContainer>
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
        </S.FooterInnerContainer>
        <S.IconBox>
          <Link href="/">
            <FacebookIcon />
          </Link>
          <Link href="/">
            <InstagramIcon />
          </Link>
          <Link href="/">
            <TwitterIcon />
          </Link>
          <Link href="/">
            <YoutubeIcon />
          </Link>
        </S.IconBox>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
