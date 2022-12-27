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

  &:hover > p {
    opacity: 1;
  }

  img {
    border-radius: 12px;
  }
`;

export const MovieName = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 178, 108, 0.657);
  border-radius: 12px;
  font-size: 10px;
  color: white;
  font-weight: 500;
  padding: 12px;
  height: 30%;
  opacity: 0;
`;
