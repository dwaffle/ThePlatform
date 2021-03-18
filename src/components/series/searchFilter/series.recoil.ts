import { atom, selector } from 'recoil';
// import { ISeries } from '../../../../services/crud-server/src/models/series';
import { seriesListState } from '../../ArticleList/articleList';

export const sCategoriesState = selector({
  key: 'categories',
  get: ({ get }) => {
    // Turn This:
    // [ ['health], ['health','mens-health'], ['sports'], ['tech','sports'] ]

    // Into This:
    // [ 'health', 'health', 'mens-health', 'sports', 'tech', 'sports' ]
    return get(seriesListState)
      .map((series) => series.series_category)
      .reduce((flatCats: string[], seriesCategories) => {
        return flatCats.concat(seriesCategories);
      }, [])
      .filter((category: string, index: number, categories: string[]) => {
        return categories.indexOf(category) === index;
      });
  },
});

// export const brandsState = selector({
//     key: 'brands',
//     get: ({ get }) => {

//         // Turn This:
//         // [ ['health], ['health','mens-health'], ['sports'], ['tech','sports'] ]

//         // Into This:
//         // [ 'health', 'health', 'mens-health', 'sports', 'tech', 'sports' ]
//         return get(productListState).map( product => product.brand ).filter(( brand:string, index:number, brands:string[] ) => {
//             return brands.indexOf(brand) === index;
//         }).filter( brand => !!brand );

//     }
// })

// export const pricesState = selector({
//     key: 'pricesState',
//     get: ({get}) => {
//         return get(productListState).map( product => product.price ).filter(( price:string, index:number, brands:string[] ) => {
//             return brands.indexOf(price) === index;
//         }).filter( brand => !!brand );
//     }
// })
