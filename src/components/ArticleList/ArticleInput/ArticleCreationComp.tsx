import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import api from '../../../api';
import {IArticle} from '../../../../services/crud-server/src/models/article'

// export default interface INewArticle {
//     title: string,
//     author: string,
//     description: string,
//     body: string,
//     allMembers?: number,
//     paidMembers?: number,  
//     price?: number,
//     category: string[],
//     series: string[],
//     tags: string[];
// }

export const articleListState = atom({
    key: 'newArticle',
    default: [] as IArticle[]
});

export function articleCreationComp() {

    const [ newArticle, setNewArticle ] = useRecoilState<IArticle[]>(articleListState);

    const create = ( description:string ) => {
        api.article.post({ done: false, description }).then( (response:any) => {
            setNewArticle([ ...newArticle, response.data ]);
        });
    }

}

