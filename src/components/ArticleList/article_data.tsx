import api from '../../api'
import {IArticle} from '../../../services/crud-server/src/models/article'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';



export interface ISearchFilter {
    title?: string;
    tag?: string;
    category?: string;
}

export const articleList = atom({
    key: 'productList',
    default: [] as IArticle[]
});

export const getArticle = selector({
    key: 'remainingTaskList',
    get: ({ get }) => {
        return get(articleList).filter(article => article.id)
    }
});

export function useArticleList(){

    const [ article, setArticle ] = useRecoilState<IArticle[]>(articleList);
    const articles = useRecoilValue(getArticle);

    
    const loadRemoteTasks = () => {
        api.article.get().then( response => {
            setArticle( response.data );
        });
    }

    return {
        articles,
        article,
        setArticle,
        loadRemoteTasks,
    }

}