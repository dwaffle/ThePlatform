import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { ISeries } from '../../../../services/crud-server/src/models/series';
import MainLayout from '../../../layouts/MainLayout';
import {
  articleListState,
  seriesListState,
} from '../../ArticleList/articleList';

function IndividualSeries() {
  // assigns an id to one article
  const params = useParams<{ id: string }>();
  // all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  // single series
  const [singleSeries, setSingleSeries] = useState<ISeries>();
  // list of all the articles, to be used to find articles in a series
  const articles = useRecoilValue<IArticle[]>(articleListState);
  // const user_ID = Number(localStorage.getItem('user_id'));

  const artInSeries = articles.filter(
    (o) => o.series_id == singleSeries?.series_id,
  );

  useEffect(() => {
    setSingleSeries(seriesList.find((s) => s.series_title === params.id));
  }, [params.id]);

  return (
    <MainLayout>
      <div>{singleSeries?.series_title}</div>
    </MainLayout>
  );
}

export default IndividualSeries;
