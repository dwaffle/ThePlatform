import MainLayout from '../layouts/MainLayout';
import IndividualArticle from '../components/ArticleList/IndividualArticle/IndividualArticle';

export function IndividualArticlePage(props: {}) {
  return (
    <MainLayout>
      <IndividualArticle />
    </MainLayout>
  );
}
