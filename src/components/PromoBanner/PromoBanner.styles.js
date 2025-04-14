import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const PromoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 300px;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 40px;
  padding: 60px 80px;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const TextContent = styled.div`
  max-width: 50%;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.main};
  line-height: 1.3;
`;

export const Highlight = styled.span`
  background-color: ${colors.main};
  color: white;
  padding: 0 12px;
  border-radius: 12px;
`;

export const LampImage = styled.img`
  max-height: 340px;
  object-fit: contain;
`;
