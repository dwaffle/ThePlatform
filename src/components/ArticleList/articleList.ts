import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { ISeries } from '../../../services/crud-server/src/models/series';
import api from '../../api';

export const articleListState = atom({
  key: 'articleList',
  default: [] as IArticle[],
});

export const seriesListState = atom({
  key: 'seriesList',
  default: [] as ISeries[],
});

// Main function that pulls all the articles out of the database
// Is used in many differen't files
export function useArticleList() {
  const [articleList, setArticleList] = useRecoilState<IArticle[]>(
    articleListState,
  );
  const [seriesList, setSeriesList] = useRecoilState<ISeries[]>(
    seriesListState,
  );

  useEffect(() => {
    api.article
      .get()
      .then((response) => {
        setArticleList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  useEffect(() => {
    api.series
      .get()
      .then((response) => {
        setSeriesList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return {
    articleList,
    setArticleList,
    seriesList,
    setSeriesList,
  };
}
