import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  font-size: 12px;
`;

export const ReviewItem = styled.li`
  display: flex;
  justify-content: stretch;
  gap: 36px;
`;
export const Author = styled.p`
  color: #3939d7;
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
`;

export const Content = styled.p`
  font-size: 12px;
`;
