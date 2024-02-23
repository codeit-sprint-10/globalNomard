import COLORS from '@/_styles/colors';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  status: 'pending' | 'canceled' | 'confirmed' | 'declined' | 'completed';
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 24px;
  background: ${COLORS.WHITE10};
`;

export const ThumbImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.4rem;
`;

const STATUS_INFO = {
  pending: { color: COLORS.BLACK90 },
  canceled: { color: COLORS.GRAY70 },
  confirmed: { color: COLORS.ORANGE20 },
  declined: { color: COLORS.RED30 },
  completed: { color: COLORS.GRAY70 },
};

export const Status = styled.div<Props>`
  color: ${({ status }) => STATUS_INFO[status]};
  margin-bottom: 0.8rem;
`;

export const Title = styled.div`
  color: ${COLORS.BLACK50};
  margin-bottom: 1.2rem;
`;

export const DateTimeHead = styled.div`
  margin-bottom: 2.2rem;
`;

export const TotalPrice = styled.div`
  color: ${COLORS.BLACK90};
  margin-bottom: 0.5rem;
`;
