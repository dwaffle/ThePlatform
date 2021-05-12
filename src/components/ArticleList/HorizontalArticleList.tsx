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
  const approvedArticle = articleList.filter((a) => a.art_is_approved === 1);
  const history = useHistory();
  const [articleCol, setArticleCol] = useState<Array<IArticle[]>>([]);
  const [ASearchFilter, setASearchFilter] = useState<IASearchFilter>({});

  // Allows only users that are authors in the database to create a new article
  // let isAuthor = (e: any) => {
  //   e.preventDefault();
  //   let userType = Number(localStorage.getItem('user_type'));
  //   if ((userType != 1 && userType != 4) || !userType) {
  //     alert('You must be an author to create an article');
  //   } else {
  //     return history.push('/newArticle');
  //   }
  // };

  const isAuthor = () => {
    let userType = Number(localStorage.getItem('user_type'));

    let newArt = () => {
      return history.push('/newArticle');
    };

    if (userType == 1 || userType == 4) {
      return <Button onClick={newArt}>Create New Article</Button>;
    }
  };

  useEffect(() => {
    const innerProductList = [...approvedArticle].filter((articles) => {
      let found = true;

      if (ASearchFilter?.name) {
        found = articles.art_title.includes(ASearchFilter.name);
      }

      if (ASearchFilter?.category) {
        found = found && articles.art_category.includes(ASearchFilter.category);
      }

      // if (ASearchFilter?.author) {
      //   found = articles.user_userName .includes(ASearchFilter.author);
      // }

      return found;
    });
    const col = [];

    while (innerProductList.length && col.length < (props.rows || 5)) {
      col.push(innerProductList.splice(0, 5));
    }

    setArticleCol(col);
  }, [props.rows, ASearchFilter]);

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

  return (
    <MainLayout>
      <div style={artListHeader.header}>
        {/* <p className="h8tch2">Articles</p> */}
      </div>

      {/* {isAuthor()} */}

      <div className="searchFeature">
        {<ArticleFilter aSearchDispatch={setASearchFilter}/>}
      </div>
      

      {articleCol.map((col) => {
        return (
          <div>
            {col.map((art, index) => (
              <div key={index}>
                <Card className="CardArt">
                  <Card.Header className="CardHeader">
                    <Link to={`/articles/${art.art_title}`}>
                      {art.art_title}
                    </Link>
                    {art.art_price !== 0 ? (
                      <div className="isPremium">Price: ${art.art_price}</div>
                    ) : (art.artype_id !== 3) && (
                      <div className="isPremium">Free Article</div>
                    )}
                    {art.artype_id === 3 ? (
                      <div className="isPremium">Premium Members</div>
                    ) : (
                      <div></div>
                    )}
                    <div>
                      <small>Written by: {art.user_userName}</small>
                    </div>
                  </Card.Header>
                  <Card.Body className="CardBody">
                    <Card.Text className="CardText">
                      {art.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="IACardFooter">
                    <i className={`tag-${art.art_category}`}> {art.art_category} </i>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        );
      })}
    </MainLayout>
  );
}
