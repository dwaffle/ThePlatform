import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import HorizontalArticles from '../components/ArticleList/HorizontalArticleList'
import '../../node_modules/bootstrap/scss/bootstrap.scss';


import ArticleList from '../components/ArticleList/HorizontalArticleList'


const expected = true;
const actual = false;

test("Test Runner", () => {
    expect(expected).toBe(expected)
});

describe('App', function () {
    it('should display pass in number', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<HorizontalArticles rows={1}/>, container);
        })

        const header = container.querySelector('p');

        expect(header).not.toBe(null);
        // expect(header.textContent).toBe("H)
    });
});
    
