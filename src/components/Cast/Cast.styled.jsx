import styled from 'styled-components';

export const CastConteiner = styled.div`
  padding: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  text-align: center;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 90px) / 9);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 10px;
  height: 185px;
  font-weight: 700;
`;

export const CastImg = styled.img`
  height: 120px;
`;

export const FilmHero = styled.span`
  color: orangered;
`;
