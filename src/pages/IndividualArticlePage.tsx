import React from "react";
import MainLayout from "../layouts/MainLayout";
import IndividualArticle from '../components/ArticleList/IndividualArticle'

export function IndividualArticlePage(props: {}){
    return <MainLayout>
        <IndividualArticle />
    </MainLayout>
}