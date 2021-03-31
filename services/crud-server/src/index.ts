import express from "express";
import cors from 'cors';

import * as Tokens from './routes/tokens';
import * as Users from './routes/users';
import * as Articles from './routes/articles';
import * as Organization from './routes/organization';
import * as OrgItems from './routes/organizations'
import * as Payment from './routes/payments';
import * as PaymentInfo from './routes/paymentInfo';
import * as PurchaseArticle from './routes/purchaseArticle';
import * as Series from './routes/series/serie'


const app = express();
const port = 4330;

app.use(express.json());
app.use(cors());

function loadEndpoints( endpoint:any ){
    
    if( typeof endpoint === "function" ){
        endpoint(app);
        return;
    }

    Object.values(endpoint).forEach(loadEndpoints);

}

[ Tokens, Users, Articles, Organization, Payment, PaymentInfo, PurchaseArticle, Series, OrgItems ].forEach( ImportedObject => {
    Object.values( ImportedObject ).forEach( loadEndpoints );

});

app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});