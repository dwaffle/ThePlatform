import { atom, useRecoilState, useRecoilValue } from 'recoil';
import{ useEffect } from "react";
import { IArticle } from "../../../services/crud-server/src/models/article";

import api from "../../api";



export const articleListState = atom({
    key: 'articlesList',
    default: [] as IArticle[]
});

export function useArticleList () {

  const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
  
  async function test() {
    return api.article.get().then((response) => {
      console.log(response.data)
      return response.data;
    })
  }
  useEffect(() => {
      test();
  }, []);

  return {
    articleList,
    setArticleList,
  }
}

