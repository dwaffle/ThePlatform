import React, { useEffect, useState } from 'react';

export interface IArticle {
    title: number;
    author: string;
    category: string[];
    price?: number;
    series?: string;
    tag: string;
}

export interface ISearchFilter {
    name?: string;
    brand?: string;
    category?: string;
}

