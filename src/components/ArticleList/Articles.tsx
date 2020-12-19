import React, { useEffect, useState } from 'react';
import { atom } from 'recoil';



export interface ISearchFilter {
    title?: string;
    tag?: string;
    category?: string;
}

export const articleListState = atom({
    key: 'productList',
    default: []
});

