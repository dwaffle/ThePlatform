import React from 'react';
import MainLayout from '../../layouts/MainLayout'
import ArticlePageSlider from '../../components/ArticlePageSlider/ArticlePageSlider'

import './style.scss'

export default function ArticlePage( props:{} ){

    return <MainLayout>
        
        <ArticlePageSlider />

    </MainLayout>;

}