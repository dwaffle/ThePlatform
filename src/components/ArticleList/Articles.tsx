import React, { useEffect, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import api from '../../api'

export interface IArticle {
    // image?: string;
    price: number;
    type: number;
    title: number;
    description: string;
    author:number;
    body: string;
    // category: string;
//     rating: number;
//     series?: string;
//     tag: string;
// 
}

export interface ISearchFilter {
    title?: string;
    tag?: string;
    category?: string;
}

export const articleMount = atom({
    key: 'newArticle',
    default: [] as IArticle[]
});


export function NewArticle () {

    const [ createArticle, setCreateArticle ] = useRecoilState<IArticle[]>(articleMount);
    
    const create = (price:number, description:string, type:number, title:string, author:number, body:string ) => {
        api.article.post({ price, type, title, description, author, body}).then( response => {
            setCreateArticle([ ...createArticle, response.data ]);
        });
    }

    return {
        create,
    }
}
