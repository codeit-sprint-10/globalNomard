import Text, { TextType } from '@/_styles/Text';
import * as S from './reservationCard.style';

interface Props {
  type: 'pending' | 'canceled' | 'confirmed' | 'declined' | 'completed';
}

export default function ReservationCard({ reservation }: { reservation: any }) {
  return (
    <S.Container>
      <S.ThumbImage src={} alt="체험 썸네일" />
      <S.ContentContainer>
        <S.Status status={reservation.status}>{reservation.status}</S.Status>
        <S.Title />
        <S.StartTime />
        <S.TotalPrice />
      </S.ContentContainer>
    </S.Container>
  );
}
