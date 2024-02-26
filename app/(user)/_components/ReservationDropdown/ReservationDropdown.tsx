import Text, { TextType } from '@/_styles/Text';
import * as S from './reservationDropdown.style';
import { useRef } from 'react';

export default function ReservationDropdown() {


  const dropdownRef = useRef(null);

  return (
    <S.DropdownContainer ref={}>
      <S.DropdownButton>
      text
      {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropdownButton>
      {isOpen && ()}
        <S.DropdownList>
          <S.DropdownItem>

          </S.DropdownItem>
        </S.DropdownList>
    </S.DropdownContainer>
  );
}