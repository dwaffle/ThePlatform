import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Carousel from 'react-multi-carousel';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
// import unnamed from '../../data/icon/unnamed.jpg';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { seriesListState } from '../ArticleList/articleList';
import { ISeries } from '../../../services/crud-server/src/models/series';
import SeriesFilter from './searchFilter/SeriesFilter';
// import { sCategoriesState } from './searchFilter/series.recoil';

export interface ISearchFilter {
  name?: string;
  author?: string;
  category?: string;
}

export default function SeriesPage(props: { rows?: number }) {
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  const [seriesRows, setSeriesRows] = useState<Array<ISeries[]>>([]);
  const [searchFilter, setSearchFilter] = useState<ISearchFilter>({});
  const history = useHistory();

  //get the user Id from the browser
  const user_id = Number(window.localStorage.getItem('user_id'));

  let isAuthor = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem('user_type'));
    if (userType != 4 || !userType) {
      alert('You must be an author to create an article');
    } else {
      return history.push('/newArticle');
    }
  };

  function seriesLink() {
    return history.push('/seriesCreation');
  }

  let test = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'url(https://www.wholelifechallenge.com/wp-content/uploads/2018/06/e-book-header.jpg)',
      height: '32vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  useEffect(() => {
    const innerProductList = [...seriesList].filter((series) => {
      let found = true;

      if (searchFilter?.name) {
        found = series.series_title.includes(searchFilter.name);
      }

      if (searchFilter?.category) {
        found = found && series.series_category.includes(searchFilter.category);
      }

      return found;
    });
    const rows = [];

    while (innerProductList.length && rows.length < (props.rows || 5)) {
      rows.push(innerProductList.splice(0, 5));
    }

    setSeriesRows(rows);
  }, [props.rows, searchFilter]);

  function onClickHandler(id: any) {
    return function () {
      history.push(`/series/${id}`);
    };
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  function isMember() {
    if (user_id > 1) {
      return (
        <>
          <div className="searchFilter">
            {<SeriesFilter searchDispatch={setSearchFilter} />}
          </div>
          <div className="search-filter">
            <Row>
              <Col>
                <Carousel responsive={responsive}>
                  {seriesList ? (
                    seriesList.map((data) => {
                      return (
                        //   <>
                        //     {data.map((series, index) => (
                        <Card
                          bg="Light"
                          className="org-card"
                          style={{ width: '14rem' }}
                        >
                          <Card.Header className="sPCardHeader">
                            {data.series_title}
                          </Card.Header>

                          <Card.Body>
                            <Card.Text className="sPDesc">
                              {data.series_desc}
                              {/* <br /> */}
                            </Card.Text>

                            <Button
                              className="view-org-button"
                              onClick={onClickHandler(data.series_title)}
                            >
                              View Series
                            </Button>
                          </Card.Body>
                        </Card>
                        //     ))}
                        // //   </>
                      );
                    })
                  ) : (
                    <div>
                      Please <a href="/login">log in</a> or{' '}
                      <a href="/signup">sign up</a> to see organizations.
                    </div>
                  )}
                </Carousel>
              </Col>
            </Row>
          </div>

          {/* <div className="seriesBody">
        {seriesRows.map((row) => {
          return (
            <div className="scCardDeck">
              <CardDeck>
                {row.map((series, index) => (
                  <div className="scIndex" key={index}>
                    <Card className="sCards">
                      <Card.Img
                        variant="top"
                        width="100%"
                        src={unnamed}
                        className="card-image-top"
                      ></Card.Img>
                      <Card.Body className="scBody">
                        <Card.Title className="scTitle">
                          <Link to={`/series/${series.series_title}`}>
                            {series.series_title}
                          </Link>
                        </Card.Title>

                        <Card.Text className="scText">
                          {series.series_desc}
                        </Card.Text>
              
                        <Card.Footer className="scFooter">
                          {series.series_category}
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </CardDeck>
            </div>
          );
        })}
 
        <Row></Row>
      </div> */}
        </>
      );
    } else {
      return (
        <>
          <br />
          <h3> login for series </h3>
          <div>
            Please <a href="/login">log in</a> or <a href="/signup">sign up</a>{' '}
            so you can read series
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div style={test.header}>
        <p className="h8tch2">Series</p>
      </div>

      {isMember()}
    </>
  );
}
