import { useController, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';
import COLORS from '@/_styles/colors';

type FormValues = { [key: string]: string };

interface Props extends UseControllerProps<FormValues> {
  type?: 'text' | 'number' | 'textArea';
  placeholder: string;
}

function UseInput({ type, placeholder, name, control, ...rest }: Props) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <Wrapper>
      {type === 'text' && (
        <Input
          type={type}
          {...field}
          placeholder={placeholder}
          $isError={!!fieldState.error}
        />
      )}

      {type === 'number' && (
        <Input
          type={type}
          {...field}
          placeholder={placeholder}
          $isError={!!fieldState.error}
        />
      )}

      {type === 'textArea' && (
        <Textarea
          {...field}
          {...rest}
          placeholder={placeholder}
          $isError={!!fieldState.error}
        />
      )}

      <ErrorMessage>
        {fieldState.invalid && `${placeholder}을 입력해주세요.`}
      </ErrorMessage>
    </Wrapper>
  );
}

export default UseInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ $isError: boolean }>`
  font-size: 1.6rem;
  font-weight: 400;
  width: 100%;
  height: 5.6rem;
  border: 1px solid
    ${({ $isError }) => ($isError ? `${COLORS.RED30}` : `${COLORS.GRAY55}`)};
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
`;

const Textarea = styled.textarea<{ $isError: boolean }>`
  width: 100%;
  height: 34.6rem;
  border-radius: 0.4rem;
  border: 1px solid
    ${({ $isError }) => ($isError ? `${COLORS.RED30}` : `${COLORS.GRAY55}`)};
  padding: 0.8rem 1.6rem;
  resize: none;
  font-family: 'Pretendard';
  font-size: 16px;
  &: focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: ${COLORS.RED30};
  font-size: 14px;
`;
