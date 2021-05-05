import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { ISeries } from '../../../services/crud-server/src/models/series';
import api from '../../api';
import { articlePurchase } from '../../../services/crud-server/src/models/purchaseArticle';

export const articleListState = atom({
  key: 'articleList',
  default: [] as IArticle[],
});

export const seriesListState = atom({
  key: 'seriesList',
  default: [] as ISeries[],
});

export const userOwnsArticle = atom({
  key: 'userWithArticles',
  default: [] as articlePurchase[],
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

  const [usersWithArticles, setUsersWithArticles] = useRecoilState(
    userOwnsArticle,
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

  useEffect(() => {
    api.purchaseArticle
      .get(Number(localStorage.getItem('user_id')))
      .then((response) => {
        setUsersWithArticles(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return {
    articleList,
    setArticleList,
    seriesList,
    setSeriesList,
    usersWithArticles,
  };
}