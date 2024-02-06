'use client';
import { Text, TextType } from '@/_styles/Text';

export default function Home() {
  return (
    <div>
      sdsd
      <Text
        $normalType={TextType.Ari31}
        $mobileType={TextType.Sqo43}
        text="질문을 작성하세요"
      />
      <Text
        $normalType={TextType.Pre41}
        $mobileType={TextType.Sqo43}
        text="질문을 작성하세요"
      />
    </div>
  );
}
