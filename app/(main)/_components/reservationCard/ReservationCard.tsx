import Text, { TextType } from '@/_styles/Text';
import * as S from './reservationCard.style';

function getStatusText(status: string) {
  switch (status) {
    case 'pending':
      return '예약 신청';
    case 'canceled':
      return '예약 취소';
    case 'confirmed':
      return '예약 승인';
    case 'declined':
      return '예약 거절';
    case 'completed':
      return '체험 완료';
    default:
      return '';
  }
}

export default function ReservationCard({ data }: { data: any }) {
  const status = data.reservations[0].status;
  const banner = data.reservations[0].activity.bannerImageUrl;

  return (
    <S.Container>
      <S.ThumbImage src={banner} alt="체험 썸네일" />
      <S.ContentContainer>
        <S.Status status={status}>
          <Text $normalType={TextType.Pre10} text={getStatusText(status)} />
        </S.Status>
        <S.Title />
        <S.StartTime />
        <S.TotalPrice />
      </S.ContentContainer>
    </S.Container>
  );
}
