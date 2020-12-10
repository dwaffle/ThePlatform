import React from 'react';
import MainLayout from '../src/layouts/MainLayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';



export default function ThePlatform( props:{} ){
    
    return (
        <div>
            
            <BrowserRouter> 
                <Switch>
                    <Route path="/" component={MainLayout} />

    
                </Switch>
            </BrowserRouter>
        </div>
    );

}

// export default function ThePlatform( props:{} ){
    
//   return (
//       <div>
          
//           <BrowserRouter> 
//               <Switch>
//                   <Route path="/wishlist" component={WishPage} />
//                   <Route path="/help" component={Help} />
//                   <Route path="/cart/checkout" component={Checkout} />
//                   <Route path="/product/:id" component={ProductPage} />
//                   <Route path="/cart" component={ShoppingCart} />
//                   <Route path="/" component={HomePage} />

  
//               </Switch>
//           </BrowserRouter>
//       </div>
//   );

// }