import { FormValues } from '@/(user)/my/register/page';
import COLORS from '@/_styles/colors';
import { useController, UseControllerProps } from 'react-hook-form';
import { styled } from 'styled-components';

interface Props extends UseControllerProps<FormValues> {}

const options = [
  { value: '', name: '카테고리', disabled: true },
  { value: '문화 예술', name: '문화 예술' },
  { value: '식음료', name: '식음료' },
  { value: '스포츠', name: '스포츠' },
  { value: '투어', name: '투어' },
  { value: '관광', name: '관광' },
];

function UseSelect({ name, control }: Props) {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <Wrapper>
      <Select {...field}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.name}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default UseSelect;

const Wrapper = styled.div`
  width: 100%;
`;
const Select = styled.select`
  width: 100%;
  height: 5rem;
  padding: 0.4rem 1.6rem;
`;

const ErrorMessage = styled.p`
  color: ${COLORS.RED30};
  font-size: 14px;
`;
