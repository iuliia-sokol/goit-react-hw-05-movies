import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
  h1,
  h3 {
    color: orangered;
  }
  img {
    border: 1px solid black;
    border-radius: 2px;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;
export const MovieLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid grey;
  &.active {
    color: white;
    background-color: orangered;
    border: none;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;

export const MovieInfo = styled.div`
  height: auto;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;
export const MovieInfoTitle = styled.h4`
  margin-bottom: 30px;
  color: orangered;
`;
