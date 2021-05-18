import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { IRating } from '../../../services/crud-server/src/models/rating';
import api from '../../api';

export const ratingListState = atom({
  key: 'ratingList',
  default: [] as IRating[],
});

export function useRatingList() {
  const [ratingList, setRatingList] = useRecoilState<IRating[]>(
    ratingListState,
  );

  useEffect(() => {
    api.rating
      .get()
      .then((response) => {
        setRatingList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);
  return {
    ratingList,
    setRatingList,
  };
}
