import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../fetchAPI';
import {
  CastList,
  CastConteiner,
  CastItem,
  CastImg,
  FilmHero,
} from './Cast.styled';

export const Cast = () => {
  const { id } = useParams();
  const [castList, setCastList] = useState();

  useEffect(() => {
    fetchMovie.getMovieCast(id).then(setCastList);
  }, [id]);

  if (!castList) {
    return null;
  }

  return (
    <CastConteiner>
      <CastList>
        {castList.map(el => (
          <CastItem key={el.id}>
            <CastImg
              src={
                el.profile_path
                  ? `${fetchMovie.BASE_URL}${el.profile_path}`
                  : fetchMovie.defaultImg
              }
              alt={el.name}
              width="100"
            />
            <div>
              <p>{el.name}</p>
              <p>
                Character: <FilmHero>{el.character}</FilmHero>
              </p>
            </div>
          </CastItem>
        ))}
      </CastList>
    </CastConteiner>
  );
};
