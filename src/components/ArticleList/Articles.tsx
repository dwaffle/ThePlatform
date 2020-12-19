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

