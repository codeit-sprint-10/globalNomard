/* eslint-disable prettier/prettier */
import { useController, UseControllerProps } from 'react-hook-form';
import * as S from './Input.style';

type FormValues = { [key: string]: string };

interface Props extends UseControllerProps<FormValues> {
  title: string;
  placeholder: string;
  type: Type;
}

type Type = 'email' | 'password';

export default function Test({
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

  const errorMessages: { [key: string]: string } = {
    email: '이메일 형식으로 작성해주세요.',
    password: '8자 이상 입력해 주세요.',
  };

  const rule = type === 'email' ? emailRegex : pwRegex;

  const { field, formState } = useController({
    name,
    control,
    rules: { pattern: rule },
  });

  return (
    <div>
      <S.Title>{title}</S.Title>
      <S.Input
        {...field}
        {...rest}
        type={type}
        placeholder={placeholder}
        $isError={!!formState.errors[name]}
      />
      {formState.errors[name] && <S.Error>{errorMessages[name]}</S.Error>}
    </div>
  );
}
