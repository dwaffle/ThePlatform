import React, { useEffect, useState } from 'react';

export interface IArticle {
    image?: string;
    title: number;
    author: string;
    description: string[];
    body: string[];
    category: string[];
    price?: number;
    rating: number;
    series?: string;
    tag: string;
}

export interface ISearchFilter {
    title?: string;
    tag?: string;
    category?: string;
}

