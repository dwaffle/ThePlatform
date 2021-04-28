import React, { useState, ChangeEvent, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { IASearchFilter } from '../HorizontalArticleList';
import { ArticleCategoryState } from './article.recoil';

export default function ArticleFilter(props: {
  aSearchDispatch: (searchFilter: IASearchFilter) => void;
}) {
  // global state
  const categories = useRecoilValue<string[]>(ArticleCategoryState);
  // const brands = useRecoilValue<string[]>(aCategoriesState);

  // local state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchBrand, setSearchBrand] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('');

  // events
  const onChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onChangeBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchBrand(e.target.value);
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  // side effects
  useEffect(() => {
    props.aSearchDispatch({
      name: searchTerm,
      // brand: searchBrand,
      category: searchCategory,
    });
  }, [searchTerm, searchCategory, searchBrand]);

  return (
    <>
      <Form>
        <Row>
          {/* <Col>
                    <Form.Control as="select" defaultValue="Choose..." value={searchBrand} onChange={onChangeBrand}>
                        <option value="">Show All...</option>
                        { brands.map(( brand:string ) => <option value={brand}>{brand}</option> )}
                    </Form.Control>
                </Col> */}
          <Col>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              value={searchCategory}
              onChange={onChangeCategory}
            >
              <option value="">Show All...</option>
              {categories.map((category: string) => (
                <option value={category}>{category}</option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              placeholder="Search Article Name..."
              value={searchTerm}
              onChange={onChangeSearchTerm}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
}
