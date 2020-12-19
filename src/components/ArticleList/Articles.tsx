import api from '../../api'
import {IArticle} from '../../../services/crud-server/src/models/article'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';



export interface ISearchFilter {
    title?: string;
    tag?: string;
    category?: string;
}

export const articleListState = atom({
    key: 'productList',
    default: [] as IArticle[]
});

export const articleList = selector({
    key: 'remainingTaskList',
    get: ({ get }) => {
        return get(articleListState).filter(title => !title.description)
    }
});

export function useArticleList(){

    const [ articleList, setArticleList ] = useRecoilState<IArticle[]>(articleListState);
    // const remainingTaskList = useRecoilValue(articleList);
    
    const loadRemoteTasks = () => {
        api.article.get().then( response => {
            setArticleList( response.data );
        });
    }

    return {
        articleList,
        loadRemoteTasks,
    }

}