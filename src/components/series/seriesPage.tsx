import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Carousel from 'react-multi-carousel';
import {
  Card,
  CardDeck,
  Col,
  Form,
  Row,
  Button,
  ListGroup,
} from 'react-bootstrap';
import unnamed from '../../data/icon/unnamed.jpg';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import { seriesListState } from '../ArticleList/articleList';
import { ISeries } from '../../../services/crud-server/src/models/series';
import SeriesFilter from './searchFilter/SeriesFilter';
import { sCategoriesState } from './searchFilter/series.recoil';

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

  function seriesLink() {
    return history.push('/seriesCreation');
  }

  let test = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'url(https://www.wholelifechallenge.com/wp-content/uploads/2018/06/e-book-header.jpg)',
      height: '35vh',
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

  return (
    <>
      <div style={test.header}>
        <p className="h8tch2">Series</p>
      </div>

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
                      style={{ width: '18rem' }}
                    >
                      <Card.Header className="text-center p-3">
                        {data.series_title}
                      </Card.Header>

                      <Card.Body>
                        <Card.Text>
                          {data.series_desc}
                          <br />
                          <Button
                            className="view-org-button"
                            onClick={onClickHandler(data.series_title)}
                          >
                            View Series
                          </Button>
                        </Card.Text>
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
}
