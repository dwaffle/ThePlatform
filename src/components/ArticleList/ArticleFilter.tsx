import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Col, Form, Row } from 'react-bootstrap';

// export default function ProductFilter( props:{
//     searchDispatch: ( searchFilter:ISearchFilter ) => void
// } ){

//     // global state
//     const categories = useRecoilValue<string[]>(categoriesState);
//     const brands = useRecoilValue<string[]>(brandsState);
    
//     // local state
//     const [ searchTitle, setSearchTitle ] = useState<string>("");
//     const [ searchAuthor, setSearchAuthor] = useState<string>("");
//     const [ searchType, setSearchType ] = useState<string>("");
    
//     // events
//     const onChangeSearchTitle = (e:ChangeEvent<HTMLInputElement>) => {
//         setSearchTitle(e.target.value);
//     }

//     const onChangeAuthor = (e:ChangeEvent<HTMLSelectElement>) => {
//         setSearchAuthor(e.target.value);
//     }

//     const onChangeType = (e:ChangeEvent<HTMLSelectElement>) => {
//         setSearchType(e.target.value);
//     }

//     // side effects
//     useEffect(() => {
//         props.searchDispatch({
//             name: searchTitle,
//             brand: searchAuthor,
//             category: searchType
//         });
//     }, [ searchTitle, searchAuthor, searchType ]);

//     return <>
//         <Form>
//             <Row>
//                 <Col>
//                     <Form.Control as="select" defaultValue="Choose..." value={searchAuthor} onChange={onChangeAuthor}>
//                         <option value="">Show All...</option>
//                         { brands.map(( brand:string ) => <option value={brand}>{brand}</option> )}
//                     </Form.Control>
//                 </Col>
//                 <Col>
//                     <Form.Control as="select" defaultValue="Choose..." value={searchType} onChange={onChangeType}>
//                         <option value="">Show All...</option>
//                         { categories.map(( category:string ) => <option value={category}>{category}</option> )}
//                     </Form.Control>
//                 </Col>
//                 <Col>
//                     <Form.Control placeholder="Search Product Name..." value={searchTitle} onChange={onChangeSearchTitle} />
//                 </Col>
//             </Row>
//         </Form>
//   </>;

// }