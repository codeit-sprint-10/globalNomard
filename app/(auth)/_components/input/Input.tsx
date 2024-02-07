/* eslint-disable prettier/prettier */
import { SubmitHandler, useForm } from 'react-hook-form';
import * as S from './Input.style';

interface Props {
  title: string;
  type?: Type;
  placeholder: string;
}

type Inputs = {
  email: string;
  password: string;
};

type Type = 'email' | 'password';

export default function Input({ title, type = 'email', placeholder }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^[0-9a-zA-Z]{8,100}$/;

  const validationPattern = type === 'email' ? emailRegex : pwRegex;

  const errorMessages = {
    email: '이메일 형식으로 작성해주세요.',
    password: '8자 이상 입력해 주세요.',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Input
          {...register(type, { required: true, pattern: validationPattern })}
          type={type}
          placeholder={placeholder}
          $isError={!!errors[type]}
        />
        {errors[type] && <S.Error>{errorMessages[type]}</S.Error>}
      </S.Wrapper>
    </form>
  );
}
