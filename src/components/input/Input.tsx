import React, { useState } from 'react';
import * as S from './Input.style';

interface Ptype {
  title: string;
  type?: Type;
  placeholder: string;
}

type Type = 'email' | 'password';

export default function Input({ title, type = 'email', placeholder }: Ptype) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'email') {
      const InputValue = e.target.value;
      const EmailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (InputValue === '') {
        setErrorMsg('');
        setIsError(false);
      } else if (!EmailRegex.test(InputValue)) {
        setErrorMsg('이메일 형식으로 작성해주세요.');
        setIsError(true);
      } else {
        setErrorMsg('');
        setIsError(false);
        // email 저장 필요
      }
    } else {
      const InputValue = e.target.value;
      const PwRegex = /^[0-9a-zA-Z]{8,100}$/;
      if (InputValue === '') {
        setErrorMsg('');
        setIsError(false);
      } else if (!PwRegex.test(InputValue)) {
        setErrorMsg('8자 이상 입력해 주세요.');
        setIsError(true);
      } else {
        setErrorMsg('');
        setIsError(false);
        // pw 저장 필요
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input type={type} placeholder={placeholder} onChange={onChangeInput} isError={isError} />
      {isError && <S.Error>{errorMsg}</S.Error>}
    </S.Wrapper>
  );
}
