import styled from 'styled-components';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const MovieDataWrapper = styled.div`
  padding: 24px;
  font-size: 12px;
`;

export const MoviePic = styled.img`
  border-radius: 24px;
`;

export const OverviewContent = styled.p`
  text-align: justify;
`;

export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

export const MovieInfo = styled.div`
  height: auto;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const Genres = styled.ul`
  display: flex;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.7;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600px;
`;

export const SubTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1.7;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500px;
`;