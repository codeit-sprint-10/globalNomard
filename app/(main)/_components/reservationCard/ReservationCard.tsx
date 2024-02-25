import Text, { TextType } from '@/_styles/Text';
import * as S from './reservationCard.style';
import { Reservation } from '@/_api/reservation/reservation.types';

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
interface Props {
  data: Reservation;
}

export default function ReservationCard({ data }: Props) {
  return (
    <S.Container>
      <S.ThumbImage src={data?.activity?.bannerImageUrl} alt="체험 썸네일" />
      <S.ContentContainer>
        <S.Status status={data?.status}>
          <Text $normalType={TextType.Pre10} text={getStatusText(status)} />
        </S.Status>
        <S.Title>
          <Text $normalType={TextType.Pre9} text={data?.activity?.title} />
        </S.Title>
        <S.DateTimeHead>
          {<Text $normalType={TextType.Pre29} text={data?.date} />} ·
          {<Text $normalType={TextType.Pre29} text={data?.startTime} />} -
          {<Text $normalType={TextType.Pre29} text={data?.endTime} />} ·
          {<Text $normalType={TextType.Pre29} text={data?.headCount} />}
        </S.DateTimeHead>
        <S.TotalPrice>
          <Text $normalType={TextType.Pre9} text={data?.totalPrice} />
        </S.TotalPrice>
      </S.ContentContainer>
    </S.Container>
  );
}
