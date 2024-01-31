import React, { useState } from 'react';
import * as S from './Input.style';

interface Ptype {
  title: string;
  placeholder: string;
}

export default function Input({ title, placeholder }: Ptype) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const EmaliRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (InputValue === '') {
      setErrorMsg('');
      setIsError(false);
    } else if (!EmaliRegex.test(InputValue)) {
      setErrorMsg('이메일 형식으로 작성해주세요.');
      setIsError(true);
    } else {
      setErrorMsg('');
      setIsError(false);
      // email 저장 필요
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input placeholder={placeholder} onChange={onChangeInput} isError={isError} />
      <S.Error>{isError && <p>{errorMsg}</p>}</S.Error>
    </S.Wrapper>
  );
}
