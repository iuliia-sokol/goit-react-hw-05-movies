import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  img {
    border-radius: 5px;
  }

  li {
    transition: box-shadow 250ms linear, transform 250ms linear;
  }

  li:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
    transform: scale(1.02);
  }
`;
