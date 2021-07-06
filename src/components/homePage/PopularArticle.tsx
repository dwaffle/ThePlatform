import { useEffect, useState } from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IArticle } from '../../../services/crud-server/src/models/article';
import api from '../../api';

export default function PopularArticle() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    api.article.get().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <div className="HeadlineArticle">
        <h1> Popular Article </h1>

        {articles.slice(6, 9).map((_article) => {
          return (
            <div>
              <Link to={`/articles/${_article.art_title}`}>
                <Media>
                  <img
                    width={90}
                    height={90}
                    className="align-self-start mr-3"
                    src={_article.art_image}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h6>{_article.art_title.slice(0, 25)}</h6>
                    <p>{_article.description.slice(0, 80)}</p>
                  </Media.Body>
                </Media>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
