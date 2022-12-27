import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin: 0 auto;
  padding: 24px;
`;

export const MovieListItem = styled.li`
  flex-basis: calc((100%-80px) / 6);
  transform: scale(1);
  border-radius: 12px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 12px;
  }
`;
