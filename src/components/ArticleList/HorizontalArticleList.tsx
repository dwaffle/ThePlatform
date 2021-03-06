import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.scss';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useArticleList } from './articleList';
import { IArticle } from '../../../services/crud-server/src/models/article';
import ArticleFilter from './ArticleFilter.ts/articleFilter';

export interface IASearchFilter {
  name?: string;
  author?: any;
  category?: string;
}

export default function HorizontalArticles(props: { rows: number }) {
  const { articleList, setArticleList } = useArticleList();
  // Only allows published/approved articles to be displayed
  // shuffles them!
  const approvedArticle = knuthShuffle(
    articleList.filter((a) => a.art_is_approved === 1),
  );
  const history = useHistory();
  const [articleCol, setArticleCol] = useState<Array<IArticle[]>>([]);
  const [ASearchFilter, setASearchFilter] = useState<IASearchFilter>({});

  function knuthShuffle(arr: any) {
    var rand, temp, i;

    for (i = arr.length - 1; i > 0; i -= 1) {
      rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
      temp = arr[rand]; //swap i and the zero-indexed number
      arr[rand] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  // Allows only users that are authors in the database to create a new article

  useEffect(() => {
    const innerProductList = [...approvedArticle].filter((articles) => {
      let found = true;

      if (ASearchFilter?.name) {
        found = articles.art_title.includes(ASearchFilter.name);
      }

      if (ASearchFilter?.category) {
        found = found && articles.art_category.includes(ASearchFilter.category);
      }

      if (ASearchFilter?.author) {
        found = articles.user_userName.includes(ASearchFilter.author);
      }

      return found;
    });
    const col = [];

    while (innerProductList.length && col.length < (props.rows || 5)) {
      col.push(innerProductList.splice(0, 5));
    }

    setArticleCol(col);
  }, [props.rows, ASearchFilter]);

  function dateFix(date: any) {
    return date.split('T')[0];
  }

  let artListHeader = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'url(https://techcrunch.com/wp-content/uploads/2014/11/shutterstock_55915930-e1415052560114.jpg)',
      height: '32vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // transparency: '50%'
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  // to trim the string to last complete word 
  function trimMyString(str: string) {
    return str.slice(0, str.lastIndexOf(' '));
  }

  return (
    <MainLayout>
      <div style={artListHeader.header}>
        {/* <p className="h8tch2">Articles</p> */}
      </div>

      {/* {isAuthor()} */}

      <div className="searchFeature">
        {<ArticleFilter aSearchDispatch={setASearchFilter} />}
      </div>

      {articleCol.map((col) => {
        return (
          <div>
            {col.map((art, index) => (
              <div key={index}>
                <Card className="CardParent">
                  <Link
                    className="CardTitleLink"
                    to={`/articles/${art.art_title}`}
                  >
                    {art.art_title}
                  </Link>

                  <Row>
                    <Col className="CardColData">
                      <p>Written by: {art.user_userName}</p>
                      <i className="pDate">
                        On: {dateFix(art.art_creationDate)}
                      </i>

                      <div className="CardCategory">{art.art_category}</div>

                      {art.art_price !== 0 ? (
                        <div className="isPremium">Price: ${art.art_price}</div>
                      ) : (
                        art.artype_id !== 3 && (
                          <div className="isPremium">Free Article</div>
                        )
                      )}
                      {art.artype_id === 3 ? (
                        <div className="isPremium">Premium Members</div>
                      ) : (
                        <div></div>
                      )}
                    </Col>

                    <Col className="CardColDesc">
                      {trimMyString(art.description.slice(0,250))} ,  ...
                       <Link
                          className="CardTitleLink"
                          to={`/articles/${art.art_title}`}
                        >
                          read more
                        </Link>
                    
                    </Col>

                    <Col className="CardColImg">
                      {art.art_image ? (
                        <img src={art.art_image} />
                      ) : (
                        <img src="http://ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg" />
                      )}
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>
        );
      })}
    </MainLayout>
  );
}
