import COLORS from '@/_styles/colors';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImage: string;
}

function Upload({ onChange, uploadImage }: Props) {
  return (
    <Container>
      <Label htmlFor="file">
        <LabelPlus>+</LabelPlus>
        <LabelText>{uploadImage ? '이미지 변경' : '이미지 등록'}</LabelText>
      </Label>
      <Input type="file" name="file" id="file" onChange={onChange} />
      {uploadImage && (
        <StyledImage src={uploadImage} width={180} height={180} alt="Image" />
      )}
    </Container>
  );
}

export default Upload;

const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Label = styled.label`
  display: flex;
  width: 18rem;
  height: 18rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${COLORS.GRAY80};
  border-radius: 1.2rem;
  gap: 2rem;
`;

const LabelPlus = styled.div`
  font-size: 6rem;
  font-weight: 100;
  color: ${COLORS.GRAY80};
`;

const LabelText = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  color: ${COLORS.GRAY80};
`;
const Input = styled.input`
  display: none;
`;
const StyledImage = styled(Image)`
  width: 18rem;
  height: 18rem;
  object-fit: fill;
  border-radius: 2.4rem;
`;
