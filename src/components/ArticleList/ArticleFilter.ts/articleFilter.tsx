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
  const [searchAuthor, setSearchAuthor] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('');

  // events
  const onChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onChangeAuthor = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchAuthor(e.target.value);
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  // side effects
  useEffect(() => {
    props.aSearchDispatch({
      name: searchTerm,
      author: searchAuthor,
      category: searchCategory,
    });
  }, [searchTerm, searchCategory, searchAuthor]);

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search Article Name..."
              value={searchTerm}
              onChange={onChangeSearchTerm}
            />
          </Col>

          <Col>
            <Form.Control
              placeholder="Search by Author..."
              value={searchAuthor}
              onChange={onChangeAuthor}
            />
          </Col>

          <Col>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              value={searchCategory}
              onChange={onChangeCategory}
            >
              <option value="">All Categories...</option>
              {categories.map((category: string) => (
                <option value={category}>{category}</option>
              ))}
            </Form.Control>
          </Col>
        </Row>
      </Form>
    </>
  );
}
