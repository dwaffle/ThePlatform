import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import{ useEffect } from "react";
import { IArticle } from "../../../services/crud-server/src/models/article";
import api from "../../api";
import article from '../../api/article';


export const articleListState = atom({
    key: 'articleList',
    default: [] as IArticle[]
});

export const selectedArticle = selector({
  key: 'selectedArticle',
  get: ({ get }) => {
      return get(articleListState).filter(articles => article.getSingleArticle)
  }
})


export function useArticleList () {

  const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
  const selectedArticleState = useRecoilValue(selectedArticle);

  useEffect(() => {
    api.article
      .get()
      .then((response) => {
        setArticleList(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);


const loadSelectedLArticle = (id:number) => {
  api.article.getSingleArticle(id).then( response => {
    return api.article.get();
  });
}


  return {
    articleList,
    setArticleList,
    selectedArticleState ,
    loadSelectedLArticle,
  }
}

