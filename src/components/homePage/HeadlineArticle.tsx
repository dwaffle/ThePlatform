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

  // to trim the string to last complete word
  function trimMyString(str: string) {
    return str.slice(0, str.lastIndexOf(' '));
  }

  useEffect(() => {
    api.article.get().then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <div>
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
                  <h2>{_article.art_title}</h2>
                  {trimMyString(_article.description.slice(0, 144))}
                  .....
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
