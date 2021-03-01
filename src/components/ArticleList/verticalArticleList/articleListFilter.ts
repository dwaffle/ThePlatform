import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

// export default function HorizontalProductList( props:{
//     filter?:boolean,
//     showPagination?:boolean,
//     rows?:number,
//     title?:string,
//     //clearancePrice?:boolean,
//     //salePrice?:boolean
// }){

//     const productsList = useRecoilValue<IProduct[]>(productListState);
//     const [ productRows, setProductRows ] = useState<Array<IProduct[]>>([]);
//     const [ searchFilter, setSearchFilter ] = useState<ISearchFilter>({});

//     useEffect(() => {

//         const innerProductList = [ ...productsList ].filter(( product ) => {

//             let found = true;

//             //Returns all the clearance items for the clearance area.
//             if(props.clearancePrice)
//             {
//                 found = found && product.price.substr(-2,2) === "45";
//                 return found;
//             }

//             //Returns all the sale items
//             if(props.salePrice)
//             {
//                 found = found && product.price.substr(-2,2) === "99";
//                 return found;
//             }

//             //If we're not filtering by name, brand, or category, return all the clearance or sale products.
//             if(!searchFilter?.name && !searchFilter.brand && !searchFilter.category)
//             {
//                      found = found && (product.price.substr(-2,2) === "45" || product.price.substr(-2,2) === "99");
//             }

//             if(searchFilter?.name){
//                 found = product.name.includes( searchFilter.name );
//             }

//             if(searchFilter?.brand){
//                 found = found && product.brand === searchFilter.brand;
//             }

//             if(searchFilter?.category){
//                 found = found && product.categories.includes(searchFilter.category);
//             }

//             return found;

//         });
//         const rows = [];

//         while( innerProductList.length && rows.length < (props.rows||1) ){
//             rows.push( innerProductList.splice(0,4));
//         }

//         setProductRows( rows );

//     }, [ props.rows, searchFilter ]);
