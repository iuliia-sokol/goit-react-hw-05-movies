import styled from 'styled-components';

export const CastConteiner = styled.div`
  padding: 36px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CastList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 0;
`;

export const CastItem = styled.li`
  padding: 8px;
  width: calc((100%-90px) / 10);
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;
  text-align: space-between;
  font-size: 8px;
  height: 150px;
  font-weight: 700;
`;

export const ActorImg = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

export const ActorImgWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  max-height: 60px;
`;

export const ActorDataWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
`;

export const FilmHero = styled.span``;
