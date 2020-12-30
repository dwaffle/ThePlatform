import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import{ useEffect } from "react";
import { IArticle } from "../../../services/crud-server/src/models/article";

import api from "../../api";



export const articleListState = atom({
    key: 'articleList',
    default: [] as IArticle[]
});

export const articleSelect = selector({
  key: 'articleSelect',
  get: ({ get }) => {
      return get(articleListState)
  }
})

export function useArticleList () {

  const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
  const allArticles = useRecoilValue(articleSelect);

  useEffect(() => {
    api.article
      .get()
      .then((response) => {
        setArticleList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return {
    allArticles,
    articleList,
    setArticleList,
  }
}

