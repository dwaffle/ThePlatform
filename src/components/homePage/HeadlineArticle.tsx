import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IArticle } from '../../../services/crud-server/src/models/article';
import api from '../../api';

export default function HeadlineArticle(props: {}) {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const history = useHistory();

  function onclickart(title: string) {
    return function () {
      history.push(`/articles/${title}`);
    };
  }

  useEffect(() => {
    api.article.get().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <div className="HeadlineArticle">
        <h1> Headline Article </h1>

        {articles.slice(10, 12).map((_article) => {
          return (
            <div className="divStyle">
              <div>
                <p>
                  <img
                    width={90}
                    height={90}
                    className="imgStyle rounded-circle"
                    src={_article.art_image}
                    alt="Generic placeholder"
                  />

                  <h2>{_article.art_title.slice(0, 32)}</h2>

                  {_article.description.slice(0, 144)}

                  <br />
                  <Button
                    variant="outline-primary"
                    onClick={onclickart(_article.art_title)}
                  >
                    See More
                  </Button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
