import Text, { TextType } from '@/_styles/Text';
import * as S from './reservationDropdown.style';
import { useEffect, useRef, useState, useTransition } from 'react';
import { ReservationSort } from '@/_api/reservation/reservation.types';
interface Props {
  sortOption?: string;
  setSortOption: (option: string) => void;
  SORT_OPTIONS: ReservationSort[];
}

export default function ReservationDropdown({
  /*   const [sortOption, setSortOption] = useState(SORT_OPTIONS[0]);을 사용할 것 */
  sortOption,
  setSortOption,
  SORT_OPTIONS,
}: Props) {
  const [isPending, startTransition] = useTransition();

  const handleSortOption = (option: string) => {
    startTransition(() => setSortOption(option));
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.DropdownButton
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        $isPending={isPending}
      >
        <Text $normalType={TextType.Pre18} text={'필터'} />
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.DropdownButton>
      {isOpen && (
        <S.DropdownList>
          {SORT_OPTIONS?.map((option, i) => (
            <li key={`${option}-${i}`}>
              <S.DropdownItem
                $isSelected={option.sort === sortOption}
                onClick={() => handleSortOption(option?.text)}
              >
                <Text $normalType={TextType.Pre17} text={option.text} />
              </S.DropdownItem>
            </li>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
}
