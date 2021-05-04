import { selector } from 'recoil';

import { articleListState } from '../../ArticleList/articleList';

export const ArticleCategoryState = selector({
  key: 'ACategories',
  get: ({ get }) => {
    return get(articleListState)
      .map((article) => article.art_category)
      .reduce((flatCats: string[], articleCategories) => {
        return flatCats.concat(articleCategories);
      }, [])
      .filter((category: string, index: number, ACategories: string[]) => {
        return ACategories.indexOf(category) === index;
      });
  },
});

export {};
