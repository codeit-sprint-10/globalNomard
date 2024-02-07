/* eslint-disable prettier/prettier */
import { useController, UseControllerProps } from 'react-hook-form';
import * as S from './Input.style';

type FormValues = { [key: string]: string };

interface Props extends UseControllerProps<FormValues> {
  title: string;
  placeholder: string;
  type: Type;
}

type Type = 'email' | 'password' | 'nickname' | 'passwordCheck';

export default function Input({
  title,
  placeholder,
  type,
  name,
  control,
  ...rest
}: Props) {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^[0-9a-zA-Z]{8,100}$/;
  const nameRegex = /^.{3,}/;

  const errorMessages: { [key: string]: string } = {
    email: '이메일 형식으로 작성해주세요.',
    password: '8자 이상 입력해 주세요.',
    nickname: '3글자 이상 입력해 주세요.',
  };

  let rule;
  if (type === 'email') {
    rule = emailRegex;
  } else if (type === 'password') {
    rule = pwRegex;
  } else if (type === 'nickname') {
    rule = nameRegex;
  }

  const { field, formState } = useController({
    name,
    control,
    rules: { pattern: rule },
  });

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Input
        {...field}
        {...rest}
        type={type}
        placeholder={placeholder}
        $isError={!!formState.errors[name]}
      />
      {formState.errors[name] && <S.Error>{errorMessages[name]}</S.Error>}
    </S.Wrapper>
  );
}
