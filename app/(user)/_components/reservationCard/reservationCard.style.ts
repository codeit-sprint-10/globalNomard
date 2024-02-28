import COLORS from '@/_styles/colors';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  status: 'pending' | 'canceled' | 'confirmed' | 'declined' | 'completed';
}

export const Container = styled.div`
  display: flex;
  width: 79.2rem;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: ${COLORS.WHITE10};
  box-shadow: 0px 4px 16px 0px rgba(17, 34, 17, 0.05);
`;

export const ThumbImage = styled(Image)`
  width: 20.4rem;
  height: 20.4rem;
  flex-shrink: 0;
  border-radius: 24px 0px 0px 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 540px;
  height: 153px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const InfoContainer = styled.div`
  height: 98px;
  flex-shrink: 0;
  align-self: stretch;
`;

const STATUS_INFO = {
  pending: COLORS.ORANGE20,
  canceled: COLORS.GRAY70,
  confirmed: COLORS.BLUE20,
  declined: COLORS.RED30,
  completed: COLORS.GRAY70,
};

export const Status = styled.div<Props>`
  color: ${({ status }) => STATUS_INFO[status]};
  margin-bottom: 0.8rem;
`;

export const InnerInfoContainer = styled.div`
  display: flex;
  width: 540px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.div`
  color: ${COLORS.BLACK50};
  display: flex;
  align-items: center;
  align-self: stretch;
`;

export const DateTimeHead = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

export const TotalPrice = styled.div`
  display: flex;
  height: 38px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-self: stretch;
  color: ${COLORS.BLACK90};
`;

export const ReservationCancel = styled.div`
  display: flex;
  width: 144px;
  height: 40px;
  transform: rotate(-0.173deg);
  cursor: pointer;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${COLORS.BLACK50};
  background: ${COLORS.WHITE10};
`;
